// get user's notification

const catchAsyncErrors = require('../lib/catchAsyncErrors');
const Notification = require('../models/notification.model');

exports.getNotifications = catchAsyncErrors(async (req, res, next) => {
    const notifications = await Notification.find({
        user: req.user._id,
        read: false,
    }).sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        notifications,
    });
});

// mark notification as read

exports.markAsRead = catchAsyncErrors(async (req, res, next) => {
    const notification = await Notification.findById(req.params.id);

    if (notification) {
        notification.read = true;
        await notification.save();
    }

    res.status(200).json({
        success: true,
    });
});
