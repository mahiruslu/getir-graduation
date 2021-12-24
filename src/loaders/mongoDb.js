const moongoose = require('mongoose');

const DB = moongoose.connection;

DB.once('open', () => console.log('Connected to MongoDB'));

const connectDB = async () => {
    
    await moongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports ={
    connectDB,
}