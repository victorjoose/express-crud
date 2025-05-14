const db = require('../database/db');

const getAllPosts = (limit) => {
  const query = limit ? `SELECT * FROM posts LIMIT ?` : `SELECT * FROM posts`;
  const params = limit ? [limit] : [];

  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM posts WHERE id = ?`, [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const createPost = (title) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO posts (title) VALUES (?)`, [title], function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, title });
    });
  });
};

const updatePost = (id, title) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE posts SET title = ? WHERE id = ?`, [title, id], function (err) {
      if (err) reject(err);
      else resolve({ id, title });
    });
  });
};

const deletePost = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM posts WHERE id = ?`, [id], function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
