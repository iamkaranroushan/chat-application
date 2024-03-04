import express from "express";

import registerUser from "../controllers/authController/register.js";
import loginUser from "../controllers/authController/login.js";
import getToken from "../controllers/authController/getToken.js";
const router = express.Router();


//public routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getToken", getToken )
export default router;
