import express from "express";
import { loginuser,registeruser,adminLogin, getallusers } from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.post("/register",registeruser)
userRouter.post("/login",loginuser)
userRouter.get("/AllUsers",getallusers)
userRouter.post("/admin",adminLogin)

export default userRouter
