DROP TABLE IF EXISTS entries CASCADE;
DROP TABLE IF EXISTS languages CASCADE;
DROP TABLE IF EXISTS frameworks CASCADE;
DROP TABLE IF EXISTS users CASCADE;



CREATE TABLE languages (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  icon_img VARCHAR(255)
);

CREATE TABLE frameworks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  icon_img VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(30),
  avatar_img VARCHAR(255)
);

CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  date DATE,
  Private BOOLEAN DEFAULT true,
  entry VARCHAR,
  language_id INTEGER REFERENCES languages(id) ON DELETE CASCADE,
  framework_id INTEGER REFERENCES frameworks(id) ON DELETE CASCADE,
  hours INTEGER,
  notes VARCHAR(255),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);