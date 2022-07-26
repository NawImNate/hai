const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    // Generating a PW
    const salt = await bcrypt.genSalt(10);
    // Encrypt a password
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // newUser object values to post, pulling from json body from client.
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    // Save user and return http response.
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
