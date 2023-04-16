import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authenStyles.scss";
import { Login } from "./UserComponent/Login";
import { SignUp } from "./UserComponent/SignUp";
import { ResetPassword } from "./UserComponent/ResetPassword";
import { ConfirmSignup } from "./UserComponent/ConfirmSignup";
import { NavBarComponent } from "../HomePage/NavBarComponent";
import { AuthenticationPage } from "./UserComponent/AuthenticationPage";
import { FootContent } from "../HomePage/FootContent";
import { LoadingCustom } from "../../utils/LoadingCustom";

export const Authentication = () => {
  const [authenState, setAuthenState] = useState(1);
  const navigate = useNavigate();
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loading, setLoading] = useState(false);

  const renderCore = () => {
    switch (authenState) {
      case 1: {
        return <Login setLoading={setLoading} changeAuthen={changeAuthen} />;
      }
      case 2: {
        return <SignUp setLoading={setLoading} changeAuthen={changeAuthen} />;
      }
      case 3: {
        return (
          <ResetPassword setLoading={setLoading} changeAuthen={changeAuthen} />
        );
      }
      case 4: {
        return (
          <ConfirmSignup setLoading={setLoading} changeAuthen={changeAuthen} />
        );
      }
      default: {
        return <LoadingCustom isOpen={true} opacity={1} />;
      }
    }
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
            <AuthenticationPage
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
        alt="icon"
      />
      <div id="translator-container" style={{ display: "none" }}>
        <div className="rapid-header">
          <img src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/logo.svg" />
          <img
            alt="extention"
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
            alt="icon"
          />
          <span id="rapid-second-language">FRN</span>
        </div>
      </div>
    </div>
  );
};
