const { Service } = require("../core");
const { Item } = require("../models");
const mongoose = require("mongoose");

class ItemService extends Service {
  getAllItems = async () => {
    const items = await Item.find({del_flag: 0});
    return items.map((item) => {
      return {
        _id: item._id,
        image: item.image,
        name: item.name,
        effect: item.effect,
      };
    });
  };

  addNewItem = async (data) => {
    const newItem = new Item({
      _id: new mongoose.Types.ObjectId(),
      image: data.image,
      name: data.name,
      effect: data.effect,
    });
    newItem.save();
    return newItem;
  };
  
  deleteItem = async (id) => {
    await Item.updateOne({ _id: id }, { del_flag: 1 });
    const returnItem = await Item.findById({ _id: id });
    return returnItem;
  };

  editItem = async (data) => {
    const { image, name, effect } = data;
    const findById = { _id: data._id };
    const updateData = { image, name, effect };
    const responseData = await Item.updateOne(findById, updateData);
    return responseData;
  };
}

module.exports = new ItemService();
