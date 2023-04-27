const { Service } = require("../core");
const { Champion } = require("../models");

class ChampionService extends Service {
  getAllChampion = async () => {
    const champions = await Champion.find({});
    return champions.map((championElement) => {
      return {
        _id: championElement._id,
        avatar: championElement.avatar,
        name: championElement.name,
        cost: championElement.cost,
        skill: championElement.skill,
      };
    });
  };

  addNewChampion = async (data) => {
    const newChampion = new Champion({
      avatar: data.avatar,
      name: data.name,
      cost: data.cost,
      skill: data.skill,
    });
    newChampion.save();
    return newChampion;
  };
  deleteChampion = async (id) => {
    const dataDeleteChampion = Champion.deleteOne({ _id: id });
    return dataDeleteChampion;
  };

  editChampion = async (data) => {
    const { avatar, name, skill, cost } = data;
    const findById = { _id: data._id };
    const updateData = { avatar, name, skill, cost };
    const responseData = await Champion.updateOne(findById, updateData);
    return responseData;
  };
}

module.exports = new ChampionService();