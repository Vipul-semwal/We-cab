const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SendEmail = require('../../services/NodeMail')
const { MongoDuplicateKeyError, MongoValidationError } = require('../../errors/Mongo.error')
const dotenv = require("dotenv").config()
const AdminModel = require('../../models/Admin/Admin.model')


async function CreateAdmin(req, res) {
    const { name, email, password, role } = req.body
    try {
        const CheckEmail = await AdminModel.findOne({ email });
        if (CheckEmail) {
            return res.status(409).json({ success: false, message: "email already registerd", error: ' duplicate key error' });
        }
        const NewAdmin = await AdminModel.create({
            name,
            email,
            password,
            role
        })
        return res.status(201).json({ message: 'Admin Added sucessfully', success: true })

    } catch (error) {
        console.log(error)
        if (error.name === "ValidationError") {
            return MongoValidationError(error)
        }
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }

}

async function SignIn(req, res) {
    const { email, password } = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const admin = await AdminModel.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'User not found', success: false, error: 'No user in DB' });
        }

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Wrong password', success: false, error: 'Password not matched' });
        }

        const accessToken = jwt.sign({ userId: admin._id }, process.env.ACCESS_TOKEN_SECRET);
        const refreshToken = jwt.sign({ userId: admin._id }, process.env.REFRESH_TOKEN_SECRET);

        const updatedUser = await AdminModel.findOneAndUpdate(
            { _id: admin._id },
            { $set: { refreshToken: refreshToken } },
            { new: true }
        ).session(session);;

        if (updatedUser) {
            req.session.token = accessToken;
            req.session.refreshToken = refreshToken;

            return res.status(200).json({ message: 'Successfully logged in', token: accessToken, refreshToken: refreshToken, success: true });
        } else {
            throw new Error('Failed to update user session')
        }
    } catch (error) {
        await session.abortTransaction();
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'Unknown error' });
    }
    finally {
        session.endSession();
    }

}


module.exports = { CreateAdmin, SignIn }