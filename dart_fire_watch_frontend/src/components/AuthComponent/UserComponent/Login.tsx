import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { validateEmail, validatePassword } from "../../../utils/function";

export const Login = (props: any) => {
  const setLoading = props.setLoading;
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitLogin = async (e: any) => {
    e.preventDefault();
    try {
      if (
        !validateEmail(loginInfo.email).isValid ||
        !validatePassword(loginInfo.password).isValid
      ) {
        setError("Email and password is not match with syntax, check again");
        return;
      }
      setError("");
      setLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/login`, loginInfo);
      console.log("res 1 ne", res);
      if (res.data) {
        localStorage.setItem("access_token", res.data.data.access_token);
        setLoading(false);
        navigate("/home");
      }
      return;
    } catch (err: any) {
      console.log("res 2 ne", err);
      setLoading(false);
      setError(err?.response?.data?.error || err.message);
    }
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    console.log(e.target.value);
    setLoginInfo((loginInfo) => {
      return { ...loginInfo, [field]: e.target.value };
    });
  };

  return (
    <form action={`${ROOT_BACKEND}/auth/login`} method="post">
      <h3 className="legend">Login Here</h3>
      <div className="input">
        <EmailIcon color="action" />
        <input
          name="email"
          type="email"
          value={loginInfo.email}
          placeholder={"Enter your email"}
          onChange={(e) => changeValue(e, "email")}
        />
      </div>
      <div className="input">
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
      <button type="submit" onClick={submitLogin} className="btn submit">
        Login
      </button>
      <div onClick={() => props.changeAuthen(3)} className="bottom-text">
        Forgot Password?
      </div>
    </form>
  );
};
