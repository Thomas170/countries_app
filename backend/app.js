const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const cors = require('cors');
const corsOptions = require('./config/cors');
const loggerMiddleware = require('./src/middlewares/loggerMiddleware');
const apiKeyMiddleware = require('./src/middlewares/apiKeyMiddleware');

const CountryRoutes = require('./src/routes/CountryRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors(corsOptions));

app.use(loggerMiddleware);
if (process.env.PROD) {
    app.use(apiKeyMiddleware);
}

app.use('/api/countries', CountryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
