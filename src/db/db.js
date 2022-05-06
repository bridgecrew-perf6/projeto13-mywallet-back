import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

let db = null
try {
	const mongoClient = new MongoClient(process.env.DATABASE_URL)
	await mongoClient.connect()
	db = mongoClient.db(process.env.DATABASE_NAME)
} catch (err) {
	console.log(err)
}

export default db
