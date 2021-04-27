const express = require("express");
const router = require("./router/router");
const cors = require("cors");
const app = express();
require("./db/mongoose");
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is up on 5000");
});
