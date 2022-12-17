const mongoose = require('mongoose');
const AlertHandler = require('../util/AlertHelper');
const Alert = require('./alert.model');
const priceModel = require('./price.model');
const Stock = require('./stock.model');

// create a produce model
const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'title is required'],
            maxLength: [150, 'Title cannot be more than 150 characters'],
        },
        marketplace: {
            type: [String],
        },
        sku: {
            type: String,
            required: [true, 'sku is required'],
        },
        tags: {
            type: [String],
        },
        total_stock: {
            type: Number,
            required: [true, 'total_stock is required'],
            default: 0,
            select: false,
        },
        estimated_SOH: {
            type: Number,
            default: 0,
        },
        est_market_cap: {
            type: Number,
        },
        trade_value: {
            type: Number,
        },
        est_net_revenue: {
            type: Number,
            default: 0,
        },
        days_on_hand: {
            type: Number,
            default: 0,
        },

        EQTI: {
            type: Number,
            default: 0,
        },
        sold_24_hours: {
            type: Number,
            default: 0,
        },
        current_price: {
            type: Number,
            required: [true, 'current_price is required'],
        },
        price_change: {
            type: Number,
            default: 0,
        },
        average_selling_price: {
            type: Number,
            default: 0,
        },
        volume_to_market_cap_ratio: {
            type: Number,
            default: 0,
        },
        estimated_margin: {
            type: Number,
            default: 0,
        },
        max_investment: {
            type: Number,
            default: 0,
        },
        min_investment: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
            required: [true, 'description is required'],
        },
        image: {
            type: String,
        },
        category: {
            type: String,
        },
        sub_category: {
            type: String,
        },
        marketplace: {
            name: {
                type: String,
            },
            url: {
                type: String,
            },
        },
        rating: {
            type: Number,
            default: 0,
        },
        rank: {
            type: Number,
            default: 0,
        },
        sellers: {
            type: Number,
            default: 1,
        },
        sky_type: {
            type: String,
        },
        demand_percentage: {
            type: Number,
            default: 0,
        },
        supply_percentage: {
            type: Number,
            default: 0,
        },
        watch_list: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

productSchema.pre('save', async function (next) {
    // if total stock is modified, update the estimated SOH
    if (this.isModified('total_stock')) {
        // estimate the SOH is 20% of the total stock
        this.estimated_SOH = this.total_stock * 0.2;
    }

    // if estimated SOH is modified, update the est_market_cap
    if (this.isModified('estimated_SOH') || this.isModified('current_price')) {
        // update the est_market_cap
        this.est_market_cap = (this.estimated_SOH * this.current_price).toFixed(
            2
        );

        // update the days on hand
        this.days_on_hand = (
            (this.est_net_revenue * this.estimated_SOH) /
            365
        ).toFixed(2);

        this.EQTI = (
            (this.min_investment / this.average_selling_price) *
            (30 - this.days_on_hand)
        ).toFixed(2);
    }

    // if current price is modified, update the trade value
    if (this.isModified('current_price')) {
        this.trade_value = (this.current_price * this.sold_24_hours).toFixed(2);

        // update the est_net_revenue
        this.est_net_revenue = (
            this.current_price -
            this.current_price * 0.25
        ).toFixed(2);

        // update max investment
        this.max_investment = (
            this.trade_value -
            this.current_price * 0.25 * this.sold_24_hours
        ).toFixed(2);

        // update min investment
        this.min_investment = this.max_investment / 4;

        // margin is 9% of the est_net_revenue
        this.estimated_margin = (
            (this.est_net_revenue * 0.09) /
            this.est_net_revenue
        ).toFixed(2);

        // update all Alert prices for this product
        AlertHandler({ _id: this._id, price: this.current_price });
    }

    // if trade value or estimate market cap are modified, update the volume to market cap ratio
    if (this.isModified('trade_value') || this.isModified('est_market_cap')) {
        this.volume_to_market_cap_ratio = (
            this.trade_value / this.est_market_cap
        ).toFixed(2);
    }

    // estimate stock on hand is changed, update the days on hand
    if (this.isModified('estimated_SOH')) {
        // update demand_percentage
        this.demand_percentage = (
            (this.sold_24_hours / this.estimated_SOH) *
            100
        ).toFixed(2);

        // update supply_percentage
        this.supply_percentage = 100 - this.demand_percentage;

        // update all Alert prices for this product
        AlertHandler({ _id: this._id, stock: this.estimated_SOH });
    }

    next();
});

// create a product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
