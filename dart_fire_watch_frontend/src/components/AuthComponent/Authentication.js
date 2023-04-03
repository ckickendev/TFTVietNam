import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../utils/loading";
import { FootContent } from "../HomePage/FootContent";
import { NavBarComponent } from "../HomePage/NavBarComponent";
import { ConfirmSignup } from "../UserComponent/ConfirmSignup";
import { Login } from "../UserComponent/Login";
import { ResetPassword } from "../UserComponent/ResetPassword";
import { SignUp } from "../UserComponent/SignUp";
import { AuthenticationContainer } from "../UserComponent/AuthenticationContainer";
import "./authenStyles.scss";

export const Authentication = () => {
  const [authenState, setAuthenState] = useState(1);
  const navigate = useNavigate();
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loading, setLoading] = useState(false);

  const renderCore = () => {
    return authenState === 1 ? (
      <Login setLoading={setLoading} changeAuthen={changeAuthen} />
    ) : authenState === 2 ? (
      // <SignUp setLoading={setLoading} changeAuthen={changeAuthen} />
      <ConfirmSignup setLoading={setLoading} changeAuthen={changeAuthen} />

    ) : authenState === 3 ? (
      <ResetPassword setLoading={setLoading} changeAuthen={changeAuthen} />
    ) : authenState === 4 ? (
      <ConfirmSignup setLoading={setLoading} changeAuthen={changeAuthen} />
    ) : (
      <Loading opacity={1} />
    );
  };
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
          <div id="content-wrap">
            <AuthenticationContainer
              loading={loading}
              changeAuthen={changeAuthen}
              authenState={authenState}
              renderCore={renderCore}
            />
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
