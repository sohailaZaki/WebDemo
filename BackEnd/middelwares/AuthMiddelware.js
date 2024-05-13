const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                // Fetch the user from the database using the decoded user ID
                const user = await User.findById(decoded.id);
                if (!user) {
                    throw new Error("User not found");
                }
                // Attach the authenticated user object to the request
                req.user = user;
                next(); // Call the next middleware in the chain
            }
        } catch (error) {
            throw new Error(error);
        }
    } else {
        throw new Error("There is no token attached to the header.");
    }
});

module.exports = authMiddleware;