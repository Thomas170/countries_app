import axios from 'axios';

const backendApiUrl = process.env.BACKEND_API_URL || 'localhost:8000';

export async function getCountryDetails(name) {
    try {
        const response = await axios.get(`${backendApiUrl}/api/countries/${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
