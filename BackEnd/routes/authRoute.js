const express = require('express');
const router = express.Router();
const authController = require('../Controllers/UserCrtl');
const authMiddleware = require('../middelwares/AuthMiddelware');

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.put('/:id',authMiddleware , authController.updateUser);

module.exports = router;
