const { getCountries } = require('./countryService');

const analyzeSalesRep = async () => {
    try {
        const countries = await getCountries();
        const regions = [...new Set(countries.map((country) => country.region))];

        const salesRepRequirements = regions.map((region) => {
            const regionCountries = countries.filter((country) => country.region === region);
            const countryCount = regionCountries.length;

            const minSalesReq = Math.ceil(countryCount / 7);
            const maxSalesReq = Math.ceil(countryCount / 3);

            return {
                region,
                minSalesReq,
                maxSalesReq,
            };
        });
        return salesRepRequirements;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

module.exports = { analyzeSalesRep };
