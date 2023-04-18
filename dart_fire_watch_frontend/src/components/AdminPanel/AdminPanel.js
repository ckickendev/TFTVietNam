import React, { useState } from "react";
import { LeftPanel } from "./LeftPanel.tsx";
import { RightPanel } from "./RightPanel.js";
import "./admin.scss";
import { ItemAdmin } from "./ItemAdmin.js";
import TraitAdmin from "./TraitAdmin.tsx";
import { NavBarComponent } from "../HomePage/NavBarComponent.js";
import { ChampionAdmin } from "./ChampionAdmin/ChampionAdmin.tsx";

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
