// const db_config = require("../config/database_config.js");
const conf = require("../config/database_config.js");
const {Client} = require("pg");

const client = new Client({
  host: conf.host,
  user: conf.user,
  port: conf.port,
  password: conf.password,
  database: conf.database
});

client.connect();

module.exports = client;
