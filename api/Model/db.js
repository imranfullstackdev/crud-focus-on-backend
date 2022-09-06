const POOL = require("pg").Pool;

const Pool = new POOL({
  user: "postgres",
  database: "crud_db",
  host: "localhost",
  password: "lmvit123",
});
module.exports = Pool;
