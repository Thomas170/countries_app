import axios from 'axios';

const backendApiUrl = process.env.BACKEND_API_URL || 'http://localhost:8000/api/countries/';

export async function getCountryDetails(name) {
    try {
        const response = await axios.get(`${backendApiUrl}${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
