const authModel = require("../../models/auth/authModel");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // const hashPassword = bcrypt.hashSync(password, 10);

  const token = jwt.sign({ email: email }, "HJSDHDSLDLSDJSL", {
    expiresIn: "1h",
  });

  try {
    const result = await authModel.login(email, password);
    if (result.length > 0) {
      res
        .status(200)
        .json({ message: "Login success", result: result, token: token });
    } else {
      res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
