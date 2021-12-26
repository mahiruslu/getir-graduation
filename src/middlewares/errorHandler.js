const logger = require('../scripts/logger/Error');
module.exports = (error, req, res, next) => {
    logger.log({
        level: 'error',
        message: error.message,        
    })


    res.status(error.status || 500);
    res.json(
        error.message || {
            "code": "5",
            "msg": "Internal Server Error.."
        }
    );
  };
  