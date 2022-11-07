const {Router} = require("express")
const { Authentication } = require("../Midlewares/AUthentication")
const { Todo_model } = require("../Models/Todo.model.")


const Todorouter=Router()

Todorouter.get("/", Authentication, async (req,res)=>{
  const all =await Todo_model.find({})
  res.send({all})
})
Todorouter.get("/:TodoId", Authentication, async (req,res)=>{
  await Todo_model.find({})
})


Todorouter.post("/create", Authentication, async (req,res)=>{
    const {taskname,
        status,
        tag}= req.body
   try{
    await Todo_model({
        taskname,
        status,
        tag
      })
   }
   catch(err){
    res.status(401).send({error:err})
   }
})
Todorouter.post("/update/:TodoId", Authentication, async (req,res)=>{
    const id = req.params.TodoId
    const {taskname,status,tag}= req.body
   try{
    const find= await Todo_model.findOne({_id:id})
    const updatetodo = await FlipkartModel.findByIdAndUpdate(find,req.body);
    res.send({ message: 'find todo was updated' ,body});
 }
 catch(err){
    res.status(400).send({ error: err  });
 }
})


Todorouter.delete("/:TodoId", Authentication, async (req,res)=>{

    try{
        const id = req.params.TodoId
    const findid= await Todo_model.findOne({_id:id})
    const todoremove = await Todo_model.findByIdAndRemove(findid);
     res.send({ message: 'The todo deleted ', todoremove });
    }
    catch(err) {
        res.status(400).send({ error: err });
      }
  } 
 
)


module.exports={Todorouter}