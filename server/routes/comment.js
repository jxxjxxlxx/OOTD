const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment")
const requireAuth = require("../middleware/requireAuth")


//get all comments COOLPOST
router.get("/ilookgood/:id", (req, res, next)=>{
    Comment.find()
    .populate()
    .then((comments)=>{
        res.status(200).json(comments)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

// post a comment COOLPOST
router.post("/ilookgood/:id", requireAuth, (req, res, next)=>{
    
    const newComment = req.body

    newComment.userId = req.session.currentUser;

    Comment.create(newComment)
    .then((comment)=>{
        comment
        .populate()
        .then((comment)=>{
            res.status(201).json(comment)
        })
        
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

//edit comment COOLPOST
router.patch("/ilookgood/:id", requireAuth, (req,res,next)=>{
    Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updateComment)=>{
        res.status(200).json(updateComment)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

//delete comment COOLPOST
router.delete("/ilookgood/:id", requireAuth, (req, res, next)=>{
    Comment.findByIdAndDelete(req.params.id)
    .then((deleteComment)=>{
        res.send(deleteComment)
        res.status(204)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})


//get all comments HELPPOST
router.get("/plzhelp/:id", (req, res, next)=>{
    Comment.find()
    .populate()
    .then((comments)=>{
        res.status(200).json(comments)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

// post a comment HELPPOST
router.post("/plzhelp/:id", requireAuth, (req, res, next)=>{
    
    const comment = new Comment(req.body)

    req.body.userId = req.session.currentUser;

    Comment.create(req.body)
    .then((comment)=>{
        res.status(201).json(comment)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})

//edit comment HELPPOST
router.patch("/plzhelp/:id", requireAuth, (req,res,next)=>{
    Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((updateComment)=>{
        res.status(200).json(updateComment)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})
//delete comment HELPPOST
router.delete("/plzhelp/:id", requireAuth, (req, res, next)=>{
    Comment.findByIdAndDelete(req.params.id)
    .then((deleteComment)=>{
        res.send(deleteComment)
        res.status(204)
    })
    .catch((e)=>{
        res.status(500).json(e)
    })
})




module.exports = router;