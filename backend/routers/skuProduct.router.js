const router = require('express').Router();
const {
    createSkuProduct,
    getSkuProducts,
    getSkuProduct,
    deleteSkuProduct,
    updateSkuProduct,
} = require('../controllers/skuProduct.controller');
const protect = require('../middleware/protect');

router.route('/').post(protect, createSkuProduct).get(getSkuProducts);
router
    .route('/:id')
    .get(getSkuProduct)
    .delete(protect, deleteSkuProduct)
    .put(protect, updateSkuProduct);

module.exports = router;
