const mongoose = require ("mongoose");
const objectId = require('mongoose').ObjectId;
const Taskschema  = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    email : {
        type:String,
        required:true
    },

},{timeStamps:true})

const Tasks = mongoose.model("database",Taskschema);
module.exports = Tasks


