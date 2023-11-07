const { Service, ConsoleLogger } = require("../core");
const { Trait, Champion } = require("../models");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

class TraitService extends Service {
  getAllTraits = async () => {
    const traits = await Trait.find({del_flag: 0}).populate('champions');
    return traits;
  };

  addNewTrait = async (data) => {
    const champions = data.champions ? data.champions : [];
    const newTrait = new Trait({
      _id: new mongoose.Types.ObjectId(),
      image: data.image,
      name: data.name,
      effect: data.effect,
      unit_activate: data.unit_activate,
      champions: champions,
    });
    await newTrait.save();
    return newTrait;
  };

  deleteTrait = async (id) => {
    await Trait.updateOne({ _id: id }, { del_flag: 1 });
    const returnTrait = await Trait.findById({ _id: id });
    return returnTrait;
  };

  editTrait = async (data) => {
    const { image, name, effect, unit_activate } = data;
    console.log("ádasdsad", data);
    const findById = { _id: data._id };
    const updateData = { image, name, effect, unit_activate };
    const responseData = await Trait.updateOne(findById, updateData);
    return responseData;
  };

  editTraitChampion = async (data) => {
    const idTrait = data.idTrait;
    console.log("ákdaskjd", data);
    await Trait.findByIdAndUpdate(idTrait, {champions: []});
    const championIds = data.champions.map(async (champion) => {
      const championId = new ObjectId(champion._id);
      await Trait.findByIdAndUpdate(idTrait, {$push: {champions: championId}});
      return championId;
    });
    return championIds;
  };
}

module.exports = new TraitService();
