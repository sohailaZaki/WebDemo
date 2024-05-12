const express = require('express');
const router = express.Router();
const authController = require('../Controllers/UserCrtl');

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.get("/allusers",authController.alluser);

module.exports = router;
