const express = require("express");
const router = express.Router();


const {likePost, disLike} =require("../Controllers/likesControllers");
const {createComments} =require("../Controllers/commentsController");
const {createPost,getPosts} =require("../Controllers/postControllers");

router.post("/posts/create",createPost);
router.get("/posts",getPosts);
router.post("/comments/create",createComments);
router.post("/likes/liked",likePost);
router.post("/likes/unlike",disLike);


module.exports =router;


//export for useable for other


