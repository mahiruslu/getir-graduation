const hs = require('http-status');
const {list} = require('../services/report');


const getReport = (req, res) => {
     list(req.body.startDate, req.body.endDate, req.body.minCount, req.body.maxCount)
     .then(data => {
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
        .catch(err => {
            res.status(hs.BAD_REQUEST).json(err);
        }
    );
}

module.exports = {
    getReport
}