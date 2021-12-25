const hs = require('http-status');

const validate = (schema,source) => (req, res, next) => {
    const result = schema.validate(req[source]);
    if (result.error) return res.status(hs.BAD_REQUEST).json(result.error);
    next();
}

module.exports = validate;