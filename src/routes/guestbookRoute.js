import express from "express";
import GuestbookController from "../controllers/guestbookController.js";

const router = express.Router();

router.get("/", GuestbookController.getEntries);
router.post("/", GuestbookController.createEntry);
router.patch("/:id", GuestbookController.updateEntry);
router.delete("/:id", GuestbookController.deleteEntry);

export default router;
