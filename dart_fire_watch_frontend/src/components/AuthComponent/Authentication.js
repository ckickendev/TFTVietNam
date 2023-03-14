import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../utils/loading";
import { Login } from "../UserComponent/Login";
import { ResetPassword } from "../UserComponent/ResetPassword";
import { SignUp } from "../UserComponent/SignUp";

export const Authentication = () => {
  const [authenState, setAuthenState] = useState(1);
  const navigate = useNavigate();
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getToken = async () => {
      setLoading(true);
      const token = localStorage.getItem("access_token");
      // if(!token) {
      //   setLoading(false);
      //   return;
      // }
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${ROOT_BACKEND}/auth/whoAmI`, { headers })
        .then((response) => {
          if (response.data) {
            navigate("/home");
          }
        })
        .catch((error) => {
          navigate("/auth");
        });
      setLoading(false);
    };
    getToken();
  }, []);
  const changeAuthen = (authenNumber) => {
    setAuthenState(authenNumber);
  };
  return authenState === 1 ? (
    <Login changeAuthen={changeAuthen} />
  ) : authenState === 2 ? (
    <SignUp changeAuthen={changeAuthen} />
  ) : authenState === 3 ?
    <ResetPassword changeAuthen={changeAuthen} />
    : <Loading opacity={1} />

};
