const { Service } = require("../core");
const { Trait, Champion } = require("../models");

class TraitService extends Service {
  getAllTraits = async () => {
    const traits = await Trait.find({});
    console.log("Log all traits", traits);
    return traits;
  };

  addNewTrait = async (data) => {
    const champions = data.champions ? data.champions : [];
    const newTrait = new Trait({
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
    const dataDeleteTrait = Trait.deleteOne({ _id: id });
    return dataDeleteTrait;
  };

  editTrait = async (data) => {
    const { image, name, effect, unit_activate } = data;
    const findById = { _id: data._id };
    const updateData = { image, name, effect, unit_activate };
    const responseData = await Trait.updateOne(findById, updateData);
    return responseData;
  };

  editTraitChampion = async (data) => {
    const idTrait = data.idTrait;
    let champions = [];
    console.log("id trait", idTrait);
    const traitEdit = await Trait.findById(idTrait);
    if (traitEdit.champions.length === 0) {
      champions = data.champions;
    } else {
      champions = [...traitEdit.champions, data.champions];
    }
    console.log("champions", champions);
    // champions.forEach(async (element) => {
    //   const elementEdit = await Champion.findById(element);
    //   if (elementEdit.traits.length === 0) {
    //     elementEdit.traits = idTrait;
    //   } else {
    //     elementEdit.traits.push(idTrait);
    //   }
    //   await elementEdit.save();
    // });
    const resData = await Trait.findByIdAndUpdate(idTrait, {
      $set: { champions: champions },
    });
    console.log("res data", resData);
    return resData;
  };
}

module.exports = new TraitService();
