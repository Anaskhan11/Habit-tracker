// libraries
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// Routes
const clinicRoutes = require("./routes/clinicRoutes/clinicRoutes");
const patientRoutes = require("./routes/patient/patientRoutes");
const appointmentRoutes = require("./routes/oppointment/oppointmentRoutes");
const authRoutes = require("./routes/auth/authRoutes");

dotenv.config({ path: "./config/Config.env" });

// Create express instance
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(cookieParser());

app.use(
  session({
    secret: "HJSDHDSLDLSDJSL",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Routes
app.use("/api/clinic", clinicRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/oppointment", appointmentRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
