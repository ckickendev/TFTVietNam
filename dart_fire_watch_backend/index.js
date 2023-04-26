const {
  UserController,
  AuthController,
  ChampionController,
} = require("./controllers");
const AppServer = require("./appServer");

const app = new AppServer([
  new UserController(),
  new AuthController(),
  new ChampionController(),
]);

app.startListening();
