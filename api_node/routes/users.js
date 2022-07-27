const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// update users
router.put("/:id", async (req, res) => {
  // verify if user id matches with id being requested, if not return an error
  if (req.body._id === req.params.id || req.body.isAdmin) {
    //  if user tries to update a password, update new password with an ecrypted password
    if (req.body.password) {
      try {
        // applying encryption for the password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        // error if not successful
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    // if this is the proper id associated then update account
    try {
      const user = await User.findByIdAndUpdate(req.body._id, {
        $set: req.body,
      });
      res.status(200).json("Acct has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
    // else state that you can only update your account
  } else {
    return res.status(403).json("You can only update your account.");
  }
});
// delete users
router.delete("/:id", async (req, res) => {
  // verify if user id matches with id being requested, if not return an error
  if (req.body._id === req.params.id || req.body.isAdmin) {
    // if this is the proper id associated then update account
    try {
      const user = await User.deleteOne(req.params._id);
      res.status(200).json("Acct has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
    // else state that you can only update your account
  } else {
    return res.status(403).json("You can only delete your account.");
  }
});
// get users
router.get("/:id", async (req, res) => {
  // try to find users
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body._id !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.id);
      if (!user.followers.includes(req.body._id)) {
        await user.updateOne({ $push: { followers: req.body.id } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("now following");
      } else {
        res.status(403).json("already following");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can only follow others.");
  }
});
// unfollow a user
// router.("/", async(req,res) =>{

// })

module.exports = router;
