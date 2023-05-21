const Post = require('../models/postModel');
const Comment = require('../models/commentModel');


exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        const comment = new Comment({ post, user, body });
        const savedComment = await comment.save();

        const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")
            .exec();
        res.json({
            post: updatePost,
        })
    }
    catch (error) {
        console.log(err);
        console.error(err);
        res.status(500).json({
          success: false,
          data: "internal server error",
          message: err.message,
        });
    }
}

