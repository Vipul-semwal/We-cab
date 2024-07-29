var express = require('express');
var router = express.Router();
const { getUserIdFromCookie } = require('../../middleware/global/getToken');
const {
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
} = require('../../controller/Admin/ui/Home.controller');

// Middlewares
router.use(getUserIdFromCookie)

// Add routes
router.post('/add-banner', addBanner);
router.post('/add-testimonial', addTestimonial);
router.post('/add-specialty', addSpecialty);
router.post('/add-faq', addFAQ);

// Update routes
router.put('/update-banner', updateBanner);
router.put('/update-testimonial', updateTestimonial);
router.put('/update-specialty', updateSpecialty);
router.put('/update-faq', updateFAQ);
router.put('/update-map', updateMap);
router.put('/update-about', updateAbout);
router.put('/update-bottom-banner', updateBottomBanner);

// Delete routes
router.delete('/delete-banner', deleteBanner);
router.delete('/delete-testimonial', deleteTestimonial);
router.delete('/delete-specialty', deleteSpecialty);
router.delete('/delete-faq', deleteFAQ);

module.exports = router;