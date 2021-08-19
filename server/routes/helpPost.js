const express = require("express");
const router = express.Router();
const helpPost = require("../models/helpPost");
const requireAuth = require("../middleware/requireAuth");
const uploader = require("../config/cloudinary.config");

//Get all helpPosts from DB

router.get("/", (req, res, next) =>{
	helpPost.find()
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
	helpPost.findbyId(req.params.id)
		.then((onePost)=>{
			res.status(200),json(onePost)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

//Create a helpPost

router.post("/", requireAuth, uploader.single("image"), (req, res, next)=>{
	req.body.postingUser = req.session.currentUser;
	
	helpPost.create(req.body)
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
	helpPost.findByIdAndUpdate(req.params.id, req.body, {new:true})
		.then((updatePost)=>{
			res.send(updatePost)
			res.status(200).json(updatePost)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

//Delete a helpPost

router.delete("/:id", requireAuth, (req, res, next)=>{
	helpPost.findByIdAndDelete(req.params.id)
		.then((posts)=>{
			res.send(posts)
			res.status(204)
		})
		.catch((e)=>{
			res.status(500).json(e)
		})
})

module.exports = router;