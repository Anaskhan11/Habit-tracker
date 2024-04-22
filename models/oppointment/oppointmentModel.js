const db = require("../../config/DBConnection"); // Import your database configuration or connection setup

const createoppointment = async (
  patient_id,
  clinic_id,
  oppointment_Date,
  oppointment_time
) => {
  return new Promise((resolve, reject) => {
    const insertQuery =
      "INSERT INTO appointments (patient_id ,clinic_id ,oppointment_Date,oppointment_time) VALUES (?,?,?,?)";

    db.query(
      insertQuery,
      [patient_id, clinic_id, oppointment_Date, oppointment_time],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const selectQuery =
            "SELECT * FROM appointments WHERE oppointment_id = ?";
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

// get all oppointments
const getOppointments = async () => {
  return new Promise((resolve, reject) => {
    const selectQuery = `
SELECT opp.oppointment_id , opp.oppointment_Date , opp.oppointment_time , p.patient_name , c.clinic_name FROM appointments opp JOIN patients as p ON opp.patient_id = p.patient_id JOIN clinic as c ON opp.clinic_id = c.clinic_id`;
    db.query(selectQuery, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// get oppointment by id
const getOppointmentById = async (oppointment_id) => {
  return new Promise((resolve, reject) => {
    const selectQuery = "SELECT * FROM appointments WHERE oppointment_id = ?";
    db.query(selectQuery, [oppointment_id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0]);
      }
    });
  });
};

// update oppointment
const updateOppointment = async (
  oppointment_id,
  patient_id,
  clinic_id,
  oppointment_Date
) => {
  return new Promise((resolve, reject) => {
    const updateQuery =
      "UPDATE appointments SET patient_id = ?, clinic_id = ?, oppointment_Date = ? WHERE oppointment_id = ?";
    db.query(
      updateQuery,
      [patient_id, clinic_id, oppointment_Date, oppointment_id],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const selectQuery =
            "SELECT * FROM appointments WHERE oppointment_id = ?";
          db.query(selectQuery, [oppointment_id], (error, rows) => {
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

// delete oppointment
const deleteOppointment = async (oppointment_id) => {
  return new Promise((resolve, reject) => {
    const deleteQuery = "DELETE FROM appointments WHERE oppointment_id = ?";
    db.query(deleteQuery, [oppointment_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports = {
  createoppointment,
  getOppointments,
  getOppointmentById,
  updateOppointment,
  deleteOppointment,
};
