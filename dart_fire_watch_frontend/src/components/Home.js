import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../utils/loading";
import { HomePageComponent } from "./HomePage/HomePageComponent";

export const Home = () => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
          setUser(response.data.userInfo.email);
        })
        .catch((error) => {
          navigate("/auth");
        });
      setLoading(false);
    };

    getToken();
  }, []);

  return <div>{loading ? <Loading /> : <HomePageComponent />}</div>;
};
