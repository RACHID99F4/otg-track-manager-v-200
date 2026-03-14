import { Pool } from 'pg';
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load .env file in development. Vercel injects env vars automatically in production.
dotenv.config({ path: resolve(process.cwd(), '.env') });

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ FATAL: DATABASE_URL is not set. Check your Vercel Environment Variables.');
}

const pool = new Pool({
  connectionString,
  // Force SSL for production databases (typical for Prisma/Vercel)
  ssl: {
    rejectUnauthorized: false
  },
  max: 3,                    // Low pool size is critical for serverless
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 15000,
});

pool.on('error', (err) => {
  console.error('Unexpected pg pool error:', err);
});

export default pool;
