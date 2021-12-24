const {connectDB} = require('./mongoDb');

module.exports = () => {
    connectDB();
}