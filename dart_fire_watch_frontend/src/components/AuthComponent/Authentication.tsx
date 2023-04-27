import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authenStyles.scss";
import { NavBarComponent } from "./NavBarComponent";
import { FootContent } from "../HomePage/FootContent";
import { LoadingCustom } from "../../utils/LoadingCustom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { ResetPassword } from "./ResetPassword";
import { ConfirmSignup } from "./ConfirmSignup";
import { AuthenticationPage } from "./AuthenticationPage";
import { observer } from "mobx-react";
import authStore from "../../store/authStore";

export const Authentication = observer(({ loadingStore }: any) => {
  const [authenState, setAuthenState] = useState(1);
  const navigate = useNavigate();
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;

  const renderCore = () => {
    switch (authenState) {
      case 1: {
        return <Login changeAuthen={changeAuthen} />;
      }
      case 2: {
        return <SignUp changeAuthen={changeAuthen} />;
      }
      case 3: {
        return <ResetPassword changeAuthen={changeAuthen} />;
      }
      case 4: {
        return <ConfirmSignup changeAuthen={changeAuthen} />;
      }
      default: {
        return <LoadingCustom isOpen={true} opacity={1} />;
      }
    }
  };
  useEffect(() => {
    const getToken = async () => {
      loadingStore.setIsLoading(true);
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
      loadingStore.setIsLoading(false);
    };
    getToken();
  }, []);
  const changeAuthen = (authenNumber: number) => {
    setAuthenState(authenNumber);
  };

  return (
    <div className="header-container">
      {loadingStore.getIsLoading() && (
        <LoadingCustom isOpen={loadingStore.getIsLoading()} />
      )}
      <div id="root">
        <div id="page-container">
          <NavBarComponent authStore={authStore}  />
          <div id="content-wrap">
            <AuthenticationPage
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
});
