const { client_encoding } = require("pg/lib/defaults");
const client = require("../database/connection.js");

module.exports = {
  async index(req, res) {
    try {
      const response = await client.query("SELECT * FROM produto");
      res.status(200).json(response.rows);
    } catch (err) {
      console.error(err);
    }
  },
  async store(req, res) {
    try {
      const { id, preco, qtd, nome, id_fornecedor } = req.body;
      const response = await client.query(`INSERT INTO produto 
      (id_produto, preco, quantidade, nome, idfornecedor)
      VALUES ('${id}', '${preco}', '${qtd}', '${nome}', '${id_fornecedor}')
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
      const response = await client.query(`
      DELETE FROM produto 
      WHERE id_produto = '${id}'`);
      res.status(200).json(response.rows);
      await client.end();
    } catch (err) {
      console.error(err);
    }
  },
  async update_preco_quantidade_by_id(req, res) {
    try {
      const { id, preco, qtd } = req.body;
      const response = await client.query(`
        UPDATE produto
        SET preco = '${preco}', quantidade = '${qtd}'
        WHERE id_produto = '${id}'
      `);
      res.status(200).json(response.rows);
      await client.end();
    } catch (err) {
      console.error(err);
    }
  },
};
