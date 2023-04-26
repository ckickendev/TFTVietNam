import React from "react";
import Button from "@mui/material/Button";
import "./NavBarComponent.scss";
import "./HomePageComponent.scss";
import authStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "./NavBarComponent/DropdownItem";
import { NavBarAvatar } from "./NavBarComponent/NavBarAvatar";
import SupportIcon from "@mui/icons-material/Support";

export const NavBarComponent = () => {
  const navigate = useNavigate();
  const ROOT_URL = process.env.REACT_APP_ROOT_FRONTEND;

  const onLogin = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className="navbar_component_wrapper">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar_container container">
            <a href={ROOT_URL} className="navbar-brand">
              <img
                src="./images/logoforapp.png"
                width={50}
                height={50}
                alt="MetaTFT Logo"
              />
            </a>
            <h2 className="logo-container">
              <a className="LogoText" href={`${ROOT_URL}`}>
                MetaTFT
              </a>
            </h2>
            <button
              aria-controls="basic-navbar-nav"
              type="button"
              aria-label="Toggle navigation"
              className="navbar-toggler collapsed"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="basic-navbar-nav">
              <div className="ml-auto navbar-nav nav-pills">
                <div className="nav-item">
                  <a
                    data-rr-ui-event-key="/comps"
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
                    className="dropdown-toggle nav-link"
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
                    <hr className="dropdown-divider" />
                    <DropdownItem linkHref={`${ROOT_URL}/double-up-comps`}>
                      Double up
                    </DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem linkHref={`${ROOT_URL}` / +"double-up-comps"}>
                      PBE Comps
                    </DropdownItem>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    id="basic-nav-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
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
                    <hr className="dropdown-divider" />
                    <DropdownItem>Units</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Traits</DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>Auguments</DropdownItem>
                    <hr className="dropdown-divider" />
                    <a
                      data-rr-ui-dropdown-item
                      className="dropdown-item"
                      role="button"
                      tabIndex={0}
                      href={`${ROOT_URL}`}
                    />
                    <a
                      data-rr-ui-event-key="/early-comps"
                      className="nav-link"
                      href={`${ROOT_URL}/early-comps`}
                    >
                      Early Csomps<span className="NewHighlight">New!</span>
                      <img
                        src={`${ROOT_URL}/patreon_logo2.png`}
                        className="PatreonFeatureNav"
                        alt="Patreon Feature"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 90"
                        height={20}
                        style={{ marginLeft: "-10px", marginRight: "-10px" }}
                      >
                        <path
                          d="M145 46.6694C145.069 46.6694 123.238 34.3485 123.174 33.9862C122.68 31.3674 122.058 27.043 119.047 24.8059C116.455 22.8974 98.9582 15.0217 98.9237 14.9396C95.7022 10.1739 92.8474 5.18023 90.3828 0C88.0424 1.72403 86.1388 3.95217 84.8195 6.51185C83.5002 9.07153 82.8007 11.8941 82.775 14.7608C74.1802 15.9664 66.1134 19.541 59.5173 25.0668C76.6237 21.2305 81.5507 24.7673 81.5507 24.7673C75.9501 25.7437 70.5534 27.6213 65.5798 30.3237C58.288 34.2471 55 38.958 55 38.958C55 38.958 71.5584 34.3244 84.266 38.8323C78.3401 39.6505 72.8316 42.286 68.5321 46.3601C94.8705 49.5539 107.859 71.9246 113.325 90C115.334 57.8499 98.978 45.6402 98.978 45.6402C103.727 45.9736 109.701 49.5877 113.522 54.9654C125.173 53.6801 131.66 57.1735 131.606 57.1735C131.478 57.1735 137.905 55.2408 142.438 53.197C142.048 52.622 140.409 50.6265 139.475 49.5104C139.604 49.5201 143.188 49.3123 145 46.6694ZM108.62 32.44C108.876 32.3772 114.584 30.8069 116.213 31.4109C117.694 31.9568 117.723 36.0831 117.723 36.0831C117.723 36.0831 114.342 36.5469 108.62 32.44Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    id="basic-nav-dropdown"
                    aria-expanded="false"
                    role="button"
                    className="dropdown-toggle nav-link"
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
                      One Tricks
                      <img
                        className="PatreonFeatureNav"
                        alt="Patreon Feature"
                      />
                    </DropdownItem>
                    <hr className="dropdown-divider" />
                    <DropdownItem>
                      Hyper Roll One Tricks
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
                    className="dropdown-toggle nav-link"
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
                  <a href={`${ROOT_URL}/download`}>
                    <Button variant="contained" color="success" size="small">
                      Download App
                    </Button>
                  </a>
                </div>
              </div>
              <div className="IconNavContainer">
                <a
                  id="PatreonNavBarImgContainer"
                  href="`${ROOT_URL}`/icons/patreon"
                >
                  <SupportIcon color="success" />
                </a>
                <a
                  href="https://discord.com/invite/RqN3qPy"
                  id="DiscordNavBarImgContainer"
                  target="_blank"
                >
                  <img
                    alt="Join Discord"
                    className="NavBarImg"
                    id="DiscordNavBarImg"
                    src="./images/discord_icon.png"
                  />
                </a>
                {authStore.getIsAuth() ? (
                  <NavBarAvatar />
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
          href="`${ROOT_URL}`/pbe-comps"
          style={{ textDecoration: "underline", color: "rgb(34, 34, 34)" }}
        >
          Set 8.5 PBE Comps Tier List
        </a>
        , and check out the
        <a
          href="`${ROOT_URL}`/new-set"
          style={{ textDecoration: "underline", color: "rgb(34, 34, 34)" }}
        >
          new changes here
        </a>
      </div>
    </>
  );
};
