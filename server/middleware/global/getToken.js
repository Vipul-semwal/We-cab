const { GetUserIdFromCookie } = require('../../helper/utils')

const getUserIdFromCookie = (req, res, next) => {
    const userId = GetUserIdFromCookie(req.session.token);
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized request, please sign-in again', success: false });
    }
    req.userId = userId;
    next();
};


module.exports = { getUserIdFromCookie }