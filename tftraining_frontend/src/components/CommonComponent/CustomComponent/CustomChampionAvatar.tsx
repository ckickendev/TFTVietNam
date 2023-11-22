import React, { useEffect, useState } from "react";
import { COLOR } from "../../constants";

export const CustomChampionAvatar = (props: { src: string, style?: any, height: string | number, width: string | number }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(props?.src)
  }, [props.src])

  return (
    <div style={{ width: props.width, height: props.height, ...props?.style }}>
      <img
        src={`../images/champions/${image}.avif`}
        height={props.height}
        width={props.width}
        alt="image"
      />
    </div>

  );
};
