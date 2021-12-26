const hs = require('http-status');
const ApiError = require('../errors/ApiError');
const logger = require('../scripts/logger/Error');

const validate = (schema,source) => (req, res, next) => {
    const result = schema.validate(req[source]);
    //control if the body is valid in the schema if not throw an error with ApiError class
    if (result.error) {
        logger.log({
            level: 'error',
            message: result.error.details[0].message,
        })
        next(new ApiError(result.error.details[0].message),hs.BAD_REQUEST);
        return;
    }
    next();
}

module.exports = validate;