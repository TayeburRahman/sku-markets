const router = require('express').Router();

const { updatePrice, getPrice } = require('../controllers/price.controller');
const {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');
const protect = require('../middleware/protect');

router.route('/').get(getProducts).post(protect, createProduct);
router
    .route('/:id')
    .get(getProduct)
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

router.route('/updatePrice/:id').put(protect, updatePrice).get(getPrice);

// export router
module.exports = router;
