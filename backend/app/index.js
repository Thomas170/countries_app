const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./../config/swagger');
const cors = require('cors');
const corsOptions = require('./../config/cors');
const apiKeyMiddleware = require('./middlewares/apiKeyMiddleware');
const logger = require('./../config/logger');
const bodyParser = require('body-parser');

const CountryRoutes = require('./routes/CountryRoutes');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

if (process.env.PROD) {
    app.use(apiKeyMiddleware);
}

app.use('/api/countries', CountryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;