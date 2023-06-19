const express = require("express");
const router = express.Router();

const comment = require("../schemas/comment.js");
const post = require("../schemas/post.js");

router.get("/comments", async (req, res) => {
  const comments = await comment.find({});
  const postId = comments.map((comment) => comment.postId);

  const posts = await post.find({ postId: postId });

  const results = comments.map((comment) => {
    return {
      quantity : comment.quantity,
      posts : posts.find((item) => item.postId === comment.postId)
    };
  });

  res.json({
    comments : results,
  });
});


module.exports = router;