const Post = require("../Models/postModel");
const Like = require("../Models/likeModel");

 
exports.likePost = async (req,res) =>{
    try{
        //fetching from req body
        const {post,user} = req.body;
        //creating like object 
        const like = new Like({
            post,user
        });
        //saving likes on database
        const saveLikes = await like.save();
        //adding like on the post                                      //this is written in post model
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: { likes:saveLikes._id}}, {new:true})
        .populate("likes").exec(); //by using populate we provide all data of likes accesable to that post element
        //populate let help to access all document data related to that id        
                                                   //kaha dalna hai  //kis parameter me kya dalna hai //new updated document rw=eturn karega
                                                                    //push parameter only update that element only 
        res.json({
            post:updatedPost,
            message:"Sucess"
        });
    }
    catch(error)
    {
        return res.status(500).json({
            error:"Unable to create Likes",
            message:`ye kya hua ${error}`
        })
    }

};

exports.disLike = async (req,res) =>{
    try
    {
        const {post,like} = req.body;

        const unlike = await Like.findOneAndDelete({post:post,_id:like})

        const updatePost = await Post.findByIdAndUpdate(post,{$pull: {likes:unlike._id}}, {new:true}).populate("likes").exec(); 

        res.json({
            post:updatePost,
        });
    }
    catch(error)
    {
        return res.status(500).json({
            error:`"Unable to dis Likes" ${error}`,
        })
    }
};