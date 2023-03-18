import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../utils/loading";
import { FootContent } from "../HomePage/FootContent";
import { NavBarComponent } from "../HomePage/NavBarComponent";
import { Login } from "../UserComponent/Login";
import { ResetPassword } from "../UserComponent/ResetPassword";
import { SignUp } from "../UserComponent/SignUp";
import "./authenStyles.scss";

export const Authentication = () => {
  const [authenState, setAuthenState] = useState(1);
  const navigate = useNavigate();
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loading, setLoading] = useState(false);

  const renderCore = () => {
    return authenState === 1 ? (
      <Login changeAuthen={changeAuthen} />
    ) : authenState === 2 ? (
      <SignUp changeAuthen={changeAuthen} />
    ) : authenState === 3 ? (
      <ResetPassword changeAuthen={changeAuthen} />
    ) : (
      <Loading opacity={1} />
    );
  };
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

  return (
    <div className="header-container">
      <div id="root">
        <div id="page-container">
          <NavBarComponent />
          <div id="content-wrap" >
            {renderCore()}
            <FootContent />
          </div>
        </div>
      </div>
      <img
        id="translator-icon"
        src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/icon-128.png"
        style={{ display: "none" }}
      />
      <div id="translator-container" style={{ display: "none" }}>
        <div className="rapid-header">
          <img src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/logo.svg" />
          <img
            id="rapid-copy"
            src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/copy.svg"
          />
        </div>
        <div id="rapid-text-wrapper">
          <span />
        </div>
        <div className="rapid-footer">
          <span id="rapid-first-language">ENG</span>
          <img
            id="rapid-arrow-icon"
            src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/r-arrow.svg"
          />
          <span id="rapid-second-language">FRN</span>
        </div>
      </div>
    </div>
  );
};
