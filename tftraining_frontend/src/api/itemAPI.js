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
  return res.data.dataDelete.deletedCount;
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

export { getAllItemsAPI, addItemAPI, deleteItemById, editItemAPI };
