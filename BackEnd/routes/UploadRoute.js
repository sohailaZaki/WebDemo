const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure the destination directory exists
        cb(null, path.resolve(__dirname, '../upload/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Initialize multer upload
const upload = multer({ storage: storage });

// Handle upload POST request
const uploadImage = (req, res) => {
    console.log("Received upload request");
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    });
};

// Handle upload POST request
router.post('/', upload.single('product'), uploadImage);

module.exports = router;
