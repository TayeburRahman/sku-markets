const mongoose = require('mongoose');

const skuProductSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now,
        },
        title: {
            type: String,
            required: [true, 'title is required'],
            maxLength: [150, 'Title cannot be more than 150 characters'],
        },
        title_ar: {
            type: String,
        },
        marketplace: {
            type: String,
            required: [true, 'marketplace is required'],
            default: 'amazon',
            enum: {
                values: ['amazon', 'noon', 'aliExpress'],
                message: 'marketplace is either: amazon, noon or aliExpress',
            },
        },
        brand: {
            type: String,
            required: [true, 'brand is required'],
        },
        brand_ar: {
            type: String,
        },
        image: {
            type: String,
            required: [true, 'image is required'],
        },
        category: {
            type: String,
            required: [true, 'category is required'],
        },
        category_ar: {
            type: String,
        },
        description: {
            type: String,
            required: [true, 'description is required'],
        },
        description_ar: {
            type: String,
        },
        sku_url: {
            type: String,
        },
        sku: {
            type: String,
        },
        sku_type: {
            type: String,
        },
        sku_type_ar: {
            type: String,
        },
        sku_sub_type: {
            type: String,
        },
        sku_sub_type_ar: {
            type: String,
        },
        stock: {
            type: Number,
            required: [true, 'stock is required'],
            default: 100,
        },
        stock_history: [
            {
                date: {
                    type: Date,
                    default: Date.now,
                },
                stock: {
                    type: Number,
                    required: [true, 'stock is required'],
                    default: 100,
                },
            },
        ],
        price: {
            type: Number,
            required: [true, 'price is required'],
        },
        e_marketplace_cap: {
            type: Number,
        },
        average_price: {
            type: Number,
        },
        price_history: [
            {
                price: {
                    type: Number,
                    required: [true, 'price is required'],
                },
                time: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        chg: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

// if price is changed, update the price history
skuProductSchema.pre('save', function (next) {
    if (this.isModified('price')) {
        this.price_history.push({
            price: this.price,
        });
    }
    next();
});

module.exports = mongoose.model('skuProduct', skuProductSchema);
