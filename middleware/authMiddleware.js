import { createHmac } from "crypto"
import { verifyToken } from "../utilities/token.js"

export function encrypt(req, res, next) {
  const hmac = createHmac("sha256", req.body.password)
  req.body.password = hmac.digest("hex")
  next()
}

export function checkToken(req, res, next) {
  const token = req.get("authorization").split(" ")[1]
  console.log({ token })

  if (token === "null") return res.status(403).end()

  try {
    verifyToken(token)
    next()
  } catch (error) {
    console.log(error)
    res.status(403).end()
  }
}
