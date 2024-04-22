const db = require("../../config/DBConnection");

// create clinic

const createClinic = (name) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO clinic (clinic_name) VALUES(?)";
    db.query(query, [name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

// get clinic
const getClinic = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM clinic";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  createClinic,
  getClinic,
};
