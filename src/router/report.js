const router = require('express').Router();
const {getReport} = require('../controllers/report');


router.route('/').post(getReport);


module.exports = router;