const Post = require("../Models/postModel");
const Comment = require("../Models/commentModel");
 
exports.createComments = async (req,res) =>{
    try{
        //fetching from req body
        const {post,user,body} = req.body;
        //creating comment object 
        const comment = new Comment({
            post,user,body
        });
        //saving comment on database
        const savedComment = await comment.save();
        //adding comment on the post                                        //this is written in post model            
        const updatedPost = await Post.findByIdAndUpdate(post,     {$push: { comments:savedComment._id}}, {new:true})
        .populate("comments")//by using populate we provide all data of comment accesable to that post element
        .exec(); 
        //populate let help to access all document data related to that id        
                                                   //kaha dalna hai  //kis parameter me kya dalna hai //new updated document rw=eturn karega
                                                                    //push parameter only update that element only 
        res.json({
            post:updatedPost,
        });
    }
    catch(error)
    {
        return res.status(500).json({
            error:"not able to create comment",
            message:`Kya hua ${error}`,
        })
    }

};