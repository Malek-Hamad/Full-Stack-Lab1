// this is where we define our schema 

const { date } = require("@hapi/joi/lib/template");
const mongoose = require("mongoose"); // this is to connect the database mongoDB 

const userSchema = mongoose.Schema({
    id  :{type : Number , required : true },
    name  :{type : String , required : true },
    lastName :{type:String , required :true },
    email:{type:String , required:true},
    date :{type:date, default : Date.now}
},{collection:"user"});


module.exports = mongoose.model("user" , userSchema); 