const express = require('express');
const processRouter = express.Router();
const { transcribe } = require('../services/transcriptionService');

processRouter.post('/', async (req, res) => {
    const { fileUrl } = req.body;
    const transcription = await transcribe(fileUrl);
    res.status(200).json(transcription);
});

module.exports = processRouter;