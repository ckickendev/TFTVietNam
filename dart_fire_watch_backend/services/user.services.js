const { Service } = require("../core");
const { User } = require("../models");
const { makeRandomNumber, makeRandomString } = require("../utils/function");
const { ServerException } = require("../exceptions");
const sendEmailHandler = require("../utils/sendEmailOptions");
const { emailTemplate } = require("../utils/emailTemplate");
const bcrypt = require("bcrypt");
class UserService extends Service {
  async getAllUser() {
    const users = await User.find({});
    return users;
  }

  async register(email, password) {
    try {
      const numberTokenGenerate = makeRandomNumber(6);
      const randomLink = process.env.ROOT_FRONTEND + "/confirm_register?link=" + makeRandomString(100) + "&access_token=" + numberTokenGenerate + "&email=" + email;
      const passwordEncrypt = await bcrypt.hash(password, 10);

      await sendEmailHandler({
        to: email,
        subject: "Please enter this code to confirm register account",
        html: emailTemplate(numberTokenGenerate, randomLink),
        GOOGLE_MAILER_CLIENT_ID: process.env.GOOGLE_MAILER_CLIENT_ID,
        GOOGLE_MAILER_CLIENT_SECRET: process.env.GOOGLE_MAILER_CLIENT_SECRET,
        GOOGLE_MAILER_REFRESH_TOKEN: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
      });
      const newUser = new User({
        username: email,
        password: passwordEncrypt,
        email: email,
        activate: false,
        activate_code: numberTokenGenerate,
      });
      
      newUser.save();
    } catch (e) {
      console.log(e);
      throw new ServerException("Error", e.message);
    }
  }

  async resetpassword(email) {
    const tokenGenerate = makeRandomString(10);
    const linkResetPassword =
      process.env.ROOT_BACKEND +
      "/auth/resetpasswordlink?token=" +
      tokenGenerate;
    try {
      await sendEmailHandler({
        to: email,
        subject: "Your link to reset your password",
        html: `<h1>Here is your link <a href="${linkResetPassword}" >Click here</a> </h1> `,
        GOOGLE_MAILER_CLIENT_ID: process.env.GOOGLE_MAILER_CLIENT_ID,
        GOOGLE_MAILER_CLIENT_SECRET: process.env.GOOGLE_MAILER_CLIENT_SECRET,
        GOOGLE_MAILER_REFRESH_TOKEN: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
      });
      const userUpdate = await User.findOne({ email: email });
      userUpdate.tokenResetPassword = tokenGenerate;
      // userUpdate.save();
    } catch (e) {
      throw new ServerException("Error", e.message);
    }ß
  }

  async confirmToken(token, email) {
    console.log(token, email);
    const user = await User.findOne({ email: email });
    console.log(user);
    if ((user.activate_code == token)) {
      user.activate = true;
      user.activate_code = "";
      await user.save();
      return true;
    }
    return false;
  }
}

module.exports = new UserService();
