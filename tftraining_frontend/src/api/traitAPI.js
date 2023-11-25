import axios from "axios";
import { ROOT_BACKEND } from "./const";

const getHeadersToken = () => {
  const token = localStorage.getItem("access_token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const getAllTraitsAPI = async () => {
  console.log("get header token", getHeadersToken());
  const traits = await axios.get(`${ROOT_BACKEND}/trait/get-all`, {
    headers: getHeadersToken(),
  });
  console.log("traits", traits);
  return traits;
};

const getTraitByIdAPI = async (id) => {
  const response = await axios.get(`${ROOT_BACKEND}/trait/find/${id}`, {
    headers: getHeadersToken(),
  });
  const dataOut = response.data.trait[0];
  const traitData = {
    name: dataOut.name,
    name_api: dataOut.name_api,
    image: dataOut.image,
    effect: dataOut.effect,
    unit_activate: dataOut.unit_activate
  }
  return traitData;
};

const addTraitAPI = async (newTrait) => {
  console.log("Log new trait in api", newTrait);
  const res = await axios.post(`${ROOT_BACKEND}/trait/add`, {
    headers: getHeadersToken(),
    newTrait,
  });
  return res.data.newTraitData;
};

const deleteTraitById = async (id) => {
  const res = await axios.delete(`${ROOT_BACKEND}/trait/delete`, {
    headers: getHeadersToken(),
    data: {
      idTrait: id,
    },
  });
  return res.data.dataDelete;
};

const editTraitAPI = async (data) => {
  console.log("asdasd");
  const res = await axios.patch(`${ROOT_BACKEND}/trait/edit`, {
    headers: getHeadersToken(),
    data: {
      editData: data,
    },
  });
  return res.data.responseData.modifiedCount;
};

const changeTraitChampion = async (idTrait, champions) => {
  const res = await axios.post(`${ROOT_BACKEND}/trait/edit-trait-champion`, {
    headers: getHeadersToken(),
    data: {
      idTrait,
      champions,
    },
  });
  return res;
};



async function getTraitRank() {
  const response = await fetch(
    "https://api2.metatft.com/tft-stat-api/traits?queue=1100&patch=current&days=2&rank=CHALLENGER,GRANDMASTER&permit_filter_adjustment=true"
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
      name: element.trait,
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
  getAllTraitsAPI,
  getTraitByIdAPI,
  getTraitRank,
  addTraitAPI,
  deleteTraitById,
  editTraitAPI,
  changeTraitChampion,
};
