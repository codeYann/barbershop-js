const { Router } = require("express");
const router = Router();
const client_controllers = require("./controllers/clientes_controller.js");

router.get("/clientes", client_controllers.index);
router.post("/clientes", client_controllers.store);
module.exports = router;
