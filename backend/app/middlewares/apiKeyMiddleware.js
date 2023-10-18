require('dotenv').config();
const logger = require('./../../config/logger');

function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    const expectedAPIKey = process.env.API_KEY;

    if (apiKey === expectedAPIKey) {
        logger.info('Correct API key', { filename: __filename });
        next();
    } else {
        logger.error('Invalid API key', { filename: __filename });
        res.status(403).json({ error: 'Invalid API key' });
    }
}

module.exports = apiKeyMiddleware;
