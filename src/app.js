const config = require('./config');
const express = require('express');
const loader = require('./loaders');
const {ReportRouter} = require('./router');
const errorHandler = require('./middlewares/errorHandler');
const ApiError = require('./errors/ApiError');
const cors = require('cors');
const logger = require('./scripts/logger/Application');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');


const app = express();
const port = process.env.AP_PORT || 5000;

config();
loader();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: '*',
}))

//logs all requests with morgan to the log file.
const accessLogStream = fs.createWriteStream(path.join(__dirname,'./logs', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.listen(port, () => {
    logger.log({
        level: 'info',
        message: `Listening on port ${port}`
    })
    app.use('/api/report', ReportRouter);

    //this runs if the EP is not found
    app.use((req, res, next) => {     
        next(new ApiError(`${req.method} ${req.path} endpoint not avaiable`, 404));
    });
    //if there is any error triggers the error handler middleware
    app.use(errorHandler);
});

module.exports = app;