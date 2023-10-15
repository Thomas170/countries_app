const countryService = require('../services/CountryService');

async function getCountryDetails(req, res) {
    try {
        const name = req.params.name;

        if (typeof name !== 'string' || name.trim() === '') {
            const error = new Error('Invalid parameter: "name" must be a non-empty string');
            error.response = { status: 400 };
            throw error;
        }

        const country = await countryService.getCountryDetails(name);
        res.json(country);
    } catch (error) {
        console.error(error.message);
        console.log(res, res.status, res.json);
        res.status(error.response.status).json({ error: error.message });
    }
}

module.exports = {
    getCountryDetails
};
