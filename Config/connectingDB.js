const mongoose = require("mongoose");
require("dotenv").config();

exports.connectingDB =()=>{
    mongoose.connect(process.env.DATABASE_URL,{

    })
    .then(()=>{console.log(`connection sucessfully connected`);})
    .catch((err)=>
    {
        console.log(`Eroor Aaagai bhai Check kar ${err} `);
        console.err(err);
        process.exit(1);
    });
}

