const CountryService = require('../src/services/CountryService');
const CountryController = require('../src/controllers/CountryController');
const countrySample = require('./samples/countrySample.json');

describe('CountryService', () => {
    it('should return country details when the API call is successful', async () => {
        const country = await CountryService.getCountryDetails('canada');

        expect(country).toEqual(countrySample);
    });

    it('should return an error when the country doesn\'t exist (status 404)', async () => {
        await expect(CountryService.getCountryDetails('test')).rejects.toMatchObject({
            response: {
                status: 404
            }
        });
    });

    it('should return a 400 response for an empty name', async () => {
        const reqEmpty = {
            params: {
                name: ''
            }
        };

        const jsonEmpty = jest.fn();
        const statusEmpty = jest.fn().mockReturnValue({ json: jsonEmpty });
        const resEmpty = {
            json: jsonEmpty,
            status: statusEmpty,
        };

        await CountryController.getCountryDetails(reqEmpty, resEmpty);

        expect(resEmpty.status).toHaveBeenCalledWith(400);
        expect(resEmpty.json).toHaveBeenCalledWith({ error: 'Invalid parameter: "name" must be a non-empty string' });
    });

    it('should return a 400 response for a non-valid name', async () => {
        const reqNonValid = {
            params: {
                name: 1234
            }
        };

        const jsonNonValid = jest.fn();
        const statusNonValid = jest.fn().mockReturnValue({ json: jsonNonValid });
        const resNonValid = {
            json: jsonNonValid,
            status: statusNonValid,
        };

        await CountryController.getCountryDetails(reqNonValid, resNonValid);

        expect(resNonValid.status).toHaveBeenCalledWith(400);
        expect(resNonValid.json).toHaveBeenCalledWith({ error: 'Invalid parameter: "name" must be a non-empty string' });
    });
});
