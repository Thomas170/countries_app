const axios = require('axios');
const {CountryDetailsDto} = require("../models/CountryDetailsDto");

async function getCountryDetails(name) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
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
