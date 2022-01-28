const db_config = require("../config/database_config.js");
const {Client} = require("pg");

const client = new Client({
  host: db_config.host,
  user: db_config.user,
  port: db_config.port,
  password: db_config.password,
  database: db_config.database
});

client.connect();

module.exports = client;
