const oppointmentModel = require("../../models/oppointment/oppointmentModel");

// create oppointment
exports.createoppointment = async (req, res) => {
  try {
    const { patient_id, clinic_id, oppointment_Date, oppointment_time } =
      req.body;

    const oppointmentData = await oppointmentModel.createoppointment(
      patient_id,
      clinic_id,
      oppointment_Date,
      oppointment_time
    );
    res.status(201).json({
      message: "Oppointment created successfully",
      oppointment: oppointmentData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create oppointment", error: error.message });
  }
};

// get all oppointments
exports.getOppointments = async (req, res) => {
  try {
    const oppointments = await oppointmentModel.getOppointments();
    res.status(200).json({ oppointments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch oppointments", error: error.message });
  }
};

// get oppointment by id
exports.getOppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const oppointment = await oppointmentModel.getOppointmentById(id);
    res.status(200).json({ oppointment });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch oppointment", error: error.message });
  }
};

// update oppointment
exports.updateOppointment = async (req, res) => {
  try {
    const { oppointment_id, patient_id, clinic_id, oppointment_Date } =
      req.body;
    const updatedOppointment = await oppointmentModel.updateOppointment(
      oppointment_id,
      patient_id,
      clinic_id,
      oppointment_Date
    );
    res.status(200).json({
      message: "Oppointment updated successfully",
      oppointment: updatedOppointment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update oppointment", error: error.message });
  }
};

// delete oppointment
exports.deleteOppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await oppointmentModel.deleteOppointment(id);
    res.status(200).json({ message: "Oppointment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete oppointment", error: error.message });
  }
};
