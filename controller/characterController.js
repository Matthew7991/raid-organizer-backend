import { ObjectId } from "mongodb"
import { uploadImage } from "../utilities/imageService.js"
import { db } from "../index.js"
import { validationResult } from "express-validator"

const collection = "character"

export async function addCharacter(req, res) {
  // console.log(req.body)
  const resultValidation = validationResult(req)
  // console.log(resultValidation)
  if (!resultValidation.isEmpty()) return res.status(400).end()

  const { secure_url, public_id } = await uploadImage(req.file.buffer)

  const character = {
    ...req.body,
    level: Number(req.body.level),
    owner: new ObjectId(req.payload.id),
    imageUrl: secure_url,
    imageId: public_id,
  }
  // console.log(character)

  const result = await db.collection(collection).insertOne(character)
  // console.log(result)

  res.end()
}

export async function getUserCharacters(req, res) {
  const result = await db
    .collection(collection)
    .find({ owner: new ObjectId(req.payload.id) })
    .toArray()
  res.json(result)
}
