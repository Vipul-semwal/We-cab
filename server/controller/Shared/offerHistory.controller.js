const OfferHistory = require('../../models/Shared/OfferHistory.model');
const { notifyAdmin } = require('../../helper/utils');

const createOfferHistory = async (req, res) => {
    const { userId, offerId, timestamp } = req.body;
    const userRole = req.user.role;

    try {
        if (userRole === 'vendor') {
            notifyAdmin(`Vendor ${req.user.id} has requested to create a new offer history.`);
            return res.status(200).json({ message: 'Request sent to admin for approval', success: true });
        }

        const newOfferHistory = await OfferHistory.create({ userId, offerId, timestamp });
        return res.status(201).json({ message: 'Offer history added successfully', success: true, offerHistory: newOfferHistory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const updateOfferHistory = async (req, res) => {
    const { id } = req.params;
    const { userId, offerId, timestamp } = req.body;

    try {
        const updatedOfferHistory = await OfferHistory.findByIdAndUpdate(id, { userId, offerId, timestamp }, { new: true });
        if (!updatedOfferHistory) return res.status(404).json({ message: 'Offer history not found', success: false });
        
        return res.status(200).json({ message: 'Offer history updated successfully', success: true, offerHistory: updatedOfferHistory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const deleteOfferHistory = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedOfferHistory = await OfferHistory.findByIdAndDelete(id);
        if (!deletedOfferHistory) return res.status(404).json({ message: 'Offer history not found', success: false });
        
        return res.status(200).json({ message: 'Offer history deleted successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

module.exports = {
    createOfferHistory,
    updateOfferHistory,
    deleteOfferHistory
};
