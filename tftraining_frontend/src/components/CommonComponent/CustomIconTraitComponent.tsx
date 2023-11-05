import React from "react";
import { COLOR } from "../constants";

export const CustomIconTraitComponent = (props: {
  src: string;
  width: number | string;
  height: number | string;
}) => {
  return (
    <div style={{height: props.height}} >
      <img
        src={props?.src}
        style={{ background: COLOR.BLACK_BACKGROUND, color: "#cfcfcf", borderRadius: 50 }}
        width={props?.width}
        height={props?.height}
      />
    </div>

  );
};
