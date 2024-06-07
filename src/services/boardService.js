import Post from "../models/postModel.js";
import PostDto from "../dtos/postDto.js";

const BoardService = {
  createPost: (postDto, callback) => {
    const post = new PostDto(
      postDto.user_id,
      postDto.title,
      postDto.content,
      postDto.image_url
    );
    Post.create(post, callback);
  },
  getAllPosts: (callback) => {
    Post.findAll(callback);
  },
  getPostById: (id, callback) => {
    Post.findById(id, callback);
  },
  updatePost: (id, postDto, callback) => {
    const post = new PostDto(
      postDto.user_id,
      postDto.title,
      postDto.content,
      postDto.image_url
    );
    Post.update(id, post, callback);
  },
  deletePost: (id, callback) => {
    Post.delete(id, callback);
  },
};

export default BoardService;
