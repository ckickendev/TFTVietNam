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
        allChampions: allChampion,
      });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  addNewChampion = async (req, res, next) => {
    const newChampion = req.body.newChampion;
    try {
      const newChampionData = await championService.addNewChampion(newChampion);
      console.log("new champion data", newChampionData);
      res.status(200).json({
        message: "Add new champion !",
        newChampionData: newChampionData,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };

  deleteChampion = async (req, res, next) => {
    const id = req.body.idChampion;
    try {
      const dataDelete = await championService.deleteChampion(id);
      console.log("dataDelete", dataDelete);
      res.status(200).json({
        message: "Delete champion success!",
        dataDelete: dataDelete,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };

  editChampion = async (req, res, nex) => {
    try {
      const editData = req.body.data.editData;
      const responseData = await championService.editChampion(editData);
      res.status(200).json({
        message: "Edit champion success!",
        responseData: responseData,
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
      `${this._rootPath}/add`,
      AdminMiddleware,
      this.addNewChampion
    );
    this._router.delete(
      `${this._rootPath}/delete`,
      AdminMiddleware,
      this.deleteChampion
    );
    this._router.patch(
      `${this._rootPath}/edit`,
      AdminMiddleware,
      this.editChampion
    );
  }
}

module.exports = ChampionController;