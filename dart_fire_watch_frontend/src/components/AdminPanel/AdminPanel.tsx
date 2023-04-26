import { useState } from "react";
import "./admin.scss";
import NavigationPanel from "./NavigationPanel";
import { DefaultPanel } from "./DefaultPanel";
import { ItemAdmin } from "./ItemAdmin";
import TraitAdmin from "./TraitAdmin";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import { ChampionAdmin } from "./ChampionAdmin/ChampionAdmin";
import { observer } from "mobx-react";
import { LoadingCustom } from "../../utils/LoadingCustom";

export const Admin = observer(({ loadingStore }: any) => {
  const [onStatus, setOnStatus] = useState(0);
  const renderUIForAdminSide = () => {
    switch (onStatus) {
      case 1:
        return <ChampionAdmin />;
      case 2:
        return <ItemAdmin />;
      case 3:
        return <TraitAdmin />;
      default:
        return <DefaultPanel />;
    }
  };

  return (
    <>
      <div className="header-container">
        {loadingStore.getIsLoading() && (
          <LoadingCustom isOpen={loadingStore.getIsLoading()} />
        )}
        <NavBarComponent />
        <div className="page-container-admin-page">
          <NavigationPanel setOnStatus={setOnStatus} />
          {renderUIForAdminSide()}
        </div>
      </div>
    </>
  );
});
