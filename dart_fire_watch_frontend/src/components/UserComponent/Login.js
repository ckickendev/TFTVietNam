import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

export const Login = (props) => {
  const setLoading = props.setLoading;
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      if (!loginInfo.email || !loginInfo.password) {
        setError("Email and password must not be null");
        return;
      }
      setError("");
      setLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/login`, loginInfo);
      localStorage.setItem("access_token", res.data.data.access_token);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setLoading(false);
      if (err?.response?.data?.error) {
        setError(err?.response?.data?.error);
      } else {
        setError(err?.message);
      }
    }
  };
  const changeValue = (e, field) => {
    console.log(e.target.value);
    setLoginInfo((loginInfo) => {
      return { ...loginInfo, [field]: e.target.value };
    });
  };

  return (
    <form action={`${ROOT_BACKEND}/auth/login`} method="post">
      <h3 class="legend">Login Here</h3>
      <div class="input">
        <EmailIcon color="action" />
        <input
          name="email"
          type="email"
          value={loginInfo.email}
          placeholder={"Enter your email"}
          onChange={(e) => changeValue(e, "email")}
        />
      </div>
      <div class="input">
        <KeyIcon color="action" />
        <input
          name="password"
          type="password"
          value={loginInfo.password}
          placeholder={"Enter your password"}
          onChange={(e) => changeValue(e, "password")}
        />
      </div>
      <p className="text text-danger">{error}</p>
      <button type="submit" onClick={submitLogin} class="btn submit">
        Login
      </button>
      <div onClick={() => props.changeAuthen(3)} class="bottom-text">
        Forgot Password?
      </div>
    </form>
  );
};
