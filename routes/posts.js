const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


//Get all posts
router.get('/', postController.getPosts);

// Get single post
router.get('/:id', postController.getPost);

// Create a post
router.post('/', postController.createPost);

// Update a post
router.put('/:id', postController.updatePost);

//Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router;