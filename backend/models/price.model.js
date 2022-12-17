const mongoose = require('mongoose');
const AppError = require('../util/appError');
const Product = require('./product.model');

// create a produce price model
const priceSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'product is required'],
        },
        price: {
            type: Number,
            required: [true, 'price is required'],
        },
        date: {
            type: Date,
            default: Date.now,
        },
        average_price: {
            type: Number,
        },
        price_change: {
            type: Number,
        },
        price_history: [
            {
                price: {
                    type: Number,
                    required: [true, 'price is required'],
                },
                date: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// if price is changed update product price,  price history and average price
priceSchema.pre('save', async function (next) {
    // if price is changed, update product price
    if (this.isModified('price')) {
        const product = await Product.findById(this.product);

        // if product is not found
        if (!product) {
            return next(
                new AppError(
                    `Product with id ${this.product} is not found`,
                    404
                )
            );
        }

        // price change in percentage
        product.price_change = (
            ((this.price - product.current_price) / product.current_price) *
            100
        ).toFixed(2);

        this.price_history.push({ price: this.price, date: this.date });

        // update product price
        product.current_price = this.price;
        product.save();
    }

    next();
});

module.exports = mongoose.model('Price', priceSchema);
