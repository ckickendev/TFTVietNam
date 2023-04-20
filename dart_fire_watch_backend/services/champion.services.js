const { Service } = require("../core");
const { Champion } = require("../models");

class ChampionService extends Service {
  getAllChampion = async () => {
    const champions = await Champion.find({});
    return champions;
  };

  addNewChampion = async (data) => {
    const newChampion = new Champion({
        avatar: data.avatar,
        name: data.name,
        cost: data.cost,
        skill: data.skill,
    })
    newChampion.save();  
  };
}

module.exports = new ChampionService();
