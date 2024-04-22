const clinicModel = require("../../models/clinic/clinicModel");

// create clinic
exports.createClinic = async (req, res) => {
  try {
    const { clinic_name } = req.body;
    console.log(clinic_name);
    const result = await clinicModel.createClinic(clinic_name);
    const data = {
      clinic_name: clinic_name,
    };
    res.status(201).json({ message: "clinic created Sucessfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get clinix
exports.getClinic = async (req, res) => {
  try {
    const result = await clinicModel.getClinic();
    res.status(200).json({ clinics: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
