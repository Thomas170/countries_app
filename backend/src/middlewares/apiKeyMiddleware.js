require('dotenv').config();

function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    const expectedAPIKey = process.env.API_KEY;

    if (apiKey === expectedAPIKey) {
        next();
    } else {
        console.error('Invalid API key');
        res.status(403).json({ error: 'Invalid API key' });
    }
}

module.exports = apiKeyMiddleware;
