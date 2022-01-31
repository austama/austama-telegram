---
--- austama sqlite3 database schema test
---

BEGIN;
INSERT INTO users (name, api_id, api_hash, phone, create_date)
  VALUES ('test', '95bf3233dbc0032', 'aa973365594f0bd8b198821eff5c270ad2a3d0d7c7',
          '+0123456789', datetime());

INSERT INTO sessions (name, session, create_date, users_id, create_date)
  VALUES ('test', '8383118890b3926408ef9b1e35022e7882a699a8d05aaa6e21737dd5',
          datetime('2022-01-01 10:00:00'), (SELECT id FROM users WHERE name='test'),
          datetime());

INSERT INTO messages (message, create_date)
  VALUES ('my test message', datetime());
  
INSERT INTO messages_medias (messages_id, users_id)
  VALUES ((SELECT last_insert_rowid() FROM messages), (SELECT id FROM users WHERE name='test'));
COMMIT;

DELETE FROM messages_medias;
DELETE FROM sessions;
DELETE FROM users;
