const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const savedPost = await Post.create({ title, body });
    res.status(200).json({
      post: savedPost,
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find()
        .populate("likes")
        .populate("comments")
        .exec();
      res.status(200).json({
        posts,
      });
    } catch (err) {
      console.log(err);
      console.error(err);
      res.status(500).json({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    }
}
