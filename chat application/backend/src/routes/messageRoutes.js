import express from "express";
import sendMessage from "../controllers/messageController/sendMessage.js";

const router = express.Router();

router.post("/send", sendMessage);

export default router;
