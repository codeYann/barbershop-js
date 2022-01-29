const client = require("../database/connection.js");

module.exports = {
  async index(req, res) {
    try {
      const response = await client.query(`SELECT * FROM fornecedor`);
      res.status(200).json(response.rows);
    } catch (err) {
      console.err(err);
    }
  },
  async store(req, res) {
    try {
      const { id, cnpj, nome } = req.body;
      const response = await client.query(`INSERT INTO fornecedor
      (id_fornecedor, cnpj, nome_fornecedor) 
      VALUES('${id}', '${cnpj}', '${nome}')
      `);
      res.json(response.rows);
      await client.end();
    } catch (err) {
      console.error(err);
    }
  },
  async delete_by_id(req, res) {
    try {
      const { id } = req.body;
      const response = await client.query(`DELETE FROM fornecedor
      WHERE id_fornecedor = '${id}'
      `);
      res.json(response.rows);
      await client.end();
    } catch (err) {
      console.error(err);
    }
  },
};
