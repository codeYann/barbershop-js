"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _express = require("express");

class Routes {
  constructor() {
    this.router = _express.Router.call(void 0);
    this.getRoutes();
  }

  getRoutes() {
    this.router.get("/", (_, res) => {
      res.json({ ola: "Mundo!" });
    });
  }

  postRoutes() {
  }
}

exports.default = new Routes().router;
