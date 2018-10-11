var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productc');

router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
module.exports = router;
