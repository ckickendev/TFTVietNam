import React, { useState } from "react";
import TextRotationNoneIcon from "@mui/icons-material/TextRotationNone";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const ConfirmSignup = (props) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const confirmCode = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        setError("Token must not be empty");
        return;
      }
      setError("");
      setLoading(true);
      const loginInfo = {
        token,
        user_authen: localStorage.getItem('user_signup'),
      };
      const res = await axios.post(
        `${ROOT_BACKEND}/auth/confirmSignup`,
        loginInfo
      );
      console.log(res); 
      // localStorage.setItem("access_token", res.data.data.access_token);
      setLoading(false);
      // navigate("/home");
    } catch (err) {
      setLoading(false);
      if (err?.response?.data?.error) {
        setError(err?.response?.data?.error);
      } else {
        setError(err?.message);
      }
    }
  };
  return (
    <form action={`${ROOT_BACKEND}/auth/confirm_signin`} method="POST">
      <h3 class="legend last">Enter your code</h3>
      <p class="para-style">
        Please check your email and enter your code you recieved
      </p>
      <div class="input">
        <TextRotationNoneIcon color="action" />
        <input
          type="email"
          placeholder="Enter your code here"
          name="email"
          required=""
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <p>{error}</p>
      <button type="submit" onClick={confirmCode} class="btn submit last-btn">
        Confirm
      </button>
    </form>
  );
};
