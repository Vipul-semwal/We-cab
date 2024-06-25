var express = require('express');
var router = express.Router();
const { CreateAdmin, SignIn } = require('../controller/Admin/Auth.controller');


/* Auth routes */
router.post('/sign-up', CreateAdmin)
router.post('/sign-in', SignIn)

module.exports = router;