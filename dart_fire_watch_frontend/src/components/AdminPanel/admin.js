import React, { useState } from "react";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import "./admin.scss";
import { ChampionAdmin } from "./ChampionAdmin";
import { ItemAdmin } from "./ItemAdmin";
import TraitAdmin from "./TraitAdmin.tsx";
import { NavBarComponent } from "../HomePage/NavBarComponent";

export const Admin = () => {
  const [onStatus, setOnStatus] = useState(0);
  const renderUIForRightSide = () => {
    switch (onStatus) {
      case 1:
        return <ChampionAdmin />;
      case 2:
        return <ItemAdmin />;
      case 3:
        return <TraitAdmin />;
      default:
        return <RightPanel />;
    }
  };

  return (
    <div className="header-container"> 
      <NavBarComponent />
      <div className="page-container-admin-page">
        <LeftPanel setOnStatus={setOnStatus} />
        {renderUIForRightSide()}
      </div>
    </div>
  );
};
