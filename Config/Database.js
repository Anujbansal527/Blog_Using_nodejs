const mongoose = require("mongoose");

//importing dotenv for getting utl
require("dotenv").config();

//creating connection between data base 
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        //files if require
    })
    .then(()=> console.log('MongoDB Connected ...'))
    .catch((err)=>{
        console.log(`error hai bhai ${err}`);
        console.error(err)});
        process.exit(1);}

//export for useable for other
module.exports = dbConnect;
 