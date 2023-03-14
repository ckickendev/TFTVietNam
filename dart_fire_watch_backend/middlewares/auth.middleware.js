const jwt = require("jsonwebtoken");
const { ConsoleLogger } = require("../core");
require("dotenv").config();
const { ForbiddenException, NotFoundException } = require("../exceptions");
const { User } = require("../models");

async function AuthMiddleware(req, res, next) {
  try {
    const tokenClient = req.headers["authorization"].split(" ")[1];
    const validToken = jwt.verify(tokenClient, "SECRET_KEY", {
      algorithms: ["HS256"],
    });
    const checkingUser = await User.find({ email: validToken.email });
    if (!checkingUser) {
      return next(new NotFoundException("User not found!"));
    }
    req.userInfo = validToken;
    next();
  } catch (error) {
    res.status(403).send({ error: error.message || "Invalid Token" })
  }
}

module.exports = AuthMiddleware;
