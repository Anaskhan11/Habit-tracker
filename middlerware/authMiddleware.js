var jwt = require("jsonwebtoken");

exports.createToken = function (user) {
  var accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      roleid: user.roleid,
    },
    "HJSDHDSLDLSDJSL",
    {
      expiresIn: "1hr",
    }
  );

  return accessToken;
};
