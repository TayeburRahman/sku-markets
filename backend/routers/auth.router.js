const router = require('express').Router();
const protect = require('../middleware/protect');
const {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    updatePassword,
    setRefreshToken,
    verifyEmail,
    sendOTP,
    verifyOTP,
    sendEmailVerificationToken,
} = require('../controllers/auth.controller');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logoutUser);
router.route('/password/update').put(protect, updatePassword);
router.route('/refresh_token').get(protect, setRefreshToken);
router.route('/email/verify/:token').get(protect, verifyEmail);
router
    .route('/send/email/verify/token')
    .get(protect, sendEmailVerificationToken);
router.report('/send/otp').post(protect, sendOTP);
router.route('/verify/otp').post(protect, verifyOTP);

module.exports = router;
