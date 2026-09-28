const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listings = require("./models/listing");
let port=8080;



//mongoose with database
mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
  .then(() => console.log('Connected!'));
  //basic routing to home page
app.get("/",(req,res)=>{
    res.send("working");
});
app.get("/testListing",(req,res)=>{

});
//listen to poet 8080
app.listen(port,()=>{
    console.log(`server is runing at ${port}`);
});