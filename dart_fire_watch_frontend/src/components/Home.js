import axios from "axios";
import React, { useEffect, useState } from "react";
import authStore from "../store/authStore";
import { HomePageComponent } from "./HomePage/HomePageComponent";
import { LoadingCustom } from "../utils/LoadingCustom";

export const Home = () => {
  // const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  useEffect(() => {
    const getToken = async () => {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${ROOT_BACKEND}/auth/whoAmI`, { headers })
        .then((response) => {
          authStore.setIsAuth(true);
          authStore.setWhoAmI(response.data.userInfo.email)
          // setUser(response.data.userInfo.email);
        })
        .catch((error) => {
          authStore.setIsAuth(false);
          authStore.setWhoAmI("")
        });
      setLoading(false);
    };

    getToken();
  },);

  return <div>{loading ? <LoadingCustom /> : <HomePageComponent />}</div>;
};
