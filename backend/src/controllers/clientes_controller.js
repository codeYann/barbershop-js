const client = require("../database/connection.js");
const crypto = require("crypto");

const encrypt = (text) => {
  const cipher = crypto.createCipheriv("aes-256-ctr", "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3", crypto.randomBytes(16));
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString("hex");
};

module.exports = {
  async index(req, res) {
    try {
      const response = await client.query(`
        SELECT id_cliente, nome_cliente, email 
        FROM cliente
      `);
      res.status(200).send(response.rows);
      // await client.end();
    } catch (err) {
      console.err(err);
    }
  },
  async store(req, res) {
    try {
      const { id, nome, email, senha, nascimento } = req.body;
      const response = await client.query(`INSERT INTO cliente 
      (id_cliente, nome_cliente, senha, dt_nascimento, email) 
      VALUES('${id}', '${nome}', '${encrypt(senha)}', '${nascimento}', '${email}')
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
      const response = await client.query(`DELETE FROM cliente 
      WHERE id_cliente = '${id}'
      `);
      res.json(response.rows);
      await client.end();
    } catch (err) {
      console.error(err);
    }
  },
};
