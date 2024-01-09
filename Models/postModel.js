const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId, //getting id 
        ref:"Like", //reffer to that id
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId, //getting id 
        ref:"Comment", //reffer to that id
    }]
});

module.exports = mongoose.model("Post",postsSchema);

