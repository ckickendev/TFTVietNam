const express = require("express");
import { Controller } from "../core";
import { AdminMiddleware } from "../middlewares/auth.middleware";
import { championService } from "../services";

class ChampionController extends Controller {
  _rootPath = "/champion";
  _router = express.Router();
  constructor() {
    super();
    this.initController();
  }

  getAllChampion = async (req, res, next) => {
    try {
      const allChampion = await championService.getAllChampion();
      res.status(200).json(allChampion);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  initController() {
    this._router.get(
      `${this._rootPath}/getAll`,
      AdminMiddleware,
      this.getAllChampion
    );
  }
}

module.exports = ChampionController;
