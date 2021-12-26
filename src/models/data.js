const Mongoose = require('mongoose');
const logger = require('../scripts/logger/Application');
const reportSchema = new Mongoose.Schema({
    key: String,
    value: String,
    counts: Array,
},{timestamps:true,versionKey:false});


// reportSchema.post("init",(doc)=>{
//     logger.log({
//         level: 'info',
//         message: `Get report ${doc.key}`,        
//     })
// });
  

module.exports= Mongoose.model('records',reportSchema);