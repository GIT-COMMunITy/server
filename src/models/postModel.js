import db from "../providers/db.js";

const Post = {
  create: (post, callback) => {
    const query =
      "INSERT INTO posts (user_id, title, content, image_url) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [post.user_id, post.title, post.content, post.image_url],
      callback
    );
  },
  findAll: (callback) => {
    const query = "SELECT * FROM posts";
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = "SELECT * FROM posts WHERE post_id = ?";
    db.query(query, [id], callback);
  },
  update: (id, post, callback) => {
    const query =
      "UPDATE posts SET title = ?, content = ?, image_url = ? WHERE post_id = ?";
    db.query(query, [post.title, post.content, post.image_url, id], callback);
  },
  delete: (id, callback) => {
    const query = "DELETE FROM posts WHERE post_id = ?";
    db.query(query, [id], callback);
  },
};

export default Post;
