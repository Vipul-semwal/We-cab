const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  cityImage: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

const City = mongoose.model('City', citySchema);

module.exports = City;
