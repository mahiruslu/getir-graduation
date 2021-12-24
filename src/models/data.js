const Mongoose = require('mongoose');

const reportSchema = new Mongoose.Schema({
    key: String,
    value: String,
    counts: Array,
},{timestamps:true,versionKey:false});

module.exports= Mongoose.model('records',reportSchema);