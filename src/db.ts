import Database, { type Database as DatabaseType } from "better-sqlite3";

//Initialize new SQLite database in the root folder
//Ignored if 'ckitchen.db' already exists
const db: DatabaseType  = new Database('ckitchen.db')
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    role TEXT CHECK(role IN ('Admin', 'Customer')) NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    referral_code 
  );
  CREATE TABLE IF NOT EXISTS Food_Item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  );
`);

export default db;