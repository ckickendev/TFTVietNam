import { useState } from "react";
import "./admin.scss";
import NavigationPanel from "./NavigationPanel";
import { DefaultPanel } from "./DefaultPanel";
import { ItemAdmin } from "./ItemAdmin";
import TraitAdmin from "./TraitAdmin";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import { ChampionAdmin } from "./ChampionAdmin/ChampionAdmin";
import { LoadingCustom } from "../../utils/LoadingCustom";
import { observer } from "mobx-react";
import authStore from "../../store/authStore";

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
        <NavBarComponent authStore={authStore} />
        <div className="page-container-admin-page">
          <NavigationPanel setOnStatus={setOnStatus} />
          {renderUIForAdminSide()}
        </div>
      </div>
    </>
  );
});
