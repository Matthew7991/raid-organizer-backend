import { ObjectId } from "mongodb"
import { db } from "../index.js"

const collection = "party"

export async function addParty(req, res) {
  // console.log(req.body)

  const partyPeople = req.body.characters.map((item) => new ObjectId(item._id))
  // console.log(partyPeople)

  const party = {
    name: req.body.name,
    characters: partyPeople,
    owner: new ObjectId(req.payload.id),
  }
  // console.log(party)

  const response = await db.collection(collection).insertOne(party)
  // console.log(response)

  res.end()
}
