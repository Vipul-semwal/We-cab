var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('SignupSucc', { data: "vipul", url: process.env.CLIENTHOMEURL });
});

router.get('/error', function (req, res, next) {
  res.render('SignupError', { error: { message: 'Something went wrong! Please Sign Up Again', url: process.env.ClientBaseUrl } });
});

module.exports = router;
