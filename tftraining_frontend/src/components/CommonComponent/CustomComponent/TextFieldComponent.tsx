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
  type?: string;
  label?: string;
  multiline?: number,
  style?: object;

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
  const multiline = props?.multiline ? true : false;
  const rows = props?.multiline ? props?.multiline : 0;
  return (
    <TextField
      label={props?.label}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={{
        input: {
          height: 40,
          padding: 0,
          color: props.textColor || "white",
          textAlign: "center",
          fontFamily: "Poppins,Backup,Verdana,sans-serif",
          fontSize: "small",
          fontWeight: 300,
        },
        ...props.sx,
      }}
      multiline={multiline}
      rows={rows}
      InputProps={{ sx: { height: 40 } }}
      color={props.color}
      placeholder={props.placeholder}
      style={props?.style}
    />
  );
};

const NumberFieldComponent = (props: INumberFieldComponentProps) => {
  return (
    <TextField
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      sx={{
        input: { color: props.textColor || "white", textAlign: "center" },
        ...props.sx,
      }}
      color={props.color}
      placeholder={props.placeholder}
      type="number"
    />
  );
};

export { TextFieldComponent, NumberFieldComponent };
