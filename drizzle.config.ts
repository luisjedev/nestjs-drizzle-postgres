import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  schema: './src/drizzle/schemas',
  // out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
});
