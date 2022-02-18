const express= require('express');
const mongoose = require('mongoose');
mongoose.ObjectId()

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



      main()
      .then(console.log)
      .catch(console.error)
      
    app.listen(port, ()=>{
    console.log("server started")
    })