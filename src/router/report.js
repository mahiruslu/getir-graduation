const router = require('express').Router();
const {getReport} = require('../controllers/report');

const validate = require('../middlewares/validate');
const {reportBody} = require('../validations/report');

//firstly we need to validate the body of the request, if everything is ok we can call the getReport function
router.route('/').post(validate(reportBody,"body"),getReport);


module.exports = router;