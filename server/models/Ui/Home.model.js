const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    mainImg: { type: String },
    mobileImg: { type: String },
    priority: { type: Number },
    heading: { type: String }
});

const testimonialSchema = new mongoose.Schema({
    img: { type: String },
    heading: { type: String },
    content: { type: String },
    sectionHeading: { type: String }
});

const aboutSchema = new mongoose.Schema({
    mediaType: { type: String, enum: ['image', 'video'] },
    media: { type: String },
    heading: { type: String },
    checkBox: [{ img: { type: String } }]
});

const mapSchema = new mongoose.Schema({
    img: { type: String }
});

const specialtySchema = new mongoose.Schema({
    icon: { type: String },
    heading: { type: String },
    content: { type: String }
});

const faqSchema = new mongoose.Schema({
    mediaType: { type: String, enum: ['image', 'video'] },
    media: { type: String },
    heading: { type: String },
    content: { type: String }
});

const bottomBannerSchema = new mongoose.Schema({
    img: { type: String },
    content: { type: String }
});

const homeSchema = new mongoose.Schema({
    banners: [bannerSchema],
    testimonials: [testimonialSchema],
    about: aboutSchema,
    map: mapSchema,
    specialties: [specialtySchema],
    faqs: [faqSchema],
    bottomBanner: bottomBannerSchema
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
