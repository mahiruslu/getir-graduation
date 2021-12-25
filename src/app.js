const config = require('./config');
const express = require('express');
const loader = require('./loaders');
const {ReportRouter} = require('./router');
const errorHandler = require('./middlewares/errorHandler');
const ApiError = require('./errors/ApiError');

const app = express();
const port = process.env.AP_PORT || 5000;

config();
loader();

app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    app.use('/api/report', ReportRouter);

    app.use((err, req, res, next) => {        
        next(err);
    });
    app.use(errorHandler);
});
