import React from "react";
import "./authentication_style.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LockResetIcon from "@mui/icons-material/LockReset";
import { LoadingCustom } from "../../../utils/LoadingCustom";

export const AuthenticationPage = (props: any) => {
  const authenState = props.authenState;
  const loading = props.loading;
  return (
    <>
      <LoadingCustom opacity={0.4} isOpen={loading} />
      <div className="test">
        <div className="main-bg">
          <h1>Welcome to TFT</h1>
          <div className="sub-main">
            <div className="container_sub-main">
              <div className="image-style"></div>
              <div className="vertical-tab">
                <div className="section_authen_state">
                  <div  id="option1" />
                  <label
                    htmlFor="option1"
                    className={`icon_left_authen ${
                      authenState === 1 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(1)}
                  >
                    <AccountCircleIcon
                      className="icon_title_matertial"
                      color={`${authenState === 1 ? "warning" : "success"}`}
                    />
                    <p>Login</p>
                  </label>
                </div>
                <div className="section_authen_state">
                  <div  id="option2" />
                  <label
                    htmlFor="option2"
                    className={`icon_left_authen ${
                      authenState === 2 || authenState === 4 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(2)}
                  >
                    <BorderColorIcon
                      className="icon_title_matertial"
                      color={`${authenState === 2 ? "warning" : "success"}`}
                    />
                    <p>Register</p>
                  </label>
                </div>
                <div className="section_authen_state">
                  <div  id="option3" />
                  <label
                    htmlFor="option3"
                    className={`icon_left_authen ${
                      authenState === 3 || authenState === 5 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(3)}
                  >
                    <LockResetIcon
                      className="icon_title_matertial"
                      color={`${authenState === 3 ? "warning" : "success"}`}
                    />
                    <p>Forgot Password?</p>
                  </label>
                </div>
              </div>
              <div className="authen_main_space">{props.renderCore()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
