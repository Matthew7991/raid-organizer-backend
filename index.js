import "dotenv/config"
import express from "express"
import cors from "cors"
import multer from "multer"
import morgan from "morgan"
import getDb from "./utilities/db"
import { getRaids } from "./controller/raidController"

const port = process.env.PORT

const server = express()
export let db = getDb()
const upload = multer({ storage: multer.memoryStorage() })

server.use(cors())
server.use(express.json())
server.use(morgan("dev"))

server.get("/api/raids", getRaids)

server.listen(port, () => console.log("listening on port", port))
