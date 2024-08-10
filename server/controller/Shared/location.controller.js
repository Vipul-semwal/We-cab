const Location = require('../../models/Shared/Location.model');
const { notifyAdmin } = require('../../helper/utils');

const createLocation = async (req, res) => {
    const { name, shortDescription, bannerImg, cityId, latitude, longitude } = req.body;
    const userRole = req.user.role;

    try {
        if (userRole === 'vendor') {
            notifyAdmin(`Vendor ${req.user.id} has requested to create a new location.`);
            return res.status(200).json({ message: 'Request sent to admin for approval', success: true });
        }

        const newLocation = await Location.create({ name, shortDescription, bannerImg, cityId, latitude, longitude });
        return res.status(201).json({ message: 'Location added successfully', success: true, location: newLocation });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { name, shortDescription, bannerImg, cityId, latitude, longitude } = req.body;

    try {
        const updatedLocation = await Location.findByIdAndUpdate(id, { name, shortDescription, bannerImg, cityId, latitude, longitude }, { new: true });
        if (!updatedLocation) return res.status(404).json({ message: 'Location not found', success: false });
        
        return res.status(200).json({ message: 'Location updated successfully', success: true, location: updatedLocation });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

const deleteLocation = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedLocation = await Location.findByIdAndDelete(id);
        if (!deletedLocation) return res.status(404).json({ message: 'Location not found', success: false });
        
        return res.status(200).json({ message: 'Location deleted successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false, error: 'unknown error' });
    }
};

module.exports = {
    createLocation,
    updateLocation,
    deleteLocation
};
