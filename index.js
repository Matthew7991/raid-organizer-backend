import "dotenv/config"
import express from "express"
import cors from "cors"
import multer from "multer"
import morgan from "morgan"
import getDb from "./utilities/db.js"
import { getRaids } from "./controller/raidController.js"
import { authRouter } from "./routes/authRoutes.js"
import { charactersRouter } from "./routes/charactersRouter.js"
import { checkToken } from "./middleware/authMiddleware.js"

const port = process.env.PORT

const server = express()
export const db = await getDb()
const upload = multer({ storage: multer.memoryStorage() })

server.use(cors())
server.use(express.json())
server.use(morgan("dev"))

server.use("/api/auth", upload.none(), authRouter)
server.use("/api/characters", checkToken, charactersRouter)

server.listen(port, () => console.log("listening on port", port))
