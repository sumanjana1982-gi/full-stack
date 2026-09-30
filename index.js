const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listings = require("./models/listing");
const path =require("path");
let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//mongoose with database
mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
  .then(() => console.log('Connected!'));
  //basic routing to home page
app.get("/",(req,res)=>{
    res.send("working");
});
// app.get("/testListing",async(req,res)=>{
//    let simplelisting=new Listings({
//     title:"My New Villa",
//     descrip:"By The beach",
//     price:1200,
//     location:"Goa",
//     country:"India",
//    });
//    await simplelisting.save();
//    console.log("sample was saved");
//    res.send("Succesfully saved");
// });
app.get("/listing",async(req,res)=>{
 const allListing=await Listings.find({});
 res.render("listing/index.ejs",{allListing});//
});
//listen to poet 8080
app.listen(port,()=>{
    console.log(`server is runing at ${port}`);
});