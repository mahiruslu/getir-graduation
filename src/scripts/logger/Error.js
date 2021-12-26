const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    defaultMeta: { service: 'report-service' },
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, '../../logs/error.log'),
            level: 'error',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5
        })
    ]
});

module.exports = logger;