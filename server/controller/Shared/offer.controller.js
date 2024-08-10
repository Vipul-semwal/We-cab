const Offer = require('../../models/Shared/Offers.model');
const { notifyAdmin } = require('../../helper/utils');


const createOffer = async (req, res) => {
    const { offerName, type, validity, redeemId } = req.body;
    const userRole = req.user.role;

    try {
        if (userRole === 'vendor') {
            notifyAdmin(`Vendor ${req.user.id} has requested to create a new offer.`);
            return res.status(200).json({ message: 'Request sent to admin for approval', success: true });
        }

        const newOffer = await Offer.create({ offerName, type, validity, redeemId });
        return res.status(201).json({ message: 'Offer added successfully', success: true, offer: newOffer });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const updateOffer = async (req, res) => {
    const { id } = req.params;
    const { offerName, type, validity, redeemId } = req.body;

    try {
        const updatedOffer = await Offer.findByIdAndUpdate(id, { offerName, type, validity, redeemId }, { new: true });
        if (!updatedOffer) return res.status(404).json({ message: 'Offer not found', success: false });
        
        return res.status(200).json({ message: 'Offer updated successfully', success: true, offer: updatedOffer });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const deleteOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOffer = await Offer.findByIdAndDelete(id);
        if (!deletedOffer) return res.status(404).json({ message: 'Offer not found', success: false });
        
        return res.status(200).json({ message: 'Offer deleted successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

module.exports = {
    createOffer,
    updateOffer,
    deleteOffer
};
