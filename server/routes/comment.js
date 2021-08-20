const express = require("express")
const router = express.Router()
const comment = require("../models/comment")
const requireAuth = require("../middleware/requireAuth")


// post a comment 
router.post("/", requireAuth, (req, res, next)=>{
    
    req.body.userId = req.session.currentUser;

    CoolPost.create(req.body)
    .then((posts)=>{
        res.status(201).json(posts)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

module.exports = router;