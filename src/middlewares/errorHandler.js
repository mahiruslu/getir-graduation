module.exports = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json(
        error.message || {
            "code": "5",
            "msg": "Internal Server Error.."
        }
    );
  };
  