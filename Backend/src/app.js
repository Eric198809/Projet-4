const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

// app.get("/", (req, res) => {
//   res.status(200).send("on est la  sur le '/' ");
// });
app.use("/api", router);

module.exports = app;