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
  return traits;
  
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
  return res.data.dataDelete.deletedCount;
};

const editTraitAPI = async (data) => {
  const res = await axios.patch(`${ROOT_BACKEND}/trait/edit`, {
    headers: getHeadersToken(),
    data: {
      editData: data,
    },
  });
  return res.data.responseData.modifiedCount;
};

const changeTraitChampion = async (idTrait, champions ) => {
  const res = await axios.post(`${ROOT_BACKEND}/trait/edit-trait-champion`, {
    headers: getHeadersToken(),
    data: {
      idTrait,
      champions
    },
  })
  return res
}

export { getAllTraitsAPI, addTraitAPI, deleteTraitById, editTraitAPI, changeTraitChampion };
