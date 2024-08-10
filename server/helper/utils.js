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

const notifyAdmin = (message) => {
    // Logic to notify the admin
    console.log('Notify Admin:', message);
};



module.exports = { GetUserIdFromCookie,notifyAdmin }