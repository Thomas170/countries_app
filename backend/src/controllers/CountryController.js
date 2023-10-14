const countryService = require('../services/CountryService');

const newCountry = {
    data: {
        name: 'France',
        currency: [
            {
                name: 'Euro',
                symbol: 'E'
            }
        ],
        capital: 'Paris',
        capitalLocation: {
          latitude: 4,
          longitude: 4
        },
        region: 'Europe',
        location: {
            latitude: 4,
            longitude: 4
        },
        languages: [
            'French'
        ],
        population: 67391582,
        demonym: 'French',
        area: 551695,
        map: 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7',
        flag: 'https://flagcdn.com/w320/ru.png',
        car: {
            "signs": [
                "RUS"
            ],
            "side": "right"
        },
        startOfWeek: 'Monday'
    }
}

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
