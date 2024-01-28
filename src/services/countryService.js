const Country = require('../models/country');

const getCountries = async (region) => {
    let query = {};
    if (region) {
        query.region = region;
    }

    const countries = await Country.find(query);
    return countries;
};

module.exports = { getCountries };
