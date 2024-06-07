import BoardService from "../services/boardService.js";

const BoardController = {
  createPost: (req, res) => {
    const postDto = req.body;
    BoardService.createPost(postDto, (err, result) => {
      if (err) throw err;
      res.send("Post added...");
    });
  },
  getAllPosts: (req, res) => {
    BoardService.getAllPosts((err, results) => {
      if (err) throw err;
      res.json(results);
    });
  },
  getPostById: (req, res) => {
    const { id } = req.params;
    BoardService.getPostById(id, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  },
  updatePost: (req, res) => {
    const { id } = req.params;
    const postDto = req.body;
    BoardService.updatePost(id, postDto, (err, result) => {
      if (err) throw err;
      res.send("Post updated...");
    });
  },
  deletePost: (req, res) => {
    const { id } = req.params;
    BoardService.deletePost(id, (err, result) => {
      if (err) throw err;
      res.send("Post deleted...");
    });
  },
};

export default BoardController;
