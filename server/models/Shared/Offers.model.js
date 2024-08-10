const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  offerName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  validity: {
    type: Date,
    required: true,
  },
  redeemId: {
    type: String,
    required: true,
  },
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
