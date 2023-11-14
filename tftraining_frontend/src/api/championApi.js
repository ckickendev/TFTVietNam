import axios from "axios";
import CONSTVALUE from "./const";

const getHeadersToken = () => {
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
    skill: champion.skill,
    cost: champion.cost
  }
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

async function loadRankChampion() {
  const response = await fetch(
    "https://api2.metatft.com/tft-stat-api/units?queue=1100&patch=current&days=2&rank=CHALLENGER&permit_filter_adjustment=true"
  );
  const data = await response.json();
  const totalPrequent = data.games[0].count;
  const unitDataList = [];
  data.results.forEach((element) => {
    let frequency = 0;
    let avgCount = 0;
    element.places.forEach((current, index) => {
      frequency += current;
      avgCount += current * (index + 1);
    });
    const unitData = {
      name: element.unit,
      frequency: frequency,
      winrate: (element.places[0] / frequency) * 100,
      percentage: (frequency / totalPrequent) * 100,
      avgCount: avgCount / frequency,
    };
    unitDataList.push(unitData);
  });
  console.log("data", unitDataList);
}
export {
  getAllChampionAPI,
  addChampionAPI,
  getChampionByIdApi,
  loadRankChampion,
  deleteChampionById,
  editChampionAPI,
  getListTraisByChampionId,
};
