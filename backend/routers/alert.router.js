const router = require('express').Router();
const protect = require('../middleware/protect');

router
    .route('/')
    .post(protect, require('../controllers/alert.controller').Alert);

router
    .route('/:id')
    .delete(protect, require('../controllers/alert.controller').deleteAlert);

module.exports = router;
