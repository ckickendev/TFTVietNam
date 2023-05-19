const { Service } = require("../core");
const { Item } = require("../models");

class ItemService extends Service {
  getAllItems = async () => {
    const items = await Item.find({});
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
      image: data.image,
      name: data.name,
      effect: data.effect,
    });
    newItem.save();
    return newItem;
  };
  
  deleteItem = async (id) => {
    const dataDeleteItem = Item.deleteOne({ _id: id });
    return dataDeleteItem;
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
