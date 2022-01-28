const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(process.env.PORT, () => {
  console.table([`Server Running on Localhost:${process.env.PORT}`]);
});
