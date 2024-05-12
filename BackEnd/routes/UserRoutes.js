const express = require('express');
const { signUp, logIn, alluser } = require('../Controllers/UserCtrl'); // Corrected import
const router = express.Router();

router.post("/login", logIn);
router.post("/signup", signUp);
router.get("/allusers", alluser);

module.exports = router;
