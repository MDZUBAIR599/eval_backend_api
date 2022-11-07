const mongoose= require("mongoose");
const userschema= new  mongoose.Schema({
    taskname :{type:String, required:true},
    status :{type:Boolean, required:true},
    tag  :{type:String, required:true},
})

const Todo_model= mongoose.model("tododata", userschema)

module.exports={Todo_model}