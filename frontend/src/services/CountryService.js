import axios from 'axios';

const backendApiUrl = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000';
const apiKey = process.env.REACT_APP_API_KEY || '';

export async function getCountryDetails(name) {
    try {
        const headers = {
            'x-api-key': apiKey,
        };

        const response = await axios.get(`${backendApiUrl}/api/countries/${name}`, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}
