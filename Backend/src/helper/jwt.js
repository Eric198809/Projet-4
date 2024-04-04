const jwt = require ("jsonwebtoken")

const encodeJWT= (payload)=>{
  return jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "2h" });
}

module.exports = encodeJWT;