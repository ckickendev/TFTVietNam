import axios from "axios";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

export const SignUp = (props) => {
  const setLoading = props.setLoading;
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState("");
  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    if (!loginInfo.email || !loginInfo.password || !loginInfo.rePassword) {
      setError("Email and password must not be null");
      return;
    }
    if (loginInfo.password !== loginInfo.rePassword) {
      setError("Re-password must be match with password");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/register`, loginInfo);
      setError(res.data.message);
      setLoading(false);
      localStorage.setItem("user_signup", res.data.user);
      props.changeAuthen(4);
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data?.error || err?.message);
    }
  };
  const changeValue = (e, field) => {
    console.log(e.target.value);
    setLoginInfo((loginInfo) => {
      return { ...loginInfo, [field]: e.target.value };
    });
  };
  return (
    <form action={`${ROOT_BACKEND}/auth/signup`} method="POST">
      <h3 className="legend">Register Here</h3>
      <div className="mb-3">
        <div className="input">
          <EmailIcon color="action" />

          <input
            type="text"
            placeholder="Enter your email"
            name="name"
            required=""
            value={loginInfo.email}
            onChange={(e) => changeValue(e, "email")}
          />
        </div>
      </div>
      <div className="input">
        <KeyIcon color="action" />

        <input
          type="password"
          placeholder="Password"
          name="password"
          required=""
          value={loginInfo.password}
          onChange={(e) => changeValue(e, "password")}
        />
      </div>
      <div className="input">
        <KeyIcon color="action" />

        <input
          type="password"
          placeholder="Confirm your password"
          name="password"
          required=""
          value={loginInfo.rePassword}
          onChange={(e) => changeValue(e, "rePassword")}
        />
      </div>
      <p className="text-danger">{error}</p>

      <button type="submit" onClick={submitLogin} className="btn submit">
        Register
      </button>
    </form>
  );
};
