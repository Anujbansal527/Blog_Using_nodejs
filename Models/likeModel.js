const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //getting id 
        ref:"Post", //reffer to that id
    },
    user:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Like",likeSchema);