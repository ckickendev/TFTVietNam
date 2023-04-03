const express = require("express");
const bcrypt = require("bcrypt");
const { Controller, ConsoleLogger } = require("../core");
const {
  NotFoundException,
  BadRequestException,
  ServerException,
} = require("../exceptions");
const { User } = require("../models");
const userServices = require("../services/user.services");
const authServices = require("../services/auth.services");
const AuthMiddleware = require("../middlewares/auth.middleware");

class AuthController extends Controller {
  _rootPath = "/auth";
  _router = express.Router();
  constructor() {
    super();
    this.initController();
  }

  async login(req, res, next) {
    try {
      const { email, _id } = req.user;
      const payload = {
        id: _id,
        email,
      };
      const token = await authServices.generateToken(payload);
      const refreshToken = await authServices.generateRefreshToken(payload);
      ConsoleLogger.info(token);
      return res.json({
        status: 200,
        message: "Login Success",
        data: {
          access_token: token,
          refresh_token: refreshToken,
          user: payload,
        },
      });
    } catch (err) {
      next(new ServerException(err.message));
    }
  }

  async register(req, res, next) {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      await userServices.register(email, password);
      res.json({
        status: 200,
        message: "Create Success",
        user: email
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async WhoAmI(req, res, next) {
    const userInfo = req.userInfo;
    try {
      return res.json({
        status: 200,
        message: "success",
        userInfo: userInfo,
      });
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  }

  async validateBeforeLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new NotFoundException("User not found");
      }
      const isPasswordTrue = bcrypt.compare(password, user.password);
      if (!isPasswordTrue) {
        throw new BadRequestException(
          "Password not matching!",
          "Password not matching!"
        );
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async validateBeforeRegister(req, res, next) {
    let errorMessage = "Some Error is occurs";
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (user) {
        errorMessage = "User exist";
        throw ServerException("User exist");
      }
      next();
    } catch (err) {
      res.status(500).json({ error: errorMessage });
    }
  }

  resetPass = async (req, res, next) => {
    const email = req.body.email;
    await userServices.resetpassword(email);
    return res.json({
      status: 200,
      message: "Email sent, check your email ",
    });
  };

  resetPasswordLink = async (req, res, next) => {
    console.log(req.query.token);
  };

  initController() {
    this._router.post(
      `${this._rootPath}/login`,
      this.validateBeforeLogin,
      this.login
    );
    this._router.post(
      `${this._rootPath}/register`,
      this.validateBeforeRegister,
      this.register
    );
    this._router.get(`${this._rootPath}/whoAmI`, AuthMiddleware, this.WhoAmI);
    this._router.get(
      `${this._rootPath}/resetpasswordlink`,
      this.resetPasswordLink
    );
    this._router.post(`${this._rootPath}/resetpassword`, this.resetPass);
  }
}

module.exports = AuthController;
