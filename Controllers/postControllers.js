const Post = require("../Models/postModel");
 
exports.createPost = async (req,res) =>{
    try{
        const {title,body} = req.body;
        //creating post object 
        const posts = new Post({
            title,body
        });
        //saving post on database
        const savePost = await posts.save();

        res.json({
            post:savePost,
            message:"Post created sucessfull"
        });
    }
    catch(error)
    {
        return res.status(400).json({
            error:"Unable to create post",
        })
    }

};

exports.getPosts =  async (req,res) =>{
    try{
        const posts = await Post.find()
      
        res.json({
            posts,
            message:"fetched Sucessfull",
        });
    }
    catch(error)
    {
        return res.status(400).json({
            error:`Unable to find any post ${error}`,
            message:"Unable to fetched"
        })
    }
}