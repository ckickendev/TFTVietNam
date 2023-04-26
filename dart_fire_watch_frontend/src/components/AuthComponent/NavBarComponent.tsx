import Button from "@mui/material/Button";
import "../HomePage/styles/NavBarComponent.scss";
import "../HomePage/styles/HomePageComponent.scss";
import authStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "../HomePage/NavBarComponent/DropdownItem";
import { NavBarAvatar } from "../HomePage/NavBarComponent/NavBarAvatar";
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
                    <a className="dropdown-item" href={`${ROOT_URL}`}>
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
};
