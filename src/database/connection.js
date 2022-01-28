const database_env = require("../config/database_config.js");
const {Client} = require("pg");

const client = new Client({
  host: database_env.host,
  user: database_env.user,
  port: database_env.port,
  password: database_env.password,
  database: database_env.database
});

client.connect();

module.exports = client;
