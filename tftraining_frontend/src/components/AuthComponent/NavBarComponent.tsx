import Button from "@mui/material/Button";
import "../HomePage/styles/NavBarComponent.scss";
import "../HomePage/styles/HomePageComponent.scss";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "../HomePage/NavBarComponent/DropdownItem";
import { NavBarAvatar } from "../HomePage/NavBarComponent/NavBarAvatar";
import SupportIcon from "@mui/icons-material/Support";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { COLOR } from "../constants";
import { IconComponent } from "../CommonComponent/CustomComponent/IconComponent";

export const NavBarComponent = observer(({ authStore }: any) => {
  const navigate = useNavigate();
  const [authAvatar, setAuthAvatar] = useState(authStore.getIsAuth());
  const ROOT_URL = process.env.REACT_APP_ROOT_FRONTEND;
  const onLogin = () => {
    navigate("/auth");
  };

  useEffect(() => {
    const getToken = async () => {
      const ROOT_BACKEND = process.env.REACT_APP_ROOT_BACKEND;
      const token = localStorage.getItem("access_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${ROOT_BACKEND}/auth/whoAmI`, { headers })
        .then((response) => {
          console.log("res who am i", response.data);
          authStore.setIsAuth(true);
          setAuthAvatar(true);
          authStore.setWhoAmI(response.data.userInfo.email);
          authStore.setIsAdmin(response.data.userInfo.role);
        })
        .catch((error) => {
          authStore.setIsAuth(false);
          setAuthAvatar(false);
          authStore.setWhoAmI("");
          authStore.setIsAdmin(0);
        });
    };

    getToken();
  }, [authStore]);
  return (
    <>
      <div className="navbar_component_wrapper">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar_container container">
            <a href={ROOT_URL} className="navbar-brand">
              <IconComponent />
            </a>
            <h2 className="logo-container">
              <a className="LogoText" style={{color: COLOR.WHITE}} href={`${ROOT_URL}`}>
                TFT Training
              </a>
            </h2>
            <button
              aria-controls="basic-navbar-nav"
              type="button"
              className="navbar-toggler collapsed"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="basic-navbar-nav">
              <div className="ml-auto navbar-nav nav-pills">
                <div className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href={`${ROOT_URL}/comps`}
                  >
                    Teams fight
                  </a>
                </div>
                <div className="nav-item dropdown">
                  <a
                    id="basic-nav-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="nav-link"
                    tabIndex={0}
                    href={`${ROOT_URL}`}
                  >
                    <div style={{ display: "inline-block" }}>Game Modes</div>
                  </a>
                  <div
                    data-bs-popper="static"
                    className="dropdown-menu"
                    aria-labelledby="basic-nav-dropdown"
                  >
                    <DropdownItem linkHref={`${ROOT_URL}`}>
                      Hyper Roll
                    </DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}`}>
                      Double up
                    </DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}`}>
                      PBE Comps
                    </DropdownItem>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    id="basic-nav-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="nav-link"
                    tabIndex={0}
                    href={`${ROOT_URL}`}
                  >
                    <div style={{ display: "inline-block", marginRight: '10px' }}>
                      Data
                    </div>
                  </a>
                  <div
                    data-bs-popper="static"
                    className="dropdown-menu"
                    aria-labelledby="basic-nav-dropdown"
                  >
                    <DropdownItem linkHref={`${ROOT_URL}/items`}>Items</DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}/units`}>Units</DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}/traits`}>Traits</DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}/auguments`}>Auguments</DropdownItem>
                  </div>
                </div>
              </div>
              <div id="DownloadButtonNavContainer">
                <div className="DownloadButtonNavContainer">
                  <a href={`${ROOT_URL}/chessboard`}>
                    <Button variant="contained" color="success" size="small">
                      Start with simulator
                    </Button>
                  </a>
                </div>
              </div>
              <div className="IconNavContainer">
                <a
                  id="PatreonNavBarImgContainer"
                  href={`${ROOT_URL}/icons/patreon`}
                >
                  <SupportIcon color="success" />
                </a>
                {authAvatar ? (
                  <NavBarAvatar setAuthAvatar={setAuthAvatar} />
                ) : (
                  <div onClick={onLogin} className="login_space">
                    <Button variant="contained" color="success">
                      Login
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
});
