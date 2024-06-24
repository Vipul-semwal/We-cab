const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongooseOptions = {
};

// Export the connection promise
const mongooseConnect = mongoose.connect(process.env.MONGO_CONNECTION_STRING, mongooseOptions);

module.exports = mongooseConnect;
