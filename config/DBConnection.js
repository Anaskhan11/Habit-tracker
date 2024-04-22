var mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "habittracker",
  port: "4000",
});

db.connect(function (err) {
  if (err) {
    console.log(err, "Error in database");
  } else {
    console.log("MySQL Database Connected Successfully");
  }
});
module.exports = db;
