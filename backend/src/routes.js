const { Router } = require("express");
const router = Router();

const clientes_controller = require("./controllers/clientes_controller.js");
const produtos_controller = require("./controllers/produto_controller.js");
const fornecedor_controller = require("./controllers/fonecedor_controller.js");
const funcionarios_controller = require("./controllers/funcionarios_controller.js");

router.get("/clientes", clientes_controller.index);
router.get("/clientes/compras", clientes_controller.clients_orders);
router.post("/clientes", clientes_controller.store);
router.delete("/clientes", clientes_controller.delete_by_id);

router.get("/produtos", produtos_controller.index);
router.post("/produtos", produtos_controller.store);
router.delete("/produtos", produtos_controller.delete_by_id);
router.put("/produtos", produtos_controller.update_preco_quantidade_by_id);

router.get("/fornecedor", fornecedor_controller.index);
router.post("/fornecedor", fornecedor_controller.store);
router.delete("/fornecedor", fornecedor_controller.delete_by_id);

router.get("/funcionarios", funcionarios_controller.index);
router.get("/funcionarios/cash", funcionarios_controller.practionares_info);

module.exports = router;
