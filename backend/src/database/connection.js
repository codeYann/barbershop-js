const database_env = require("../config/database_config.js");
const { Pool } = require("pg");

const client = new Pool({
  host: database_env.host,
  user: database_env.user,
  port: database_env.port,
  password: database_env.password,
  database: database_env.database,
});

module.exports = client;
