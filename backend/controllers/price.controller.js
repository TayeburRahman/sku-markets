const mongoose = require('mongoose');
const catchAsyncErrors = require('../lib/catchAsyncErrors');
const priceModel = require('../models/price.model');

// create new price for a product
exports.updatePrice = catchAsyncErrors(async (req, res, next) => {
    //find price by product id
    const price = await priceModel.findOne({ product: req.params.id });

    if (price) {
        //if price exists, update it
        price.price = req.body.price;
        price.date = req.body.date ? new Date(req.body.date) : new Date();
        price.save();
        return res.status(200).json({
            success: true,
            message: 'Price updated successfully',
            price,
        });
    }

    //if price does not exist, create new price
    const newPrice = await priceModel.create({
        product: req.params.id,
        price: req.body.price,
    });

    res.status(201).json({
        status: 'success',
        price: newPrice,
    });
});

exports.getPrice = catchAsyncErrors(async (req, res, next) => {
    const price = await priceModel
        .aggregate([
            {
                $match: {
                    product: mongoose.Types.ObjectId(req.params.id),
                },
            },
            {
                $project: {
                    price: 1,
                    date: 1,
                    price_history: {
                        $filter: {
                            input: '$price_history',
                            as: 'price_history',
                            cond: {
                                $gte: [
                                    '$$price_history.date',
                                    new Date(Date.now() - 24 * 60 * 60 * 1000),
                                ],
                            },
                        },
                    },
                },
            },
        ])
        .exec();

    const priceHistory = price[0].price_history.map((item) => {
        return [item.date.getTime(), item.price];
    });

    res.status(200).json({
        status: 'success',
        priceHistory,
    });
});
