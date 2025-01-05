import { MongoClient } from 'mongodb';
import { env } from '$env/static/private';


// const client = new MongoClient(env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

const client = new MongoClient(MONGO_URI);
let db;

export async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db('menu'); 
    }
    return db;
}
