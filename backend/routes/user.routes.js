import express from "express";
import {login, register } from "../controllers/user.controller.js";
import bcrypt from "bcryptjs";

import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", upload.single("image"), register);
router.post("/login", register);

export default router;
