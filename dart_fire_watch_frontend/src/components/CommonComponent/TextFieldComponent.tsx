import { TextField } from "@mui/material";
import React from "react";

interface ITextFieldComponentProps {
  variant: "standard" | "filled" | "outlined" | undefined;
  value: string;
  onChange: any;
  textColor: string;
  color:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
  placeholder: string;
  sx?: object;
  textAlignInput?: string;
  type?: string
}
interface INumberFieldComponentProps {
  variant: "standard" | "filled" | "outlined" | undefined;
  value: number;
  onChange: any;
  textColor: string;
  color:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
  placeholder: string;
  sx?: object;
  textAlignInput?: string;
}


const TextFieldComponent = (props: ITextFieldComponentProps) => {
  return (
    <TextField
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={{ input: { color: props.textColor || "white", textAlign: "center"}, ...props.sx }}
      color={props.color}
      placeholder={props.placeholder}
    />
  );
};

const NumberFieldComponent = (props: INumberFieldComponentProps) => {
  return (
    <TextField
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={{ input: { color: props.textColor || "white", textAlign: "center"}, ...props.sx }}
      color={props.color}
      placeholder={props.placeholder}
      type="number"
    />
  );
}

export {TextFieldComponent, NumberFieldComponent}
