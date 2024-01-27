import express from 'express';
import { getCountriesService } from '../services/apiService';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const region = req.query.region;
        const countries = await getCountriesService(region);
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
