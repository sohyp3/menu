import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
const connectionString= process.env.DATABASE_URL ;
const sql = neon(connectionString);
export { sql };