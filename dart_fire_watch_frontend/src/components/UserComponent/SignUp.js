import axios from "axios";
import React, { useState } from "react";
import { Loading } from "../../utils/loading";

export const SignUp = (props) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "", rePassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    if (!loginInfo.email || !loginInfo.password || !loginInfo.rePassword) {
      setError("Email and password must not be null");
      return;
    }
    if(loginInfo.password !== loginInfo.rePassword) {
      setError("Re-password must be match with password");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/register`, loginInfo);
      setError(res.data.message);
      setLoading(false);
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
    <div className="container" style={{ minHeight: "100vh" }}>
      {loading && <Loading opacity={0.4} />}
      <form action={`${ROOT_BACKEND}/auth/signup`} method="POST">
        <h1>Sign Up</h1>
        <button onClick={() => props.changeAuthen(1)}>Login</button>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={loginInfo.email}
            onChange={(e) => changeValue(e, "email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={loginInfo.password}
            onChange={(e) => changeValue(e, "password")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={loginInfo.rePassword}
            onChange={(e) => changeValue(e, "rePassword")}
          />
        </div>
        <p>{error}</p>
        <button type="submit" onClick={submitLogin} className="btn btn-primary">
          Submit
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.changeAuthen(3)}
        >
          Fotget Pass
        </button>
      </form>
    </div>
  );
};
