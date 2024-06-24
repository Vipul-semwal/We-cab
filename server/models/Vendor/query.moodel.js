const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const vendorQuerySchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [128, 'Password must be at most 128 characters'],
        validate: {
            validator: function (value) {
                // Check if password contains at least one lowercase letter, one uppercase letter, one digit, and one special character
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(value);
            },
            message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
        }
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        match: [/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Please use a valid phone number']
    },
    status: { type: String, default: 'pending', enum: ['pending', 'verified', 'rejected'] },
    emailVerification: { type: Boolean, default: false },
    Clicked: {
        type: Boolean,
        default: false
    },
});

// Hash password before saving
vendorQuerySchema.pre('save', async function (next) {
    const vendorQuery = this;
    if (vendorQuery.isModified('password') || vendorQuery.isNew) {
        const hashedPassword = await bcrypt.hash(vendorQuery.password, 10);
        vendorQuery.password = hashedPassword;
    }
    next();
});

const VendorQuery = mongoose.model('VendorQuery', vendorQuerySchema);

module.exports = VendorQuery;
