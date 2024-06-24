const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const vendorSchema = new Schema({
    personalDetail: {
        email: { type: String, required: true },
        phoneNo: { type: String, required: true },
        password: { type: String, required: true },
        status: { type: String },
        emailVerification: { type: Boolean, default: false },
        mobileVerification: { type: Boolean, default: false },
        gender: { type: String },
        dob: { type: Date },
    },
    companyDetail: {
        companyName: { type: String },
        companyAddress: { type: String },
        contactNo1: { type: String },
        contactNo2: { type: String },
        businessEmail: { type: String },
        fax: { type: String },
        gstNumber: { type: String },
        numberOfEmployees: { type: Number },
        websiteURL: { type: String },
    }
});

// Hash password before saving
vendorSchema.pre('save', async function (next) {
    const vendor = this;
    if (vendor.isModified('personalDetail.password') || vendor.isNew) {
        const hashedPassword = await bcrypt.hash(vendor.personalDetail.password, 10);
        vendor.personalDetail.password = hashedPassword;
    }
    next();
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
