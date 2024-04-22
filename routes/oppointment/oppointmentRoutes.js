const oppointmentController = require("../../controller/oppointment/oppointmentController");

const express = require("express");
const router = express.Router();

router.post("/createoppointment", oppointmentController.createoppointment);
router.get("/getOppointments", oppointmentController.getOppointments);
router.get("/getOppointmentById/:id", oppointmentController.getOppointmentById);
router.put("/updateOppointment", oppointmentController.updateOppointment);
router.delete(
  "/deleteOppointment/:id",
  oppointmentController.deleteOppointment
);

module.exports = router;
