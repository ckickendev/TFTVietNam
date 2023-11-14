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
                    Comps
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
                    <DropdownItem linkHref={`${ROOT_URL}/double-up-comps`}>
                      Double up
                    </DropdownItem>
                    <DropdownItem linkHref={`${ROOT_URL}/double-up-comps`}>
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
                    <div style={{ display: "inline-block" }}>
                      Stats
                      <span
                        className="NewHighlight"
                        style={{ marginRight: "-20px" }}
                      >
                        New!
                      </span>
                    </div>
                  </a>
                  <div
                    data-bs-popper="static"
                    className="dropdown-menu"
                    aria-labelledby="basic-nav-dropdown"
                  >
                    <DropdownItem>Items</DropdownItem>
                    <DropdownItem>Units</DropdownItem>
                    <DropdownItem>Traits</DropdownItem>
                    <DropdownItem>Auguments</DropdownItem>
                    <div className="dropdown-item">
                      <a
                        data-rr-ui-event-key="/early-comps"
                        className="nav-link"
                        href={`${ROOT_URL}/early-comps`}
                      >
                        <p>
                          Early Csomps<span className="NewHighlight">New!</span>
                        </p>
                        <img
                          src={`${ROOT_URL}/patreon_logo2.png`}
                          className="PatreonFeatureNav"
                          alt="Patreon Feature"
                        />
                      </a>
                    </div>
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
                    <div style={{ display: "inline-block" }}>Players</div>
                  </a>
                  <div
                    data-bs-popper="static"
                    className="dropdown-menu"
                    aria-labelledby="basic-nav-dropdown"
                  >
                    <DropdownItem title="Rising" />
                    <hr className="dropdown-divider" />
                    <DropdownItem>
                      <p>One Tricks</p>
                      <img
                        className="PatreonFeatureNav"
                        alt="Patreon Feature"
                      />
                    </DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>
                      <p>Hyper Roll One Tricks</p>
                      <img
                        className="PatreonFeatureNav"
                        alt="Patreon Feature"
                      />
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
                    <div style={{ display: "inline-block" }}>Tools</div>
                  </a>
                  <div
                    data-bs-popper="static"
                    className="dropdown-menu"
                    aria-labelledby="basic-nav-dropdown"
                  >
                    <DropdownItem>In-Game App</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Loaded Dice</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Tome of Traits</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Twitch Extension</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem> Win Chance</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Set 8.5 Update</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Vod Library</DropdownItem>
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
                <a
                  href="https://discord.com/invite/RqN3qPy"
                  id="DiscordNavBarImgContainer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Join Discord"
                    className="NavBarImg"
                    id="DiscordNavBarImg"
                    src="./images/discord_icon.png"
                  />
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

      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid rgb(17, 17, 17)",
          backgroundColor: "rgba(203, 180, 108, 0.7)",
          color: "rgb(34, 34, 34)",
          padding: "4px",
          fontWeight: 600,
        }}
      >
        Looking for comps to play on PBE? Take a look at our{" "}
        <a
          href={`${ROOT_URL}/new-set`}
          style={{ textDecoration: "underline", color: "rgb(34, 34, 34)" }}
        >
          Set 8.5 PBE Comps Tier List
        </a>
        , and check out the
        <a
          href={`${ROOT_URL}/new-set`}
          style={{ textDecoration: "underline", color: "rgb(34, 34, 34)" }}
        >
          new changes here
        </a>
      </div>
    </>
  );
});
