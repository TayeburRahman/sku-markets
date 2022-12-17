const router = require('express').Router();

router.use('/auth', require('./auth.router'));
router.use('/skuProduct', require('./skuProduct.router'));
router.use('/product', require('./product.router'));
router.use('/sell', require('./sell.router'));
router.use('/alert', require('./alert.router'));

module.exports = router;
