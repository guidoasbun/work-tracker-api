const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header("x-auth-token");

  //Check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
