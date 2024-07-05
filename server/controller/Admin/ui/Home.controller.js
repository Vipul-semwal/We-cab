const Home = require('../../../models/Ui/Home.model')

// Banner 
const addBanner = async (req, res) => {
    const { mainImg, mobileImg, priority, heading } = req.body;

    try {
        const updatedHome = await Home.findOneAndUpdate(
            { _id: req.params.homeId },
            { $push: { banners: { mainImg, mobileImg, priority, heading } } },
            { new: true }
        );

        return res.status(201).json({ message: 'Added sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }
};

const updateBanner = async (req, res) => {
    const { mainImg, mobileImg, priority, heading } = req.body;

    try {
        const updatedHome = await Home.findOneAndUpdate(
            { _id: req.params.homeId, 'banners._id': req.params.bannerId },
            { $set: { 'banners.$.mainImg': mainImg, 'banners.$.mobileImg': mobileImg, 'banners.$.priority': priority, 'banners.$.heading': heading } },
            { new: true }
        );

        return res.status(201).json({ message: 'Updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }
};

const deleteBanner = async (req, res) => {
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { _id: req.params.homeId },
            { $pull: { banners: { _id: req.params.bannerId } } },
            { new: true }
        );

        return res.status(201).json({ message: 'banner deleted sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to delete banner.' });
    }
};

// Controller for testimonial
const addTestimonial = async (req, res) => {
    const { img, heading, content, sectionHeading } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            {},
            { $push: { testimonials: { img, heading, content, sectionHeading } } },
            { new: true, upsert: true }
        );
        return res.status(201).json({ message: ' Added sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }
};

const updateTestimonial = async (req, res) => {
    const { testimonialId, img, heading, content, sectionHeading } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'testimonials._id': testimonialId },
            {
                $set: {
                    'testimonials.$.img': img,
                    'testimonials.$.heading': heading,
                    'testimonials.$.content': content,
                    'testimonials.$.sectionHeading': sectionHeading
                }
            },
            { new: true }
        );
        return res.status(201).json({ message: 'Updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }
};

const deleteTestimonial = async (req, res) => {
    const { testimonialId } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'testimonials._id': testimonialId },
            { $pull: { testimonials: { _id: testimonialId } } },
            { new: true }
        );
        return res.status(201).json({ message: ' deleted sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to delete testimonial.' });
    }
};

// Controller for specialty
const addSpecialty = async (req, res) => {
    const { icon, heading, content } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            {},
            { $push: { specialties: { icon, heading, content } } },
            { new: true, upsert: true }
        );
        return res.status(201).json({ message: 'Added sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'unknown error' });
    }
};

const updateSpecialty = async (req, res) => {
    const { specialtyId, icon, heading, content } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'specialties._id': specialtyId },
            {
                $set: {
                    'specialties.$.icon': icon,
                    'specialties.$.heading': heading,
                    'specialties.$.content': content
                }
            },
            { new: true }
        );
        return res.status(201).json({ message: 'updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to update specialty.' });
    }
};

const deleteSpecialty = async (req, res) => {
    const { specialtyId } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'specialties._id': specialtyId },
            { $pull: { specialties: { _id: specialtyId } } },
            { new: true }
        );
        return res.status(201).json({ message: 'deleted sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to delete specialty.' });
    }
};

// Controller for FAQ
const addFAQ = async (req, res) => {
    const { mediaType, media, heading, content } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            {},
            { $push: { faqs: { mediaType, media, heading, content } } },
            { new: true, upsert: true }
        );
        return res.status(201).json({ message: 'Added sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to add FAQ.' });
    }
};

const updateFAQ = async (req, res) => {
    const { faqId, mediaType, media, heading, content } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'faqs._id': faqId },
            {
                $set: {
                    'faqs.$.mediaType': mediaType,
                    'faqs.$.media': media,
                    'faqs.$.heading': heading,
                    'faqs.$.content': content
                }
            },
            { new: true }
        );
        return res.status(201).json({ message: 'updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to update FAQ.' });
    }
};

const deleteFAQ = async (req, res) => {
    const { faqId } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            { 'faqs._id': faqId },
            { $pull: { faqs: { _id: faqId } } },
            { new: true }
        );
        return res.status(201).json({ message: ' deleted sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to delete FAQ.' });
    }
};

// Controller to update map
const updateMap = async (req, res) => {
    const { img } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            {},
            { 'map.img': img },
            { new: true }
        );
        return res.status(201).json({ message: ' updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to update map.' });
    }
};

//Controller to update  About
const updateAbout = async (req, res) => {
    const { mediaType, media, heading, checkBox } = req.body;

    try {
        const updatedHome = await Home.findOneAndUpdate(
            { _id: req.params.homeId },
            { mediaType, media, heading, checkBox },
            { new: true }
        );

        res.json(updatedHome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update about section.' });
    }
};

// Controller to update bottom banner
const updateBottomBanner = async (req, res) => {
    const { img, content } = req.body;
    try {
        const updatedHome = await Home.findOneAndUpdate(
            {},
            { 'bottomBanner.img': img, 'bottomBanner.content': content },
            { new: true }
        );
        return res.status(201).json({ message: ' updated sucessfully', success: true })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "internal server error", success: false, error: 'Failed to update bottom banner.' });
    }
};



module.exports = {
    addBanner,
    addTestimonial,
    addSpecialty,
    addFAQ,
    updateBanner,
    updateTestimonial,
    updateSpecialty,
    updateFAQ,
    updateMap,
    updateAbout,
    updateBottomBanner,
    deleteBanner,
    deleteTestimonial,
    deleteSpecialty,
    deleteFAQ
}
