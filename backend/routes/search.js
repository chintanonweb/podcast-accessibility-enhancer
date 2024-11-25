const express = require('express');
const searchRouter = express.Router();
const { search } = require('../services/searchService');

searchRouter.get('/', async (req, res) => {
    const { query } = req.query;
    const results = await search(query);
    res.status(200).json(results);
});

module.exports = searchRouter;