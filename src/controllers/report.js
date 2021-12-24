const hs = require('http-status');
const {list} = require('../services/report');


const getReport = (req, res) => {
     list(req.body.dateStart, req.body.dateEnd, req.body.minCount, req.body.maxCount)
     .then(data => {
            res.status(hs.OK).json(data);
        })
        .catch(err => {
            res.status(hs.BAD_REQUEST).json(err);
        }
    );
}

module.exports = {
    getReport
}