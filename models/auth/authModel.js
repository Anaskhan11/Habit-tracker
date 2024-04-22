const db = require("../../config/DBConnection");

// create login model

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM auth WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  login,
};
