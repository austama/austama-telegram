--
-- austama sqlite3 database schema - only used to store synchronization state
-- between application and telegram
--

PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  api_id TEXT UNIQUE,
  api_hash TEXT UNIQUE,
  phone TEXT UNIQUE,
  bot TEXT UNIQUE,
  create_date DATETIME NOT NULL,
  delete_date DATETIME
);

CREATE TABLE sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  session TEXT UNIQUE NOT NULL,
  create_date DATETIME NOT NULL,
  delete_date DATETIME,
  users_id INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE channels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  remote_id VARCHAR NOT NULL
);

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  message TEXT,
  remote_id TEXT,
  create_date DATETIME NOT NULL,
  publish_date DATETIME,
  delete_date DATETIME
);

CREATE TABLE medias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  media BLOB,
  remote_id TEXT,
  type TEXT NOT NULL,
  create_date DATETIME NOT NULL,
  publish_date DATETIME,
  delete_date DATETIME
);

CREATE TABLE messages_medias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  messages_id INTEGER REFERENCES messages(id),
  medias_id INTEGER REFERENCES medias(id),
  users_id INTEGER REFERENCES users(id)
);
