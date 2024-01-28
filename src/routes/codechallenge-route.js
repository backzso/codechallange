const express = require('express');
const router = express.Router();
const { getCountries } = require('../services/countryService');
const { analyzeSalesRep } = require('../services/salesRepService');
const { distributeOptimally } = require('../services/optimalService');

router.get('/countries', async (req, res) => {
    try {
        const region = req.query.region;
        const countries = await getCountries(region);
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/salesrep', async (req, res) => {
    try {
        const result = await analyzeSalesRep();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/optimal', async (req, res) => {
    try {
        const result = await distributeOptimally();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
