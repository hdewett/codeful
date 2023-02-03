const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .then(e => console.log(`CONNECTED:\n${e}`))
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;