const City = require('../../models/Shared/city.model');
const { notifyAdmin } = require('../../helper/utils');

const createCity = async (req, res) => {
    const { countryId, cityName, cityImage, bannerImage, latitude, longitude } = req.body;
    const userRole = req.user.role;

    try {
        if (userRole === 'vendor') {
            notifyAdmin(`Vendor ${req.user.id} has requested to create a new city.`);
            return res.status(200).json({ message: 'Request sent to admin for approval', success: true });
        }

        const newCity = await City.create({ countryId, cityName, cityImage, bannerImage, latitude, longitude });
        return res.status(201).json({ message: 'City added successfully', success: true, city: newCity });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const updateCity = async (req, res) => {
    const { id } = req.params;
    const { countryId, cityName, cityImage, bannerImage, latitude, longitude } = req.body;

    try {
        const updatedCity = await City.findByIdAndUpdate(id, { countryId, cityName, cityImage, bannerImage, latitude, longitude }, { new: true });
        if (!updatedCity) return res.status(404).json({ message: 'City not found', success: false });
        
        return res.status(200).json({ message: 'City updated successfully', success: true, city: updatedCity });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const deleteCity = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCity = await City.findByIdAndDelete(id);
        if (!deletedCity) return res.status(404).json({ message: 'City not found', success: false });
        
        return res.status(200).json({ message: 'City deleted successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

module.exports = {
    createCity,
    updateCity,
    deleteCity
};
