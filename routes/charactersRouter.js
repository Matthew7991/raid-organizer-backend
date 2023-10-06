import { Router } from "express"
import { body, checkSchema } from "express-validator"
import {
  addCharacter,
  getUserCharacters,
} from "../controller/characterController.js"
import multer from "multer"

const characterSchema = {
  name: { notEmpty: true },
  class: { notEmpty: true },
  level: { notEmpty: true, toInt: true },
}

export const charactersRouter = new Router()

const upload = multer({ storage: multer.memoryStorage() })

charactersRouter.post(
  "/",
  upload.single("image"),
  checkSchema(characterSchema),
  addCharacter
)
charactersRouter.get("/", getUserCharacters)
