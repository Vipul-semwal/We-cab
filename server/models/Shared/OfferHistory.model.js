const mongoose = require('mongoose');

const offerHistorySchema = new mongoose.Schema({
  offerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
    required: true,
  },
  redeemedAt: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', 
    required: true,
  },
});

const OfferHistory = mongoose.model('OfferHistory', offerHistorySchema);

module.exports = OfferHistory;
