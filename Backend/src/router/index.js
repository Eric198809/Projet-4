const express = require("express");

const router = express.Router();

const articleRoutes = require("./articleRouter");
// const userRoutes = require("./userRouter");

// router.use("/users",userRoutes) ;
router.use("/articles",articleRoutes );

module.exports = router;