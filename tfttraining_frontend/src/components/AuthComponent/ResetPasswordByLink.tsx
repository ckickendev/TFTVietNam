import React, { useEffect, useState } from "react";
import "./authenStyles.scss";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { validatePassword } from "../../utils/function";
import { LoadingCustom } from "../../utils/LoadingCustom";
import DialogCustom from "../../utils/DialogCustom";


export const ResetPasswordByLink = () => {
  const [loading, setLoading] = useState(true);
  const [loadingBackground, setLoadingBackground] = useState(true);
  const [error, setError] = useState("");
  const [errorLink, setErrorLink] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    async function confirmTokenAccess() {
      const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
      const queryParameters = new URLSearchParams(window.location.search);
      const access_token = queryParameters.get("token_access");
      try {
        if (access_token) {
          const res = await axios.post(
            `${ROOT_BACKEND}/auth/confirm-token-access`,
            { access_token }
          );
          if (res.data) {
            console.log(res);
            setLoadingBackground(false);
            setLoading(false);
          }
        }
      } catch (err) {
        setLoadingBackground(false);
        setLoading(true);
        setErrorLink(true);
      }
    }
    confirmTokenAccess();
  }, []);

  const handleChangePassword = async () => {
    setLoading(true);
    const validatePass = validatePassword(
      newPassword,
      "Your password not match with syntax, check again!"
    );
    if (!validatePass.isValid) {
      setError(validatePass.message);
      setLoading(false);
      return;
    }
    setError("");
    try {
      const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
      const queryParameters = new URLSearchParams(window.location.search);
      const access_token = queryParameters.get("token_access");
      const data = {
        access_token,
        new_password: newPassword,
      };
      if (access_token) {
        console.log("newPassword", newPassword);
        const res = await axios.post(
          `${ROOT_BACKEND}/auth/confirm-new-password`,
          data
        );
        if (res.data) {
          setError(res.data.message);
          setLoading(false);
        }
      }
    } catch (err: any) {
      setError(err?.response?.data?.error || err?.message);
      setLoading(false);
    }
    setLoading(false);
  };

  const closeDialog = () => {
    setErrorLink(false);
  };

  return (
    <>
      <LoadingCustom
        opacity={1}
        isOpen={loading}
        sx={loadingBackground ? { backgroundColor: "#444" } : undefined}
      />

      {errorLink && (
        <DialogCustom
          onClose={closeDialog}
          confirmHandler={closeDialog}
          cancelHandler={closeDialog}
          displayDisaggree={false}
          isOpen={errorLink}
          title="Your link is invalid or expired"
          content="Please check again your email again, if your email is valid, please send another change password request"
        />
      )}
      <div className="reset-password-link">
        <div className="main-bg">
          <div className="reset-password  d-flex justify-content-center align-items-center flex-column pt-3">
            <div className="col-md-6">
              <img src="./images/logo.png" alt="logo" className="col-md-12" />
            </div>
            <h4 className="text-center text-white mb-4 mt-4">
              Change Your Password
            </h4>
            <TextField
              className="input col-md-12"
              color="error"
              sx={{ backgroundColor: "white" }}
              placeholder="Enter your new password"
              size="small"
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <p className="text text-light mt-4">{error}</p>
            <Button
              variant="contained"
              color="success"
              className="col-md-12 mt-1"
              onClick={handleChangePassword}
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
