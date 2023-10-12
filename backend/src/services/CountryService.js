const axios = require('axios');
const {CountryDetailsDto} = require("../models/CountryDetailsDto");

const restCountriesApiUrl = process.env.REST_COUNTRIES_API_URL || 'https://restcountries.com/v3.1/name/';

async function getCountryDetails(name) {
    try {
        const response = await axios.get(`${restCountriesApiUrl}${name}`);
        if (response.data.length > 0) {
            return new CountryDetailsDto(response.data[0]);
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCountryDetails
};
