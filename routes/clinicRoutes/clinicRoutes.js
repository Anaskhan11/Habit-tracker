const express = require("express");
const clinicController = require("../../controller/clinic/clinicController");

const router = express.Router();

router.post("/createClinic", clinicController.createClinic);
router.get("/getClinic", clinicController.getClinic);

module.exports = router;
