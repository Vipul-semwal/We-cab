var express = require('express');
var router = express.Router();

/* Vendor Auth Routes. */
router.get('/register', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
