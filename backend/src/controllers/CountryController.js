const countryService = require('../services/CountryService');

function getCountryDetails(req, res) {
    const country = countryService.getCountryDetails();
    res.json(country);
}

module.exports = {
    getCountryDetails
};
