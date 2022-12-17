const catchAsyncErrors = require('../lib/catchAsyncErrors');
const SkuProduct = require('../models/skuProduct.model');

// create a new skuProduct
exports.createSkuProduct = catchAsyncErrors(async (req, res, next) => {
    const skuProduct = await SkuProduct.create(req.body);

    res.status(201).json({
        success: true,
        skuProduct,
    });
});

// get all skuProducts
exports.getSkuProducts = catchAsyncErrors(async (req, res, next) => {
    const skuProducts = await SkuProduct.find();

    res.status(200).json({
        success: true,
        skuProducts,
    });
});

// get a single skuProduct
exports.getSkuProduct = catchAsyncErrors(async (req, res, next) => {
    const skuProduct = await SkuProduct.findById(req.params.id);

    if (!skuProduct) {
        return next(new ErrorHandler('SKU Product not found', 404));
    }

    res.status(200).json({
        success: true,
        skuProduct,
    });
});

// update a skuProduct
exports.updateSkuProduct = catchAsyncErrors(async (req, res, next) => {
    let skuProduct = await SkuProduct.findById(req.params.id);

    if (!skuProduct) {
        return next(new ErrorHandler('SKU Product not found', 404));
    }

    skuProduct.stock = req.body.stock;
    skuProduct.price = req.body.price;

    await skuProduct.save();

    res.status(200).json({
        success: true,
        skuProduct,
    });
});

// delete a skuProduct
exports.deleteSkuProduct = catchAsyncErrors(async (req, res, next) => {
    const skuProduct = await SkuProduct.findById(req.params.id);

    if (!skuProduct) {
        return next(new ErrorHandler('SKU Product not found', 404));
    }

    await skuProduct.remove();

    res.status(200).json({
        success: true,
        message: 'SKU Product is deleted',
    });
});
