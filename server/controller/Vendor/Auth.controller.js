const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const VendorModel = require('../../models/Vendor/query.moodel');
const VendorMaster = require('../../models/Vendor/Vendor.model')
const SendEmail = require('../../services/NodeMail')
const { MongoDuplicateKeyError, MongoValidationError } = require('../../errors/Mongo.error')
const verificationHtml = require('../../helper/verificationHtml');
const { GetUserIdFromCookie } = require('../../helper/utils')
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')


async function SignUP(req, res) {
    const { name, email, password, phone } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const CheckEmail = await VendorModel.findOne({ email });
        if (CheckEmail) {
            await session.abortTransaction();
            return res.status(409).json({ success: false, message: "Email already registered", error: 'Duplicate key error' });
        }

        const NewVendor = await VendorModel.create([{
            name,
            email,
            password,
            phone,
        }], { session });

        const MailData = {
            email,
            subject: 'Email verification',
        };
        const htmlFncOptions = {
            name: NewVendor[0].name,
            user_id: NewVendor[0]._id,
            route: `${process.env.BaseUrl}/vendor/verify-email`,
        };
        const Email = await SendEmail(MailData, verificationHtml, htmlFncOptions);
        if (Email === true) {
            await session.commitTransaction();
            return res.status(200).json({ message: 'Account created successfully. Please check your email for verification link.', success: true });
        } else {
            await session.abortTransaction();
            return res.status(500).json({ message: 'Something went wrong', error: 'Trouble sending verification email', success: false });
        }
    } catch (error) {
        console.log(error);
        await session.abortTransaction();
        if (error.name === "ValidationError") {
            return MongoValidationError(error);
        }
        return res.status(500).json({ message: "Internal server error", success: false, error: 'Unknown error' });
    } finally {
        session.endSession();
    }
}

async function SignIn(req, res) {
    const { email, password } = req.body;
    const CurrentVendor = await VendorModel.findOne({ email });

    if (!CurrentVendor) {
        return res.status(404).json({ message: 'User not found', success: false, error: 'no user in db' });
    }

    if (!CurrentVendor.emailVerification) {
        return res.status(401).json({ message: 'Email not verified. Please verify your email to login', success: false });
    }

    if (CurrentVendor.status !== "verified") {
        return res.status(401).json({ message: 'Admin has not verified your account. Please wait or contact our team', success: false });
    }

    const validPassword = await bcrypt.compare(password, CurrentVendor.password);
    if (!validPassword) {
        return res.status(401).json({ message: 'Wrong password', success: false, error: 'password not matched' });
    }

    const accessToken = jwt.sign({ userId: CurrentVendor._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
    const refreshToken = jwt.sign({ userId: CurrentVendor._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const updatedUser = await VendorModel.findOneAndUpdate(
            { _id: CurrentVendor._id },
            { $set: { refreshToken: refreshToken } },
            { new: true }
        ).session(session);

        if (updatedUser) {
            res.cookie('token', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
                sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Set to 'None' if using cross-site cookies
            });

            res.cookie('refresh-token', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Set to true if using HTTPS
                sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Set to 'None' if using cross-site cookies
            });
            await session.commitTransaction();
            return res.status(200).json({ message: 'Successfully logged in', token: accessToken, refreshToken: refreshToken, success: true });
        } else {
            await session.abortTransaction();
            return res.status(500).json({ message: 'Failed to update user session', success: false, error: "faild to set refresh token" });
        }
    } catch (error) {
        await session.abortTransaction();
        console.error('Error during SignIn transaction:', error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    } finally {
        session.endSession();
    }
}

async function VerifyUser(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).render('SignupError', { error: { message: 'Something went wrong! Please sign up again.', url: process.env.CLIENTBASEURL } });
        }

        // Check if the link was already visited
        const verificationCheck = await VendorModel.findById(id);
        if (!verificationCheck) {
            return res.status(404).render('SignupError', { error: { message: 'Verification link is invalid or expired. Please sign up again.', url: process.env.CLIENTBASEURL } });
        }

        if (verificationCheck.Clicked === true) {
            return res.status(400).render('SignupError', { error: { message: 'User already verified.', url: process.env.CLIENTHOMEURL } });
        }

        const userUpdate = await VendorModel.findByIdAndUpdate(
            id,
            { emailVerification: true, Clicked: true },
            { new: true }
        );

        if (!userUpdate) {
            return res.status(500).render('SignupError', { error: { message: 'Something went wrong! Please sign up again.', url: process.env.CLIENTBASEURL } });
        }

        return res.render('SignupSucc', { data: userUpdate.name, url: process.env.CLIENTHOMEURL });

    } catch (error) {
        console.error(error);
        return res.status(500).render('SignupError', { error: { message: 'Something went wrong! Please sign up again.', url: process.env.CLIENTBASEURL } });
    }
}

async function SendRestPasswordLink(req, res) {
    const { email } = req.body
    try {
        const Vendor = await VendorMaster.findOne({ email });
        if (!Vendor) {
            return res.status(404).json({ message: 'User not found', success: false, error: 'no user in db' });
        }

        const MailData = {
            email,
            subject: 'Password Reset',

        }
        const user_id = jwt.sign({ userId: Vendor._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

        const htmlFncOptions = {
            name: Vendor.name,
            user_id,
            route: `${process.env.BaseUrl}vendor/reset-password`
        }
        const Email = await SendEmail(MailData, verificationHtml, htmlFncOptions);
        if (!Email) {
            return res.status(500).json({ message: 'Trouble Sending Link', success: false, error: "Trouble Sending email" })
        }

        return res.status(200).json({ message: 'Reset Link send to your Registerd Email', success: true })
    } catch (error) {
        console.log('rest link trouble sending email:', error)
        return res.status(500).json({ message: 'internal Server Error', success: false, error: "unkown error" })
    }
}

async function RestPassword(req, res) {
    const { password, confrimPassword, token } = req.body
    const userId = GetUserIdFromCookie(token);
    if (!userId) {
        return res.status(401).json({ message: 'link invalid', success: false, error: 'jwt error' });
    }
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match', success: false, error: 'password and confirm password not match' });
    }

    try {
        const vendor = await VendorMaster.findByIdAndUpdate({ token }, { 'personalDetail.password': password })
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found', success: false, error: 'while updating the password feild vendor is not found in the Data Base' });
        }
        return res.status(200).json({ message: 'password rest successfully', success: true })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'something went wrong', success: false, error: 'unkown error' });
    }



}

module.exports = { VerifyUser, SignIn, SignUP };