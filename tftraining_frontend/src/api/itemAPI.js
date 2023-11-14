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
    name: trait.name,
    property: trait.property,
  };
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

async function loadItemRank() {
  const response = await fetch(
    "https://api2.metatft.com/tft-stat-api/items?queue=1100&patch=current&days=2&rank=CHALLENGER,GRANDMASTER&permit_filter_adjustment=true"
  );
  const data = await response.json();
  const totalPrequent = data.games[0].count;
  const unitDataList = [];
  data.results.forEach((element) => {
    let frequency = 0;
    let avgCount = 0;
    let sumplus = 0;
    let summinus = 0;
    element.places.forEach((current, index) => {
      frequency += current;
      avgCount += current * (index + 1);
      if (index < 4) {
        sumplus += frequency * (index + 1);
      } else {
        summinus += frequency * (index + 1);
      }
    });
    const unitData = {
      name: element.itemName,
      frequency: frequency,
      winrate: (element.places[0] / frequency) * 100,
      percentage: (frequency / totalPrequent) * 100,
      avgCount: avgCount / frequency,
      avgChange: (sumplus - summinus) / totalPrequent,
    };
    unitDataList.push(unitData);
  });
  console.log("data", unitDataList);
}

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
  loadItemRank,
  addItemAPI,
  deleteItemById,
  editItemAPI,
};
