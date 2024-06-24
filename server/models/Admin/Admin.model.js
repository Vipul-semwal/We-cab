const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the Admin Schema
const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name cannot be empty"],
    },
    type: {
        type: String,
        required: [true, 'type is required']
    }
    ,
    email: {
        type: String,
        required: [true, "email cannot be empty"],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"],
        minlength: [8, 'Password should be at least 8 characters long'],
    },
    status: {
        type: String,
    }
    ,
    profile_pic: {
        type: String,
    },

});

AdminSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password') || user.isNew) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    }
    next();
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
