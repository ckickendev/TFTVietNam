import { useEffect, useState } from "react";
import "./admin.scss";
import NavigationPanel from "./NavigationPanel";
import { DefaultPanel } from "./DefaultPanel";
import { ItemAdmin } from "./ItemAdmin/ItemAdmin";
import TraitAdmin from "./TraitAdmin";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import { ChampionAdmin } from "./ChampionAdmin/ChampionAdmin";
import { LoadingCustom } from "../../utils/LoadingCustom";
import { observer } from "mobx-react";
import { AccessForbidden } from "../ErrorPage/AccessForbidden";
import axios from "axios";
import { ROOT_BACKEND } from "../../api/const";

export const Admin = observer(({ loadingStore, authStore }: any) => {
  useEffect(() => {
    const getToken = async () => {
      try {
        loadingStore.setIsLoading(true);
        authStore.setIsAdmin(true);
        const token = localStorage.getItem("access_token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const resData = await axios.get(`${ROOT_BACKEND}/auth/whoAmI`, {
          headers,
        });
        if (resData.status === 200) {
          authStore.setIsAdmin(resData.data.userInfo.role);
        }
        loadingStore.setIsLoading(false);
      } catch (err) {
        authStore.setIsAdmin(0);
      }
    };
    getToken();
  }, [ROOT_BACKEND, loadingStore]);
  console.log("get authStore.getwhoamI", authStore.getIsAdmin());
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

  const changeStatus = (navigate: number) => {
    console.log("navigate", navigate);
    setOnStatus(navigate);
  };

  return (
    <>
      {authStore.getIsAdmin() ? (
        <div className="header-container">
          {loadingStore.getIsLoading() && (
            <LoadingCustom isOpen={loadingStore.getIsLoading()} />
          )}
          <NavBarComponent authStore={authStore} />
          <div className="page-container-admin-page">
            <NavigationPanel setOnStatus={changeStatus} />
            {renderUIForAdminSide()}
          </div>
        </div>
      ) : (
        <AccessForbidden />
      )}
    </>
  );
});
