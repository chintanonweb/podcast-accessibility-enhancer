const express = require('express');
const insightsRouter = express.Router();
const { analyze } = require('../services/analysisService');

insightsRouter.get('/summary', async (req, res) => {
    const { transcript } = req.query;
    const summary = await analyze(transcript);
    res.status(200).json(summary);
});

// Add other insights endpoints as needed

module.exports = insightsRouter;