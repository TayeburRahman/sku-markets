// create or update an alert

const catchAsyncErrors = require('../lib/catchAsyncErrors');
const Alert = require('../models/alert.model');
const { deleteOne } = require('../util/factory');

exports.Alert = catchAsyncErrors(async (req, res, next) => {
    // find alert by user  if alert exists, update alert else create alert
    let alert = await Alert.findOne({
        user: req.user._id,
        product: req.body.product,
    });
    if (!alert) {
        // create alert
        alert = await Alert.create({
            user: req.user._id,
            product: req.body.product,
            price_move_below: req.body.price_move_below,
            price_move_above: req.body.price_move_above,
            stock_move_below: req.body.stock_move_below,
            stock_move_above: req.body.stock_move_above,
            store_move_below: req.body.store_move_below,
            store_move_above: req.body.store_move_above,
        });
    } else {
        // update alert
        alert.active = req.body.active;
        alert.price_move_below = req.body.price_move_below;
        alert.price_move_above = req.body.price_move_above;
        alert.stock_move_below = req.body.stock_move_below;
        alert.stock_move_above = req.body.stock_move_above;
        alert.store_move_below = req.body.store_move_below;
        alert.store_move_above = req.body.store_move_above;

        await alert.save();
    }

    res.status(200).json({
        success: true,
        alert,
    });
});

// delete an alert

exports.deleteAlert = deleteOne(Alert);
