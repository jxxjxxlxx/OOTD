const express = require('express');
const router = express.Router();
const User = require("../models/User");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../config/cloudinary.config");
const CoolPost = require("../models/CoolPost")
const HelpPost = require("../models/HelpPost")

// GET one user
router.get("/me", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser._id)
  .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

/* update current user info */
router.patch("/me", requireAuth, upload.single("profileImg"), (req, res, next)=>{
      const userId = req.session.currentUser;

      if (req.file) {
        req.body.profileImg = req.file.path; 
      }

      User.findByIdAndUpdate(userId, req.body, {new: true })
        .select("-password")
        .then((userDoc) =>{
          res.status(200).json(userDoc);
        })
        .catch(next);
});

/* get user posts */
router.get("/me/coolposts", requireAuth, (req, res, next) => {
  const currentUserId = req.session.currentUser;
  CoolPost.find({postingUser: currentUserId })
  .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.get("/me/helpposts", requireAuth, (req, res, next) => {
  const currentUserId = req.session.currentUser;
  HelpPost.find({postingUser: currentUserId })
  .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

/* delete user account */
router.delete("/me", requireAuth, (req, res, next)=>{
  User.findById(req.params.id)
      .then(()=>{
        return res.sendStatus(204);
      })
      .catch(next);
});

module.exports = router;
