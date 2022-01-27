const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
dotenv.config();

app.get("/", function(req, res) {
  res.status(200).send({a:"OLá mundo"});
})

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.table([`Server Running on Localhost:${process.env.PORT}`]);
});
