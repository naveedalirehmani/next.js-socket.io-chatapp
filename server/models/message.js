const mongoose = require('mongoose');

// interface messageITypes{
//     message:string;
//     picture:string;
//     userName:string;
//     date:Date;  
// }

const message = new mongoose.Schema({
    message:{type:String,require:true},
    picture:{type:String,require:false,},
    userName:{type:String,required:true},
    date:{type:Date,default:new Date()}
})

module.exports = mongoose.model("message", message);