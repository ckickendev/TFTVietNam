const { Service } = require("../core");
const { Trait } = require("../models");

class TraitService extends Service {
  getAllTraits = async () => {
    const traits = await Trait.find({});
    return traits.map((trait) => {
      return {
        _id: trait._id,
        image: trait.image,
        name: trait.name,
        effect: trait.effect,
        unit_activate: trait.unit_activate,
      };
    });
  };

  addNewTrait = async (data) => {
    const newTrait = new Trait({
      image: data.image,
      name: data.name,
      effect: data.effect,
      unit_activate: data.unit_activate
    });
    newTrait.save();
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
}

module.exports = new TraitService();
