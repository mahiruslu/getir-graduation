const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'application-service' },
    transports: [
        new winston.transports.File({
            filename: path.join(__dirname, '../../logs/info.log'),
            level: 'info',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ]
});

module.exports = logger;