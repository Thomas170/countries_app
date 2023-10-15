const convertToReadableDate = require('./../utils/convertToReadableDate');

function loggerMiddleware(req, res, next) {
    const date = Date.now();

    console.log('['+ convertToReadableDate(date) + ']:', 'API called');

    next();
}

module.exports = loggerMiddleware;