const mongoose = require("mongoose");

const message = new mongoose.Schema({
    message:{type:String,require:true},
    userName:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model("message", message);