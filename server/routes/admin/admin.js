var express = require('express');
var router = express.Router();
const { CreateAdmin, SignIn } = require('../../controller/Admin/Auth.controller');
const { PreSignUrlGet, PreSignUrlPut } = require('../../controller/Admin/controls/PreSignUrl');
const { getUserIdFromCookie } = require('../../middleware/global/getToken');

// Middlewares
router.use(getUserIdFromCookie)

// Presign url for s3 uploads
router.post('/getPresignedUrlForPut', PreSignUrlPut);
router.post('/getPresignedUrlForGet', PreSignUrlGet)

module.exports = router;