const mongoose= require("mongoose");
const Userschema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true},
    password:{type: String, required:true},
 
 })
 const Authmodel = mongoose.model("todo_user", Userschema )

module.exports={Authmodel}