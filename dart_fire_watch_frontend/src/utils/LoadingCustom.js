import React from "react";
import "./loading.scss";
import { Backdrop, CircularProgress } from "@mui/material";

export const LoadingCustom = (props) => {
  const opacity = props.opacity || 1;
  return (
    <Backdrop
      sx={{ ...props.sx, color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isOpen}
      onClick={props.handleClick}
      style={{ opacity: opacity }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
