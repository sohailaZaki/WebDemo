const express = require('express');
const router = express.Router();
const productController = require('../Controllers/ProdcutCrtl');
const authMiddleware = require('../middelwares/AuthMiddelware');

router.get('/allproduct', productController.getAllProducts);
router.get('/product/:id', productController.getaProduct);
router.post('/addproduct', productController.addProduct);
router.post('/removeproducts', productController.removeProduct);
router.post('/removeproducts', productController.removeProduct);
// Update the router to listen for PUT requests on '/product/rating'
router.put('/product/rating',authMiddleware, productController.rating);
router.get('/product/:id/ratings', productController.getProductRatings); 
router.get('/product/:id/comments', productController.getCommentsByProductId);
router.put('/:id/edit', productController.updateProduct);
module.exports = router;
    