import { Router } from "express"
import { addParty } from "../controller/partyController.js"

export const partyRouter = new Router()

partyRouter.post("/", addParty)
