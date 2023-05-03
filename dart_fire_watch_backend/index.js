const {
  UserController,
  AuthController,
  ChampionController,
  ItemController,
} = require("./controllers");
const AppServer = require("./appServer");

const app = new AppServer([
  new UserController(),
  new AuthController(),
  new ChampionController(),
  new ItemController(),
]);

app.startListening();
