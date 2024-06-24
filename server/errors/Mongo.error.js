function MongoValidationError(error, res) {
    const validationErrors = Object.values(error.errors).map((val) => val.message)[0]
    return res.status(400).json({ success: false, message: validationErrors, error: 'Validation error' });
}

function MongoDuplicateKeyError(error, res) {
    let key = Object.keys(error.keyValue)[1];
    let message = `${key} already exists.`;
    return res.status(400).json({ success: false, message, errors: 'Duplicate key error' });
}


module.exports = { MongoDuplicateKeyError, MongoValidationError }

