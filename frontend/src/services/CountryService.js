import axios from 'axios';

const backendApiUrl = process.env.BACKEND_API_URL || 'https://countries-app-backend-eight.vercel.app';

export async function getCountryDetails(name) {
    try {
        const response = await axios.get(`${backendApiUrl}/api/countries/${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
