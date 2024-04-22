const express = require("express");
const authController = require("../../controller/auth/authController");

const router = express.Router();

router.post("/login", authController.login);

module.exports = router;
