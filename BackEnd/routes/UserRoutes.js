const express = require('express');
const { signUp,logIn, updateUser, alluser } = require('../Controllers/UserCrtl');
const router = express.Router();
router.post("/login",logIn);
router.post("/signup",signUp);
router.put('/:id',updateUser);
router.get("/allusers", alluser);

module.exports = router;
