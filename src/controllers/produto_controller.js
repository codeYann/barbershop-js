const client = require("../database/connection.js");

module.exports = {
  async index(req, res) {
    try {
      const response = await client.query("SELECT * FROM produto");
      res.status(200).json(response.rows);
    } catch (err) { 
      console.err(err);
    }
  },
  async store(req, res) {
    try {
      
    } catch (err) {
      console.error(err);
    }
  },
  async delete_by_id(req, res) {
    try {
      
    } catch (err) {
      console.error(err);
    }
  }
}
