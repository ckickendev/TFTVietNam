const express = require("express");
const { Controller } = require("../core");
const { AdminMiddleware } = require("../middlewares/auth.middleware");
const { championService } = require("../services");

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
      res.status(200).json({
        data: allChampion,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  addNewChampion = async (req, res, next) => {
    const newChampion = req.body;
    console.log(newChampion);
    try {
      await championService.addNewChampion();
      res.status(200).json({
        data: allChampion,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };

  initController() {
    this._router.get(
      `${this._rootPath}/get-all`,
      AdminMiddleware,
      this.getAllChampion
    );
    this._router.post(
      `${this._rootPath}/get-all`,
      AdminMiddleware,
      this.addNewChampion
    );
  }
}

module.exports = ChampionController;
