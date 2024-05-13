const express = require('express');
const router = express.Router();
const authController = require('../Controllers/UserCrtl');
const authMiddelware = require('../middelwares/AuthMiddelware');

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.put('/:id',authMiddelware , authController.updateUser);

router.get("/allusers",authController.alluser);


router.get('/:id', authMiddelware,authController.getaUser);

module.exports = router;
