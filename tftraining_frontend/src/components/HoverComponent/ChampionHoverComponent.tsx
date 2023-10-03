import { Box, Divider } from "@mui/material";
import { useState } from "react";
import "./ChampionHoverComponent.scss"

export const ChampionHoverComponent = (props: any) => {
  const { champion } = props;
  const width = props.widthTrigger || 50;
  const height = props.heightTrigger || 50;

  const [isHovering, setIsHovering] = useState(true);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(true);
  };
  return (
    <Box sx={{ width: width, height: height }}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ width: "100%", position: "relative" }}
      >
        <img src={champion.imgLink} width={width} height={height} />
        {isHovering && (
          <HoverComponent left={width + 10} traits={champion.traits} champion={champion.name} />
        )}
      </div>
    </Box>
  );
};

const HoverComponent = (props: any) => {
  const { left, bottom, traits, champion } = props;
  return (
    <Box
      style={{ position: "absolute", bottom: "-10px", left: left }}
      sx={{
        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.3)",
        background: "#222222",
        padding: "10px"
      }}
      className="box-hover-component"
    >
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: 600,
          textAlign: "center"
        }}
      >
        {champion}
      </p>
      <Divider sx={{background: 'white'}} />
      {traits.map((trait: any) => {
        return (
          <div className="d-flex" style={{width: 150,justifyContent: 'center', alignItems: 'center', }}>
            <img style={{ width: 30, height: 30 }} src={trait.image} />
            <p
              style={{
                display: "inline-block",
                fontSize: 14,
                color: "white",
                fontWeight: 300,
                float: "left",
                margin: "0px 3px 0px"
              }}
            >
              {trait.name}
            </p>
          </div>
        );
      })}
    </Box>
  );
};
