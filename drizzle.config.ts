import { defineConfig } from 'drizzle-kit';

// Minimal config for a future PostgreSQL connection.
// No database is connected and no schema exists yet - this only
// prepares drizzle-kit's CLI (generate/migrate/studio) for later use.
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
