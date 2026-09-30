const initdata=require("./data");
const mongoose=require("mongoose");
const listing=require("../models/listing");

mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
  .then(() => console.log('Connected!'));

const initdb=async()=>{
 await listing.deleteMany({});
 await listing.insertMany(initdata.data);
 console.log("data initilized");
};
initdb();