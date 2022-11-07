const mongoose  = require("mongoose");


require("dotenv").config()
const connection=mongoose.connect('mongodb+srv://zubair:zubair123@cluster0.naot6ur.mongodb.net/?retryWrites=true&w=majority')

module.exports={connection}