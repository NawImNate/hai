const router = require("express").Router();
const Post = require("../models/Post");

// create a post
router.post("/", async (req, res) => {
  // create a new post from the req body of the post model
  const newPost = Post(req.body);
  try {
    // save the post as a newPost
    const savedPost = await newPost.save();
    res.status(200).json("savedPost");
  } catch (err) {
    res.status(500).json(err);
  }
});
// update a post
router.put("/:id", async (req, res) => {
  // create a variable for a post and find the post by id of params
  try {
    const post = await Post.findById(req.params.id);

    if (post.userID === req.body.userID) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("post updated");
    } else {
      res.status(403).json("you can only update your post(s)");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete a post
router.delete("/:id", async (req, res) => {
  // create a variable for a post and find the post by id of params
  try {
    const post = await Post.findById(req.params.id);
    // identify if post is eligible for deletion
    if (post.userID === req.body.userID) {
      // delete post
      await post.deleteOne();
      // success
      res.status(200).json("post deleted");
    } else {
      // if if statement was not true, resulting in an error
      res.status(403).json("you can only delete your post(s)");
    }
  } catch (err) {
    // if entire try block didnt execute
    res.status(500).json(err);
  }
});
// like a post
// get a post
// get all posts
module.exports = router;
