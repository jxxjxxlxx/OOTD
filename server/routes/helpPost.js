const express = require("express");
const router = express.Router();
const HelpPost = require("../models/HelpPost");
const requireAuth = require("../middleware/requireAuth");
const uploader = require("../config/cloudinary.config");


//Get all helpPosts from DB
router.get("/", (req, res, next) =>{
	HelpPost.find()
		.populate("postingUser", "-password")
		.then((posts)=>{
		res.status(200).json(posts)
		})
		.catch((e)=>{
		res.status(500).json(e)
		})
})

//Get one helpPost from DB

router.get("/:id", (req, res, next) =>{
	HelpPost.findById(req.params.id)
		.populate("postingUser")
		.then((onePost)=>{
			res.status(200).json(onePost)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

//Create a helpPost

router.post("/", requireAuth, uploader.single("image"), (req, res, next)=>{
    const newPost = req.body;

    newPost.postingUser = req.session.currentUser;
    (req.file) && (newPost.image = req.file.path);
	
	HelpPost.create(req.body)
		.then((posts)=>{
			posts
			.populate("postingUser", "-password")
			.execPopulate()
			.then((post)=>{
				res.status(201).json(post)
			})
		})
		.catch((e)=>{
			res.status(500).json(e)
		})

	})

//Edit a helpPost

router.patch("/:id", requireAuth, uploader.single("image"), (req, res, next)=>{
	
	if(req.file){
        req.body.image = req.file.path
    }

	HelpPost.findByIdAndUpdate(req.params.id, req.body, {new:true})
		.then((updatePost)=>{
			res.status(200).json(updatePost)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

//Delete a helpPost

router.delete("/:id", requireAuth, (req, res, next)=>{
	HelpPost.findByIdAndDelete(req.params.id)
		.then((posts)=>{
			res.send(posts)
			res.status(204)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

module.exports = router;