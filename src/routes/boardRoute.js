import express from "express";
import BoardController from "../controllers/boardController.js";

const router = express.Router();

// CREATE - 게시물 추가
router.post("/", BoardController.createPost);

// READ - 모든 게시물 조회
router.get("/", BoardController.getAllPosts);

// READ - 특정 게시물 조회
router.get("/:id", BoardController.getPostById);

// UPDATE - 게시물 수정
router.put("/:id", BoardController.updatePost);

// DELETE - 게시물 삭제
router.delete("/:id", BoardController.deletePost);

export default router;
