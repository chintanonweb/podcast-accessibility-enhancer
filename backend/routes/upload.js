const express = require('express');
const multer = require('multer');
const uploadRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

uploadRouter.post('/', upload.single('file'), (req, res) => {
    // Handle file upload
    res.status(200).json({ message: 'File uploaded successfully' });
});

module.exports = uploadRouter;