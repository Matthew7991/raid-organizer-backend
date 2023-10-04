import { db } from "../index.js"
import { createToken } from "../utilities/token.js"

const collection = "user"

export async function login(req, res) {
  const result = await db.collection(collection).findOne(req.body)
  if (!result) return res.status(403).end()
  const token = createToken({ id: result._id })
  res.json(token)
}

export async function register(req, res) {
  const result = await db.collection(collection).insertOne(req.body)
  if (!result) return res.status(403).end()
  res.end()
}

export function check(req, res) {
  res.end()
}
