const router = require("express").Router();
const { findByIdAndUpdate } = require("../models/Post");
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
router.put("/:id/like", async (req, res) => {
  try {
    // model to find post by params.id, other words: verify specific post
    const post = await Post.findById(req.params.id);
    // if the post doesnt include the userID
    if (!post.likes.includes(req.body.userID)) {
      // if it doesnt contain a userID for likes, then update it to have the req.body.userID to be part of its array for users that liked the post.
      await post.updateOne({ $push: { likes: req.body.userID } });
      // notifying req success
      res.status(200).json("liked the post");
    } else {
      // otherwise dislike the post. if the like post's if statement doesnt go through at all it will throw the 500 error outside of this "if + try block" anyway. The outcome with either be like or dislike. period. so if it is never initiatied there will never be a dislike but if it is initiated then there will be a like, if initiated again, there will be a dislike due to there already having a userID in the likes array. then this line will execute.
      await post.updateOne({ $pull: { likes: req.body.userID } });
      res.status(200).json("disliked the post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
// get a post
// get all posts
module.exports = router;
