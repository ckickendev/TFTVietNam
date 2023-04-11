import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DialogCustom from "../../../utils/DialogCustom";
import { LoadingCustom } from "../../../utils/LoadingCustom";

export const ConfirmSignUpByLink = () => {
  const [loading, setLoading] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [title, setTittle] = useState();
  const [content, setContent] = useState();


  const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;

  useEffect(() => {
    async function handleConfirm() {
      const queryParameters = new URLSearchParams(window.location.search)
      const access_token = queryParameters.get("access_token");
      const email = queryParameters.get("email");
      const loginInfo = {
        token: access_token,
        user_authen: email,
      };
      try {
        if (access_token && email) {
          const res = await axios.post(
            `${ROOT_BACKEND}/auth/confirmSignup`,
            loginInfo
          );
          console.log(res);
          if(res.data) {
            setTittle("Your account is register successfully");
            setContent("You can login right now, you will redirect to login in some minutes...")
            setLoading(true);
            setIsConfirm(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    handleConfirm();
  }, []);

  return (
    <>
      {loading || <LoadingCustom opacity={1} />}
      {isConfirm || (
        <DialogCustom
          isOpen={true}
          title={title}
          content={content}
        />
      )}
    </>
  );
};
