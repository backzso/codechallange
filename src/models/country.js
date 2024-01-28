const mongoose = require('mongoose');

const Country = mongoose.model('Country', {
    name: String,
    region: String
});

module.exports = Country;
