const hs = require('http-status');
const {list} = require('../services/report');
const ApiError = require("../errors/ApiError");


const getReport = (req, res, next) => {
     list(req.body.startDate, req.body.endDate, req.body.minCount, req.body.maxCount)
     .then(data => {
         if(data.length == 0) return next(new ApiError('No data found', hs.NOT_FOUND));
         
         res.status(hs.OK).json(
                {
                    "code": "0",
                    "msg": "Success",
                    "records":(
                        data.map(item => {
                            return {  
                                    "key": item.key,
                                    "value": item.value,
                                    "count": item.counts.reduce((a, b) => a + b, 0)
                                }
                        })
                    )
                    
                }
            );
        })
        .catch(err => next(new ApiError(err?.message, hs.INTERNAL_SERVER_ERROR)));
}

module.exports = {
    getReport
}