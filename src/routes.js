const { Router } = require("express");
const router = Router();
const clientes_controller = require("./controllers/clientes_controller.js");
const produtos_controller = require("./controllers/produto_controller.js");

router.get("/clientes", clientes_controller.index);
router.post("/clientes", clientes_controller.store);
router.delete("/clientes", clientes_controller.delete_by_id);

router.get("/produtos", produtos_controller.index);
module.exports = router;
