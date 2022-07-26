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
// Login
router.post("/login", async (req, res) => {
  // search for a user that exists
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // wrong password
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
