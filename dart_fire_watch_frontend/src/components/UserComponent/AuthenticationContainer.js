import React from "react";
import "./test.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LockResetIcon from "@mui/icons-material/LockReset";
import { Loading } from "../../utils/loading";

export const AuthenticationContainer = (props) => {
  const authenState = props.authenState;
  const loading = props.loading;
  return (
    <>
      {loading && <Loading opacity={0.4} />}
      <div className="test">
        <div className="main-bg">
          <h1>Welcome to TFT</h1>
          <div className="sub-main">
            <div className="container_sub-main">
              <div className="image-style"></div>
              <div className="vertical-tab">
                <div className="section_authen_state">
                  <div name="sections" id="option1" checked="" />
                  <label
                    for="option1"
                    className={`icon_left_authen ${
                      authenState === 1 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(1)}
                  >
                    <AccountCircleIcon
                      className="icon_title_matertial"
                      color={`${authenState === 1 ? "light" : "success"}`}
                    />
                    <p>Login</p>
                  </label>
                </div>
                <div className="section_authen_state">
                  <div name="sections" id="option2" />
                  <label
                    for="option2"
                    className={`icon_left_authen ${
                      authenState === 2 || authenState === 4 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(2)}
                  >
                    <BorderColorIcon
                      className="icon_title_matertial"
                      color={`${authenState === 2 ? "light" : "success"}`}
                    />
                    <p>Register</p>
                  </label>
                </div>
                <div className="section_authen_state">
                  <div name="sections" id="option3" />
                  <label
                    for="option3"
                    className={`icon_left_authen ${
                      authenState === 3 || authenState === 5 ? "section_authen_active" : ""
                    } `}
                    onClick={() => props.changeAuthen(3)}
                  >
                    <LockResetIcon
                      className="icon_title_matertial"
                      color={`${authenState === 3 ? "light" : "success"}`}
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
