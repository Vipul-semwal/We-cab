const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const VendorModel = require('../../models/Vendor/query.moodel');
const VendorMaster = require('../../models/Vendor/Vendor.model')
const SendEmail = require('../../services/NodeMail')
const { MongoDuplicateKeyError, MongoValidationError } = require('../../errors/Mongo.error')
const verificationHtml = require('../../helper/verificationHtml')
const dotenv = require("dotenv").config()


async function SignUP(req, res) {

    const { name, email, password, phone } = req.body
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const CheckEmail = await user.findOne({ email });
        if (CheckEmail) {
            return res.status(409).json({ success: false, message: "email already registerd", error: ' duplicate key error' });
        }

        const NewVendor = await user.create([{
            firstName: firstName,
            email,
            password
        }], { session })

        const MailData = {
            email,
            subject: 'Email verification',

        }
        const htmlFncOptions = {
            name: NewVendor[0].name,
            user_id: NewVendor[0]._id,
            route: `${process.env.BaseUrl}vendor/veify`
        }
        const Email = await SendEmail(MailData, verificationHtml, htmlFncOptions);
        if (Email === true) {
            await session.commitTransaction();
            return res.status(200).json({ message: 'account created sucessfully please check you mail for vefifaction link', success: true })
        }
        else {
            await session.abortTransaction();
            return res.status(500).json({ message: 'something went wrong', error: 'trouble sending verification email', success: false })
        }
    } catch (error) {
        console.log(error)
        await session.abortTransaction();

        if (error.name === "ValidationError") {
            return MongoValidationError(error)
        }

        return res.status(500).json({ message: "internal server error", success: false });
    }
    finally {
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

    if (!CurrentVendor.status === "verified") {
        return res.status(401).json({ message: 'Admin has not Verified your account, Please wait or conatct our team', success: false });
    }

    const validPassword = await bcrypt.compare(password, CurrentVendor.password);
    if (!validPassword) {
        return res.status(401).json({ message: 'Wrong password', success: false });
    }

    const accessToken = jwt.sign({ userId: curretnUser._id }, process.env.ACCESS_TOKEN_SECRET,);
    const refershToken = jwt.sign({ refreshToken: curretnUser._id }, process.env.REFRESH_TOKEN_SECRET);

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const updatedUser = await VendorModel.findOneAndUpdate(
            { _id: curretnUser._id },
            { $set: { refershToken: refershToken } },
            { new: true }
        ).session(session);

        if (updatedUser) {
            res.cookie('token', accessToken, {
                httpOnly: true,
                // Secure: true, // Uncomment this if using HTTPS
                // SameSite: 'None', // Uncomment this if using cross-site cookies
            });

            res.cookie('refresh-token', refershToken, {
                httpOnly: true,
                // Secure: true, // Uncomment this if using HTTPS
                // SameSite: 'None', // Uncomment this if using cross-site cookies
            });
            await session.commitTransaction();
            return res.status(200).json({ message: 'Successfully logged in', token: accessToken, refreshToken: refershToken, success: true });
        }
        else {
            await session.abortTransaction();
        }

    } catch (error) {
        await session.abortTransaction();
        console.log(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknow error' });
    }
    finally {
        session.endSession();
    }
}

async function verifyUser(req, res) {
    try {
        const { id } = req.params;

        if (!id) {
            return res.render('SignupError', { error: { message: 'Something went wrong! Please Sign Up Again', url: process.env.ClientBaseUrl } });
        }

        // check for if linked visted again 
        const checkverifaction = await VendorModel.findOne({ _id: id });
        console.log("cehck data", checkverifaction);
        if (checkverifaction.Clicked === true) {
            return res.render('SignupError', { error: { message: 'user already verfied', url: process.env.CLIENTHOMEURL } });
        }

        const userUpdate = await VendorModel.findByIdAndUpdate(
            { _id: id },
            { emailVerification: true, Clicked: true },
            { new: true }
        );

        if (!userUpdate) {
            return res.render('SignupError', { error: { message: 'Something went wrong! Please Sign Up Again', url: process.env.ClientBaseUrl } });
        }

        return res.render('SignupSucc', { data: userUpdate.firstName, url: process.env.CLIENTHOMEURL })

    } catch (error) {
        console.error(error);
        return res.render('SignupError', { error: { message: 'Something went wrong! Please Sign Up Again', url: process.env.CLIENTHOMEURL } });
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
        const htmlFncOptions = {
            name: Vendor[0].name,
            user_id: Vendor[0]._id,
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


}
