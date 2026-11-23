const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("app.db");
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password_hash TEXT)");
});

module.exports = db;
