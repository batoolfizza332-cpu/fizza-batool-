// Database entry point — BACKEND STEP 3 (schema design only).
//
// This file intentionally only re-exports the schema and reserves the spot
// where a real Drizzle/postgres client will be created once a live Supabase
// project is provisioned (a future backend step). No connection is opened
// here, and nothing in this file reads DATABASE_URL yet.

export * from './schema';

// Future home of the live DB client, e.g.:
//
//   import { drizzle } from 'drizzle-orm/postgres-js';
//   import postgres from 'postgres';
//   import * as schema from './schema';
//
//   const client = postgres(process.env.DATABASE_URL!);
//   export const db = drizzle(client, { schema });
//
// Not implemented yet — no live database connection exists at this step.
