const countryService = require('../services/CountryService');

async function getCountryDetails(req, res) {
    try {
        const name = req.params.name;
        const country = await countryService.getCountryDetails(name);
        res.json(country);
    } catch (error) {
        console.error(error.message);
        res.status(error.response.status).json({ error: error.message });
    }
}

module.exports = {
    getCountryDetails
};
