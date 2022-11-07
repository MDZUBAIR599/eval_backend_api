

// const {Router}= require("express")
// const bcrypt = require("bcrypt")
// const { Auth_model } = require("../Models/AuthModel")
// const AuthenticationRouter=Router()
// const jwt = require("jsonwebtoken")

// AuthenticationRouter.post("/signup",async (req,res)=>{
    
//    const { username, email, password } = req.body;

//   const isuser = await Auth_model.findOne({ email: email });
//   if (isuser) {
//     res.send({"msg":"try login"});
//   }
//   else{
//     bcrypt.hash(password, 5, async function (err, hashedpas) {
//       if (err) {
      //   res.send({"msg":"something went wrong"});
// // address: "93.184.216.34" family: IPv4
//             else{
//                const newuser = new Auth_model({
//                   name,
//                   email,
//                   password:hashedpswrd,
      
//                })
      
//                   await newuser.save();
//                   res.send({"message":"signup sucessfully please login"})  
              
//             }
//        })
//    //  }
    

// })


// AuthenticationRouter.post("/login", async (req,res)=>{
//     const {email,password}= req.body;
//     const user= await Auth_model.findOne({email:email})
//     const hasedpassword= user.password
//     const user_id= user._id

//     bcrypt.compare(password,hasedpassword,function(err, result){
//       if(err){
//          res.send({"msg": "something wrong"})
//       }
//       if(result){
//          const token= jwt.sign({email:user.email,user_id}, process.env.SECRETKEY)
//             res.send({"msg":" something went wrong" })
         
//       }
//       else{
//          res.send({"msg": "please check credentials"})
//       }
//     })
   
// })


// module.exports={AuthenticationRouter}