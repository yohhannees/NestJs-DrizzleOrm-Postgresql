/* eslint-disable prettier/prettier */
import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;
