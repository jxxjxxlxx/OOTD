const express = require("express")
const router = express.Router()
const CoolPost = require("../models/CoolPost")
const Comment = require("../models/Comment")
const uploader = require("../config/cloudinary.config");
const requireAuth = require("../middleware/requireAuth")

//Get all coolPosts from DB

router.get("/", (req, res, next)=>{
    CoolPost.find()
    .populate("postingUser", "-password")
    .then((posts)=>{
        res.status(200).json(posts)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

//Get one coolPost from DB

router.get("/:id", (req, res, next)=>{
    CoolPost.findById(req.params.id)
    .populate("postingUser")
    .then((onePost)=>{
        res.status(200).json(onePost)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

//Create a coolPost

router.post("/", requireAuth, uploader.single("image"), (req, res, next)=>{
    const newPost = req.body;

    newPost.postingUser = req.session.currentUser;
    (req.file) && (newPost.image = req.file.path);

    CoolPost.create(newPost)
    .then((posts)=>{
        posts
        .populate("postingUser", "-password")
        .execPopulate()
        .then((post)=>{
         res.status(201).json(post)   
        })
    })
    .catch((e)=>{
        console.log(e);
        res.status(500).json(e)
    })
})

//get comments from a post

router.get("/:id/comments", (req, res, next) => {
    Comment.find({})
    .populate("postId")
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((e) => {
        res.status(500).json(e);
      });
  });

//Edit a coolPost

router.patch("/:id", requireAuth, uploader.single("image"), (req, res, next)=> {


    if(req.file){
        req.body.image = req.file.path
    }

    CoolPost.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate("postingUser")
    .then((updatePost)=>{
        
        res.status(200).json(updatePost)
    })
    .catch((e)=>{
    res.status(500).json(e)
})
})

//Delete a coolPost

router.delete("/:id", requireAuth, (req, res, next)=>{
    CoolPost.findByIdAndDelete(req.params.id)
    .then((posts)=>{
        res.send(posts)
        res.status(204)        
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

module.exports = router;