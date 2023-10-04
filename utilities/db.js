import { MongoClient } from "mongodb"

const url = process.env.MONGODB_LOGIN
const dbName = process.env.MONGODB_DBNAME
const client = new MongoClient(url)

export default async function getDb() {
  await client.connect()
  const db = client.db(dbName)
  return db
}
