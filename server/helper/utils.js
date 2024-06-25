const jwt = require('jsonwebtoken');

function GetUserIdFromCookie(token) {
    console.log('get it', token)
    if (!token) {
        return null
    }
    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log('ho ch=uka veiry', decodedToken)
        const { userId } = decodedToken;
        return userId
    } catch (error) {
        console.log("jwt error", error)
        return null
    }


};


module.exports = { GetUserIdFromCookie }