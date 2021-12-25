const joi = require('joi');

const reportBody = joi.object({
    startDate: joi.date().required(),
    endDate: joi.date().required(),
    minCount: joi.number().required(),
    maxCount: joi.number().required()
});

module.exports = {
    reportBody
};