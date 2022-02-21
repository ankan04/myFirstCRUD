const express= require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
//const ObjectId=  mongoose.mongo.ObjectId()

 async function main() {
   await mongoose.connect('mongodb://localhost:27017/myFirstProject');
}
const app=express()
const port = 3000
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//const dbName = 'myFirstProject';
const userSchema = new mongoose.Schema({
	name:String,
	email:String,
	mobile:Number
});
const User = mongoose.model("User", userSchema);
//module.exports = user;


  app.post("/users", async(req, res)=>{

       const {name, email, mobile}= req.body
       const response= await User.create({
           name,
           email,
           mobile
       })
       res.status(201).json(response)

       // return 'done.'
      })
      
       app.get("/users", async(req, res)=>{
       const response= await User.find({})
      res.status(201).json(response)
       })

app.put("/users/:id", async(req,res)=>{
  const{id}=req.params;
  const{name}= req.body
  const response= await User.updateOne({_id:new mongoose.mongo.ObjectId(id)}, {$set:{name}})
  res.json(response)
})

  app.delete("/users/:id", async(req,res)=>{
  const response= await User.deleteOne({_id:new mongoose.mongo.ObjectId(req.params.id)})
  res.json(response)
})

      main()
      .then(console.log)
      .catch(console.error)
      
    app.listen(port, ()=>{
    console.log("server started")
    })