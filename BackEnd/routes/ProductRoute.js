const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProdcutCrtl');

router.get('/allproduct', productController.getAllProducts);
router.post('/addproduct', productController.addProduct);
router.post('/removeproducts', productController.removeProduct);
module.exports = router;
