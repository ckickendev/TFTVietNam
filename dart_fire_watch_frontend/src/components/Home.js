import axios from "axios";
import React, { useEffect, useState } from "react";
import authStore from "../store/authStore";
import { HomePageComponent } from "./HomePage/HomePageComponent";
import { LoadingCustom } from "../utils/LoadingCustom";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getToken = async () => {
      const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
      setLoading(true);
      const token = localStorage.getItem("access_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${ROOT_BACKEND}/auth/whoAmI`, { headers })
        .then((response) => {
          console.log("res", response);
          authStore.setIsAuth(true);
          authStore.setWhoAmI(response.data.userInfo.email)
          // setUser(response.data.userInfo.email);
        })
        .catch((error) => {
          console.log("res", false);

          authStore.setIsAuth(false);
          authStore.setWhoAmI("")
        });
      setLoading(false);
    };

    getToken();
  }, []);

  return <div>{loading ? <LoadingCustom /> : <HomePageComponent />}</div>;
};
