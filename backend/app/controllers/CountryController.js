const countryService = require('../services/CountryService');
const logger = require('./../../config/logger');

async function getCountryDetails(req, res) {
    try {
        const name = req.params.name;
        logger.info(`Country with name ${name} requested.`, { filename: __filename });

        if (typeof name !== 'string' || name.trim() === '') {
            const error = new Error('Invalid parameter: "name" must be a non-empty string');
            error.response = { status: 400 };
            throw error;
        }

        logger.info(`Try to get country details...`, { filename: __filename });
        const country = await countryService.getCountryDetails(name);

        logger.info(`Country with name ${name} correctly get.`, { filename: __filename, succeed: true });
        res.json(country);
    } catch (error) {
        logger.error(error.message, { filename: __filename });
        res.status(error.response.status).json({ error: error.message });
    }
}

module.exports = {
    getCountryDetails
};
