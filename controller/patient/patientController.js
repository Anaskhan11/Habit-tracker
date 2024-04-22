const patientModel = require("../../models/patient/patientModel");

// create patient
exports.createPatient = async (req, res) => {
  try {
    const { patient_name, contact_number, email } = req.body;
    const patientData = await patientModel.createPatient(
      patient_name,
      contact_number,
      email
    );
    res
      .status(201)
      .json({ message: "Patient created successfully", patient: patientData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create patient", error: error.message });
  }
};

// get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await patientModel.getPatients();
    res.status(200).json({ patients });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch patients", error: error.message });
  }
};

// get patient by id
exports.getPatientById = async (req, res) => {
  try {
    const patient_id = req.params.id;
    const patient = await patientModel.getPatientById(patient_id);
    res.status(200).json({ patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch patient", error: error.message });
  }
};

// update patient
exports.updatePatient = async (req, res) => {
  try {
    const { patient_id, patient_name, contact_number, email } = req.body;
    const updatedPatient = await patientModel.updatePatient(
      patient_id,
      patient_name,
      contact_number,
      email
    );
    res
      .status(200)
      .json({
        message: "Patient updated successfully",
        patient: updatedPatient,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update patient", error: error.message });
  }
};

// delete patient
exports.deletePatient = async (req, res) => {
  try {
    const patient_id = req.params.id;
    await patientModel.deletePatient(patient_id);
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete patient", error: error.message });
  }
};
