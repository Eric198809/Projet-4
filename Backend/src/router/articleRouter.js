const express = require("express");

const router = express.Router();

const { getAll, getOne, addOne } = require("../controller/articleController");
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", addOne)

module.exports = router;