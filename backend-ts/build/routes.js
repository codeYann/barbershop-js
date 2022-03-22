"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _clientesController = require('./controllers/clientesController'); var _clientesController2 = _interopRequireDefault(_clientesController);

class Routes {
  

   constructor() {
    this.router = _express.Router.call(void 0, );
    this.getRoutes();
  }

   getRoutes() {
    this.router.get("/", (req, res) => res.json({ ola: "mundo" }));
    this.router.get("/clientes", new (0, _clientesController2.default)().index);
  }

   postRoutes() {}
}

exports. default = new Routes().router;
