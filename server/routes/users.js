const express = require('express');
const router = express.Router();
const User = require("../models/User");
const requireAuth = require("../middleware/requireAuth");
const upload = require("../config/cloudinary.config");

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


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

/* delete user account */
router.delete("/me", requireAuth, (req, res, next)=>{
  User.findById(req.params.id)
      .then(()=>{
        return res.sendStatus(204);
      })
      .catch(next);
});

module.exports = router;
