import axios from "axios";
import { ROOT_BACKEND } from "./const";

const getHeadersToken = () => {
  const token = localStorage.getItem("access_token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const getAllItemsAPI = async () => {
  console.log("get header token", getHeadersToken());
  const items = await axios.get(`${ROOT_BACKEND}/item/get-all`, {
    headers: getHeadersToken(),
  });
  return items;
};

const getItemByIdAPI = async (id) => {
  const data = await axios.get(`${ROOT_BACKEND}/item/find/${id}`, {
    headers: getHeadersToken(),
  });
  console.log(data);
  const trait = data.data.item[0];
  return {
    effect: trait.effect,
    image: trait.image,
    name_api: trait.name_api,
    name: trait.name,
    property: trait.property,
  };
};

const getItemByNameAPI = async(nameAPI)=> {
  const data = await axios.get(`${ROOT_BACKEND}/item/getItemByItemNameAPI/${nameAPI}`, {
    headers: getHeadersToken(),
  });
  const item = data.data.item[0];
  return {
    effect: item?.effect,
    image: item?.image,
    name_api: item?.name_api,
    name: item?.name,
    property: item?.property,
  };
}

const addItemAPI = async (newItem) => {
  const res = await axios.post(`${ROOT_BACKEND}/item/add`, {
    headers: getHeadersToken(),
    newItem,
  });
  return res.data.newItemData;
};

const deleteItemById = async (id) => {
  const res = await axios.delete(`${ROOT_BACKEND}/item/delete`, {
    headers: getHeadersToken(),
    data: {
      idItem: id,
    },
  });
  return res.data;
};


const editItemAPI = async (data) => {
  const res = await axios.patch(`${ROOT_BACKEND}/item/edit`, {
    headers: getHeadersToken(),
    data: {
      editData: data,
    },
  });
  return res.data.responseData.modifiedCount;
};

export {
  getAllItemsAPI,
  getItemByIdAPI,
  getItemByNameAPI,
  addItemAPI,
  deleteItemById,
  editItemAPI,
};
