const data = require('../models/data');

const list = (startDate,endDate,minCount,maxCount) => {
    return data.find({createdAt: {$gte: startDate, $lte: endDate}, count: {$gte: minCount, $lte: maxCount}});
}

module.exports  = {
    list
}