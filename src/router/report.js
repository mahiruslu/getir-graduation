const router = require('express').Router();
const {getReport} = require('../controllers/report');

const validate = require('../middlewares/validate');
const {reportBody} = require('../validations/report');

router.route('/').post(validate(reportBody,"body"),getReport);


module.exports = router;