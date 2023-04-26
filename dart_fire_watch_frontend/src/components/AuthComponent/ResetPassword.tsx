import axios from "axios";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
export const ResetPassword = (props: any) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [emailReset, setEmailReset] = useState("");
  const [error, setError] = useState("");
  const setLoading = props.setLoading;
  const submitReset = async (e: any) => {
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
      setError(res.data.message);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err?.response?.data?.error || err.message);
    }
  };
  return (
    <form action={`${ROOT_BACKEND}/auth/login`} method="POST">
      <h3 className="legend last">Reset Password</h3>
      <p className="para-style">
        Enter your email address below and we'll send you an email with
        instructions.
      </p>
      <div className="input">
        <EmailIcon color="action" />
        <input
          type="email"
          placeholder="Enter your email here"
          name="email"
          required={true}
          value={emailReset}
          onChange={(e) => setEmailReset(e.target.value)}
        />
      </div>
      <p className="text-success"> {error}</p>
      <button
        type="submit"
        onClick={submitReset}
        className="btn submit last-btn"
      >
        Reset
      </button>
    </form>
  );
};
