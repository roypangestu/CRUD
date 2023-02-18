const mysql = require("mysql2/promise");
require("dotenv").config();

const db_pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSW,
  database: process.env.DATABASE,
});

module.exports = db_pool;
