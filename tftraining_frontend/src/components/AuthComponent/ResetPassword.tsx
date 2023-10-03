import axios from "axios";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import loadingStore from "../../store/loadingStore";

export const ResetPassword = (props: any) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [emailReset, setEmailReset] = useState("");
  const [error, setError] = useState("");
  const submitReset = async (e: any) => {
    e.preventDefault();
    if (!emailReset) {
      setError("Email cannot empty");
      return;
    }
    try {
      loadingStore.setIsLoading(true);
      const res = await axios.post(`${ROOT_BACKEND}/auth/resetpassword`, {
        email: emailReset,
      });
      setError(res.data.message);
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      loadingStore.setIsLoading(false);

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
