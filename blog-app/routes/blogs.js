const express = require('express');

const router = express.Router();

const { createComment } = require('../controllers/commentController');
const { likePost, unlikePost } = require('../controllers/likeController');
const { createPost, getAllPosts } = require('../controllers/postController');


router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.get('/posts', getAllPosts);



module.exports = router;