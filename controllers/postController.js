const postModel = require('../models/postModel');

const getPosts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const posts = await postModel.getAllPosts(limit);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const post = await postModel.getPostById(id);

    if (!post) {
      const error = new Error(`Post with ID ${id} not found`);
      error.status = 404;
      return next(error);
    }

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      const error = new Error('Title is required');
      error.status = 400;
      return next(error);
    }

    const newPost = await postModel.createPost(title);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    const existingPost = await postModel.getPostById(id);
    if (!existingPost) {
      const error = new Error(`Post with ID ${id} not found`);
      error.status = 404;
      return next(error);
    }

    const updated = await postModel.updatePost(id, title);
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const existingPost = await postModel.getPostById(id);
    if (!existingPost) {
      return res.status(404).json({ message: `Post with ID ${id} not found` });
    }

    await postModel.deletePost(id);
    res.status(200).json({ message: `Post ${id} deleted` });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
