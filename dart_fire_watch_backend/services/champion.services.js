const { Service } = require("../core");
const { Champion } = require("../models");

class ChampionService extends Service {
    getAllChampion = async () => {
        const champions = await Champion.find({});
        return champions;
    }

}

module.exports = new ChampionService();

