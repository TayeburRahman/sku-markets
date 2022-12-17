const catchAsyncErrors = require('../lib/catchAsyncErrors');
const { sendEmail } = require('../lib/nodemailer');
const User = require('../models/user.model');
const AppError = require('../util/appError');
const crypto = require('crypto');

// create new user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    // create token
    const token = user.getJwtToken();

    res.status(201).json({
        success: true,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token,
            createdAt: user.createdAt,
        },
    });
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    // const io = req.io;

    // check if email and password is entered by user
    if (!email || !password) {
        return next(new AppError('Please enter email and password', 400));
    }

    // finding user in database
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new AppError('Invalid Email or Password', 401));
    }

    // check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new AppError('Invalid Email or Password', 401));
    }

    // aware the user that he is logged in
    io.emit('login', {
        message: `${user.name} just logged in!`,
    });

    // create token
    const token = user.getJwtToken();

    res.status(200).json({
        success: true,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            token,
        },
    });
});

// logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    const io = req.io;

    // aware the user that he is logged out
    io.emit('logout', {
        message: `${req.user.name} just logged out!`,
    });

    res.status(200).json({
        success: true,
        message: 'User logged out',
    });
});

// get currently logged in user details
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// update / change password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user._id).select('+password');

    // check if previous old password
    if (!req.body.oldPassword) {
        return next(new AppError('Please enter old password', 400));
    }

    // check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if (!isMatched) {
        return next(new AppError('Old password is incorrect', 400));
    }

    user.password = req.body.password;
    await user.save();

    res.status(200).json({
        success: true,
        message: 'Password updated successfully',
    });
});

// update user profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    // update avatar: TODO

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        user,
    });
});

// forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new AppError('User not found with this email', 404));
    }

    // get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // create reset password url
    const resetUrl = `${process.env.CLIENT_URL}/password/reset/${resetToken}`;

    // forget password email template
    const html = `
<!doctype html>
<html lang="en-US">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title>Reset Password Email Template</title>
        <meta name="description" content="Reset Password Email Template.">
        <style type="text/css">
        a:hover {text-decoration: underline !important;}
        </style>
    </head>
    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                align="center" cellpadding="0" cellspacing="0">
                <tr>
                <td style="height:80px;">&nbsp;</td>
                </tr>
                <tr>
                <td style="text-align:center;">
                <a href="https://rakeshmandal.com" title="logo" target="_blank">
                <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">
                </a>
                </td>
                </tr>
                <tr>
                <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                <td>
                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                <tr>
                <td style="height:40px;">&nbsp;</td>
                </tr>
                <tr>
                <td style="padding:0 35px;">
                <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                requested to reset your password</h1>
                <span
                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                We cannot simply send you your old password. A unique link to reset your
                password has been generated for you. To reset your password, click the
                following link and follow the instructions.
                </p>
                <a href=${resetUrl} clicktracking=off
                style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                Password</a>
                </td>
                </tr>
                <tr>
                <td style="height:40px;">&nbsp;</td>
                </tr>
                </table>
                </td>
                <tr>
                <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                <td style="text-align:center;">
                <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.rakeshmandal.com</strong></p>
                </td>
                </tr>
                <tr>
                <td style="height:80px;">&nbsp;</td>
                </tr>
                </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>
</html>
`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'SKU Market Password Recovery',
            html,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`,
        });
    } catch (error) {
        console.log(error);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new AppError(error.message, 500));
    }
});

// reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    // hash url token
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new AppError(
                'Password reset token is invalid or has been expired',
                400
            )
        );
    }

    if (
        req.body.password !== req.body.confirmPassword ||
        !req.body.password ||
        !req.body.confirmPassword
    ) {
        return next(new AppError('Password does not match', 400));
    }

    // setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    // create token
    const token = user.getJwtToken();

    res.status(200).json({
        success: true,
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token,
        },
        message: 'Password updated successfully',
    });
});

// verify email
exports.verifyEmail = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
        return next(new AppError('User not found with this token', 404));
    }

    if (user.isEmailVerified) {
        return next(new AppError('Email already verified', 400));
    }

    user.isEmailVerified = true;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: 'Email verified successfully',
    });
});

//send email verification token
exports.sendEmailVerificationToken = catchAsyncErrors(
    async (req, res, next) => {
        const user = await User.findById(req.user.id);

        // get verification token
        const token = user.getVerifyEmailToken();

        await user.save({ validateBeforeSave: false });

        // create verification url
        const verifyUrl = `${req.protocol}://${req.get(
            'host'
        )}/api/v1/verify/email/${token}`;

        const message = `Your email verification token is as follow:\n\n${verifyUrl}\n\nIf you have not requested this email, then ignore it.`;

        try {
            await sendEmail({
                email: user.email,
                subject: 'ShopIT Email Verification',
                message,
            });

            res.status(200).json({
                success: true,
                message: `Email sent to: ${user.email}`,
            });
        } catch (error) {
            user.verifyEmailToken = undefined;
            user.verifyEmailExpire = undefined;

            await user.save({ validateBeforeSave: false });

            return next(new AppError(error.message, 500));
        }
    }
);

// send OTP to user phone
exports.sendOTP = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    // get OTP
    const otp = user.getOTP();

    await user.save({ validateBeforeSave: false });

    try {
        await sendSMS({
            phone: user.phone,
            message: `Your OTP is ${otp}`,
        });

        res.status(200).json({
            success: true,
            message: `OTP sent to: ${user.phone}`,
        });
    } catch (error) {
        user.otp = undefined;
        user.otpExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new AppError(error.message, 500));
    }
});

// verify OTP
exports.verifyOTP = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    if (user.otp !== req.body.otp) {
        return next(new AppError('Invalid OTP', 400));
    }

    if (user.otpExpire < Date.now()) {
        return next(new AppError('OTP has been expired', 400));
    }

    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: 'OTP verified successfully',
    });
});

// set refresh token
exports.setRefreshToken = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    // get refresh token
    const refreshToken = user.getRefreshToken();

    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        refreshToken,
    });
});
