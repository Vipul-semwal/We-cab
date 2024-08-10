const Country = require('../../models/Shared/Country.model');
const { notifyAdmin } = require('../../helper/utils');

const createCountry = async (req, res) => {
    const { name, flag, code } = req.body;
    const userRole = req.user.role;

    try {
        if (userRole === 'vendor') {
            notifyAdmin(`Vendor ${req.user.id} has requested to create a new country.`);
            return res.status(200).json({ message: 'Request sent to admin for approval', success: true });
        }

        const newCountry = await Country.create({ name, flag, code });
        return res.status(201).json({ message: 'Country added successfully', success: true, country: newCountry });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const updateCountry = async (req, res) => {
    const { id } = req.params;
    const { name, flag, code } = req.body;

    try {
        const updatedCountry = await Country.findByIdAndUpdate(id, { name, flag, code }, { new: true });
        if (!updatedCountry) return res.status(404).json({ message: 'Country not found', success: false });
        
        return res.status(200).json({ message: 'Country updated successfully', success: true, country: updatedCountry });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const deleteCountry = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCountry = await Country.findByIdAndDelete(id);
        if (!deletedCountry) return res.status(404).json({ message: 'Country not found', success: false });
        
        return res.status(200).json({ message: 'Country deleted successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

module.exports = {
    createCountry,
    updateCountry,
    deleteCountry
};
