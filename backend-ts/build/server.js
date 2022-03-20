"use strict";
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _app = require("./app");
var _app2 = _interopRequireDefault(_app);
var _dotenv = require("dotenv");
var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();
_app2.default.listen(process.env.PORT, () => {
  console.table([`Server Running on localhost:${process.env.PORT}`]);
});
