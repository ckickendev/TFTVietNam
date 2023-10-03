import { TextField, Typography } from "@mui/material";
import React from "react";

interface ITextComponentProps {
  sx?: object;
  color?: string;
  text?: string;
  children?: any;
  display?: any;
}

const TextComponent = (props: ITextComponentProps) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontFamily: 'Poppins,Backup,Verdana,sans-serif',
        fontSize: 'small',
        fontWeight: 300,
        ...props.sx,
      }}
      display={props.display}
      color={props.color}
    >
      {props.children}
    </Typography>
  );
};

export { TextComponent };
