/* eslint-disable prettier/prettier */
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';

const clientConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(clientConnect);

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: './src/drizzle/migrations' })
  .then(() => {
    console.log('Migrations complete!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migrations failed!', err);
    process.exit(1);
  });
