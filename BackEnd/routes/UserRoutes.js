const express = require('express');
const { signUp,logIn } = require('../Controllers/UserCrtl');
const router = express.Router();
router.post("/login",logIn);
router.post("/signup",signUp);
module.exports = router;
