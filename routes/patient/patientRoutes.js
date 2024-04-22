const express = require("express");

const router = express.Router();

const patientController = require("../../controller/patient/patientController");

router.post("/createPatient", patientController.createPatient);
router.get("/getPatients", patientController.getPatients);
router.get("/getPatientById/:id", patientController.getPatientById);
router.put("/updatePatient", patientController.updatePatient);
router.delete("/deletePatient/:id", patientController.deletePatient);

module.exports = router;
