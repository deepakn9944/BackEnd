const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({ post, user });
        const savedLike = await like.save();
        

        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true }).populate('likes').exec();

        res.status(200).json({
          post: updatePost,
        });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};


exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const deletelike = await Like.findOneAndDelete({ post:post, _id:like });
        const updatePost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletelike._id } }, { new: true });
         res.status(200).json({
           post: updatePost,
         });
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500).json({
          success: false,
          data: "Internal server error",
          message: err.message,
        });
    }
}
