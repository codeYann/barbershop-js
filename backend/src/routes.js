const { Router } = require("express");
const router = Router();

const clientes_controller = require("./controllers/clientes_controller.js");
const produtos_controller = require("./controllers/produto_controller.js");
const forncedor_controller = require("./controllers/fonecedor_controller.js");

router.get("/clientes", clientes_controller.index);
router.post("/clientes", clientes_controller.store);
router.delete("/clientes", clientes_controller.delete_by_id);

router.get("/produtos", produtos_controller.index);
router.post("/produtos", produtos_controller.store);
router.delete("/produtos", produtos_controller.delete_by_id);
router.put("/produtos", produtos_controller.update_preco_quantidade_by_id);

router.get("/forncedor", forncedor_controller.index);
router.post("/forncedor", forncedor_controller.store);
router.delete("/forncedor", forncedor_controller.delete_by_id);

module.exports = router;
