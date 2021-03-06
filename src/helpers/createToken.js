const jwt = require("jsonwebtoken");
const secret = process.env.JWT_KEY;

const createToken = (userData) => {
  const token = jwt.sign(
    {
      userId: userData._id,
      fullName: userData.fullName, 
      email: userData.email,
      role: userData.role
    },
    secret,
    {
      expiresIn: "1h",
    }
  );
  return token;
};
module.exports = createToken;