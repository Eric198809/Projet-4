const express = require("express");

const router = express.Router();

const { getAll, getOne, addOne, destroyOne } = require("../controller/articleController");
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", addOne);
router.delete("/:id",destroyOne )

module.exports = router;
