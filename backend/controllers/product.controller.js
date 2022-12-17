const catchAsyncErrors = require('../lib/catchAsyncErrors');
const Product = require('../models/product.model');
const AppError = require('../util/appError');
const { getAll } = require('../util/factory');

// create new product
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        status: 'success',
        product,
    });
});

// get all products
exports.getProducts = getAll(Product);

// get a single product
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new AppError('Product not found', 404));
    }

    res.status(200).json({
        status: 'success',
        product,
    });
});

// update a product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new AppError('Product not found', 404));
    }

    product.current_price = req.body.current_price;
    product.stock = req.body.stock;
    product.tags = req.body.tags;
    product.marketplace = req.body.marketplace;

    await product.save();

    res.status(200).json({
        status: 'success',
        product,
    });
});

// delete a product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    await Product.findByIdAndDelete(req.params.id);

    res.status(202).json({
        status: 'success',
        data: null,
    });
});

// sell  products
exports.sellProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new AppError('Product not found', 404));
    }

    product.stock = product.stock - req.body.quantity;

    await product.save();

    res.status(200).json({
        status: 'success',
        product,
    });
});
