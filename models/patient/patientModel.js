const db = require("../../config/DBConnection"); // Import your database configuration or connection setup

const createPatient = async (patient_name, contact_number, email) => {
  return new Promise((resolve, reject) => {
    const insertQuery =
      "INSERT INTO patients (patient_name, contact_number, email) VALUES (?,?,?)";

    db.query(
      insertQuery,
      [patient_name, contact_number, email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const selectQuery = "SELECT * FROM patients WHERE patient_id = ?";
          db.query(selectQuery, [result.insertId], (error, rows) => {
            if (error) {
              reject(error);
            } else {
              resolve(rows[0]);
            }
          });
        }
      }
    );
  });
};

// get all patients
const getPatients = async () => {
  return new Promise((resolve, reject) => {
    const selectQuery = "SELECT * FROM patients";
    db.query(selectQuery, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// get patient by id
const getPatientById = async (patient_id) => {
  return new Promise((resolve, reject) => {
    const selectQuery = "SELECT * FROM patients WHERE patient_id = ?";
    db.query(selectQuery, [patient_id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0]);
      }
    });
  });
};

// update patient
const updatePatient = async (
  patient_id,
  patient_name,
  contact_number,
  email
) => {
  return new Promise((resolve, reject) => {
    const updateQuery =
      "UPDATE patients SET patient_name = ?, contact_number = ?, email = ? WHERE patient_id = ?";
    db.query(
      updateQuery,
      [patient_name, contact_number, email, patient_id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

// delete patient
const deletePatient = async (patient_id) => {
  return new Promise((resolve, reject) => {
    const deleteQuery = "DELETE FROM patients WHERE patient_id = ?";
    db.query(deleteQuery, [patient_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
