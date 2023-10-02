import { MongoClient } from "mongodb"
import { db } from ".."

const url = process.env.MONGODB_LOGIN
const dbName = process.env.MONGODB_DBNAME
const client = new MongoClient(url)

export default async function getDb() {
  if (db) return db
  await client.connect()
  db = client.db(dbName)
  return db
}
