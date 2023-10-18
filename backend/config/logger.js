const winston = require('winston');
const path = require('path');

const logConfiguration = {
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(info => {
            const filename = info.filename ? `(${path.basename(info.filename)})` : '';
            const succeed = info.succeed || false;

            const colors = {
                info: '\x1b[36m', // Cyan
                warn: '\x1b[33m', // Yellow
                error: '\x1b[31m', // Red
                succeed: '\x1b[32m', // Green
                timestamp: '\x1b[35m', // Magenta
                filename: '\x1b[37m', // Gray
                resetColor: '\x1b[0m' // White
            };

            const levelColor = info.level === 'info' ? (
                succeed ? colors.succeed : colors.info
            ) : colors[info.level];

            const levelWording = info.level === 'info' ? (
                succeed ? 'SUCCEED' : 'INFO'
            ) : info.level.toUpperCase();

            return `${colors.timestamp}${info.timestamp}${colors.resetColor}` +
                ` - ${colors.filename}${filename}` +
                ` ${levelColor}[${levelWording}]${(info.level === 'info' && !succeed) ? colors.resetColor : ''}:` +
                ` ${info.message}${colors.resetColor}`;
        })
    )
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
