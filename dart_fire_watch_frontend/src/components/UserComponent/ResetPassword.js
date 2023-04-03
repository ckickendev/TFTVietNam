import axios from "axios";
import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
export const ResetPassword = (props) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [emailReset, setEmailReset] = useState("");
  const [error, setError] = useState("");
  const setLoading = props.setLoading;
  const submitReset = async (e) => {
    e.preventDefault();
    if (!emailReset) {
      setError("Email cannot empty");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/resetpassword`, {
        email: emailReset,
      });
      setError(res.message);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err?.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(err.message);
      }
    }
  };
  return (
    <form action={`${ROOT_BACKEND}/auth/login`} method="POST">
      <h3 class="legend last">Reset Password</h3>
      <p class="para-style">
        Enter your email address below and we'll send you an email with
        instructions.
      </p>
      <div class="input">
        <EmailIcon color="action" />
        <input
          type="email"
          placeholder="Enter your email here"
          name="email"
          required=""
          value={emailReset}
          onChange={(e) => setEmailReset(e.target.value)}
        />
      </div>
      <p>{error}</p>
      <button type="submit" onClick={submitReset} class="btn submit last-btn">
        Reset
      </button>
    </form>
  );
};