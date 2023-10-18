const app = require('./app');
const logger = require('./config/logger');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`, { filename: __filename });
});
