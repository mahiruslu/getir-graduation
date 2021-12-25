const data = require('../models/data');

const list = (startDate,endDate,minCount,maxCount) => {
    //return the data from the database with the given parameters. In this case we are using between dates and counts
    return data.find({createdAt: {$gte: startDate, $lte: endDate}, count: {$gte: minCount, $lte: maxCount}});
}

module.exports  = {
    list
}