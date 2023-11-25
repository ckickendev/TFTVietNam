import axios from "axios";
import CONSTVALUE from "./const";

export const getHeadersToken = () => {
  const token = localStorage.getItem("access_token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const getAllChampionAPI = async () => {
  const champions = await axios.get(
    `${CONSTVALUE.ROOT_BACKEND}/champion/get-all`,
    { headers: getHeadersToken() }
  );
  return champions;
};

const getChampionByIdApi = async (id) => {
  console.log("asdasd", id);
  const data = await axios.get(
    `${CONSTVALUE.ROOT_BACKEND}/champion/find/${id}`,
    { headers: getHeadersToken() }
  );
  const champion = data.data.champion;

  const returnValue = {
    image: champion.avatar,
    bgimage: champion.bgimage,
    traits: champion.traits,
    name: champion.name,
    nameAPI: champion.name_api,
    skill: champion.skill,
    cost: champion.cost,
  };
  console.log("return", returnValue);
  return returnValue;
};

const getListTraisByChampionId = async (id) => {
  const data = await axios.get(
    `${CONSTVALUE.ROOT_BACKEND}/champion/getListTraits/${id}`,
    { headers: getHeadersToken() }
  );
  const traits = data.data.traits;
  return traits;
};

const getListTraisByChampionNameApi = async (nameApi) => {
  const data = await axios.get(
    `${CONSTVALUE.ROOT_BACKEND}/champion/getListTraitsByNameAI/${nameApi}`,
    { headers: getHeadersToken() }
  );
  const traits = data.data.traits;
  return traits;
}

const addChampionAPI = async (newChampion) => {
  const res = await axios.post(`${CONSTVALUE.ROOT_BACKEND}/champion/add`, {
    headers: getHeadersToken(),
    newChampion,
  });
  return res.data.newChampionData;
};

const deleteChampionById = async (id) => {
  const res = await axios.delete(`${CONSTVALUE.ROOT_BACKEND}/champion/delete`, {
    headers: getHeadersToken(),
    data: {
      idChampion: id,
    },
  });
  console.log(res.data);
  return res.data.dataDelete;
};

const editChampionAPI = async (data) => {
  const res = await axios.patch(`${CONSTVALUE.ROOT_BACKEND}/champion/edit`, {
    headers: getHeadersToken(),
    data: {
      editData: data,
    },
  });
  return res.data.responseData.modifiedCount;
};

const getChampionByNameApi = async(name) => {
  const data = await axios.get(
    `${CONSTVALUE.ROOT_BACKEND}/champion/getChampionByNameApi/${name}`,
    { headers: getHeadersToken() }
  );
  const champion = data.data.champion;

  const returnValue = {
    image: champion.avatar,
    bgimage: champion.bgimage,
    traits: champion.traits,
    name: champion.name,
    nameAPI: champion.name_api,
    skill: champion.skill,
    cost: champion.cost,
  };
  console.log("return", returnValue);
  return returnValue;
}

async function loadRankChampion() {
  
}

export {
  getAllChampionAPI,
  getChampionByNameApi,
  addChampionAPI,
  getChampionByIdApi,
  loadRankChampion,
  deleteChampionById,
  editChampionAPI,
  getListTraisByChampionId,
  getListTraisByChampionNameApi
};
