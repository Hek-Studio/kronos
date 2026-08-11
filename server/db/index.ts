import { drizzle } from "drizzle-orm/libsql";
import { relations } from "./relations";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "file:./local.db";

if (!connectionString) {
  throw new Error(
    "Database connection string is not defined. Please set the DATABASE_URL environment variable.",
  );
}

export const db = drizzle(connectionString, { relations });
