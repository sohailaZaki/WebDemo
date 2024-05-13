const express = require('express');
const router = express.Router();
const OrderController = require('../Controllers/userCheckCtrl');
const authMiddleware = require('../middelwares/AuthMiddelware');

// router.get('/:id/check', OrderController.getOrder);
router.post('/check', OrderController.addOrder);
router.get("/orders/check", OrderController.getOrder);
module.exports = router;