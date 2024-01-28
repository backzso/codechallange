const axios = require('axios');
const { getCountries } = require('./countryService');
const { analyzeSalesRep } = require('./salesRepService');

const distributeOptimally = async () => {
    try {
        const salesRepRequirements = await analyzeSalesRep();
        const countries = await getCountries();

        const optimalSalesReps = salesRepRequirements.map((req) => {
            const regionCountries = countries.filter((country) => country.region === req.region);
            const shuffledCountries = regionCountries.sort(() => Math.random() - 0.5);

            const countryList = shuffledCountries.slice(0, req.maxSalesReq).map((country) => country.name);

            return {
                region: req.region,
                countryList,
                countryCount: countryList.length,
            };
        });

        return optimalSalesReps;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

module.exports = { distributeOptimally };
