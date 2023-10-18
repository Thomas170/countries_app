const axios = require('axios');
const {CountryDetailsDto} = require("../models/CountryDetailsDto");
const logger = require('./../../config/logger');

const restCountriesApiUrl = process.env.REST_COUNTRIES_API_URL || 'https://restcountries.com/v3.1/name/';

async function getCountryDetails(name) {
    try {
        logger.info(`REST Countries API called...`, { filename: __filename });
        const response = await axios.get(`${restCountriesApiUrl}${name}`);

        if (response.data.length > 0) {
            logger.info(`Get response from REST Countries API.`, { filename: __filename, succeed: true });
            return new CountryDetailsDto(response.data[0]);
        } else {
            logger.warn(`Response from REST Countries API doesn\'t contain any country in it.`, { filename: __filename });
            return null;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCountryDetails
};
