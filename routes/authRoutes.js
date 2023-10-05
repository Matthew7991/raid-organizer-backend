import express from "express"
import { checkToken, encrypt } from "../middleware/authMiddleware.js"
import { login, register, check } from "../controller/authController.js"

export const authRouter = new express.Router()

authRouter.post("/login", encrypt, login)
authRouter.post("/register", encrypt, register)
authRouter.get("/check", checkToken, check)
