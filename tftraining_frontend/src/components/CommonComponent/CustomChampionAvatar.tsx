import React from "react";
import { COLOR } from "../constants";

export const CustomChampionAvatar = (props: { src: string, style?: any }) => {
  return (
    <img
      src={props?.src}
      style={{...props?.style }}
      width={80}
      height={80}
      alt="image"
    />
  );
};
