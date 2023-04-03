import React, { useState } from "react";
import TextRotationNoneIcon from '@mui/icons-material/TextRotationNone';


export const ConfirmSignup = (props) => {
  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const confirmCode = (e) => { 
    e.preventDefault();
    
  }
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
        Reset
      </button>
    </form>
  );
};
