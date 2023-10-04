import jwt from "jsonwebtoken"

export function createToken(payload) {
  console.log({ payload })
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
}

export function verifyToken(token) {
  console.log({ token })

  return jwt.verify(token, process.env.JWT_SECRET)
}
