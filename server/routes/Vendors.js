var express = require('express');
var router = express.Router();
const { VerifyUser, SignIn, SignUP } = require('../controller/Vendor/Auth.controller')

/* Vendor Auth Routes. */
router.post('/register', SignUP);
router.get('/verify-email/:id', VerifyUser);
router.post('/sign-in', SignIn)

module.exports = router;
