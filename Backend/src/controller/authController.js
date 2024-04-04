const validateLogin = require("../Validator/loginValidator");
const { findByEmail } = require("../model/userModel");
const { verifyPassword } = require("../helper/argonHelper");
const encodeJWT = require("../helper/jwt");

const login = async (req, res) => {
  const errors = validateLogin(req.body);
  console.log(errors);
  if (errors) {
    return res.status(401).send(errors);
  }
  const [user] = await findByEmail(req.body.email);
  if (!user) {
    return res.status(401).send("Invalid Credentials");
  }
  const passwordVerification = await verifyPassword(
    user.password,
    req.body.password
  );
  if (!passwordVerification) {
    return res.status(401).send("Invalid Credentials");
  }
  delete user.password;
  
  const token = encodeJWT(user);
  console.log(token);
  res.cookie("auth_token", token, { httpOnly: true, secure: false });
  res.status(200).json({user: user.prenom});
};

module.exports = login;
