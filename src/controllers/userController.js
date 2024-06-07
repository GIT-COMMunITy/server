import express from "express";
const router = express.Router();

// 유저 생성
router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  // 유저 생성 로직
});

// 유저 정보 조회
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  // 유저 조회 로직
});

// 유저 정보 수정
router.patch("/:userId", (req, res) => {
  const userId = req.params.userId;
  const { username, password } = req.body;

  // 유저 수정 로직
});

// 유저 삭제
router.delete("/:userId", (req, res) => {
  const userId = req.params.userId;

  // 유저 삭제 로직
});

export default router;
