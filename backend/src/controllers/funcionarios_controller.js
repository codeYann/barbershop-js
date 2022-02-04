const client = require("../database/connection.js");

module.exports = {
  async index(req, res) {
    try {
      const response = await client.query(`SELECT 
        id_funcionario, 
        nome_funcionario, 
        dt_nascimento, 
        salario, 
        estado,
        cidade 
        FROM funcionario`
      );
      res.status(200).json(response.rows);
    } catch (err) {
      console.error(err);
    }
  },
  async practionares_info(req, res) {
    try {
      const response = await client.query(`SELECT 
          SUM(salario) AS "Somatorio dos salários", 
          AVG(salario) AS "Média dos salários", 
          MAX(salario) AS "Maior salário", 
          MIN(salario) AS "Menor salário"
          FROM funcionario`);
      res.json(response.rows);
    } catch (err) {
      console.error(err);
    }
  },
};
