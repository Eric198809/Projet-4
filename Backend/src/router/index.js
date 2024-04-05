const express = require("express");

const router = express.Router();

const articleRoutes = require("./articleRouter");
const userRoutes = require("./userRouter");
const authRoutes = require("./authRouter");

router.use("/users",userRoutes) ;
router.use("/articles",articleRoutes );
router.use("/auth",authRoutes)

module.exports = router;