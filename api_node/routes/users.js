const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// update users
router.put("/:id", async (req, res) => {
  if (req.body._id === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.body._id, {
        $set: req.body,
      });
      res.status(200).json("Acct has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only update your account.");
  }
});
// delete users
// router.("/", async(req,res) =>{

// })
// get users
// router.("/", async(req,res) =>{

// })
// follow a user
// router.("/", async(req,res) =>{

// })
// unfollow a user
// router.("/", async(req,res) =>{

// })

module.exports = router;
