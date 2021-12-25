const hs = require('http-status');
const ApiError = require('../errors/ApiError');

const validate = (schema,source) => (req, res, next) => {
    const result = schema.validate(req[source]);
    //control if the body is valid in the schema if not throw an error with ApiError class
    if (result.error) return next(new ApiError(result.error.details[0].message),hs.BAD_REQUEST);
    next();
}

module.exports = validate;