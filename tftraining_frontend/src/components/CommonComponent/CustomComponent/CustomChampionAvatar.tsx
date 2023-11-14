import React from "react";
import { COLOR } from "../../constants";

export const CustomChampionAvatar = (props: { src: string, style?: any, height: string | number, width: string | number }) => {
  return (
    <div style={{ width: props.width, height: props.height, ...props?.style }}>
      <img
        src={props?.src}

        height={props.height}
        width={props.width}
        alt="image"
      />
    </div>

  );
};
