import { Avatar } from "@mui/material";
import React from "react";

export const NavBarAvatar = () => {
  return (
    <div className="nav-item nav-avatar dropdown">
      <a
        id="basic-nav-dropdown"
        aria-expanded="true"
        className="dropdown-toggle nav-link"
        tabIndex={0}
      >
        <div style={{ display: "inline-block" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </a>
      <div
        data-bs-popper="static"
        className="dropdown-menu"
        aria-labelledby="basic-nav-dropdown"
      >
        <a
          data-rr-ui-dropdown-item
          className="dropdown-item"
          role="button"
          tabIndex={0}
          href="https://www.metatft.com/#"
        />
        <a
          data-rr-ui-event-key="/hyper-roll-comps"
          className="nav-link"
          href="https://www.metatft.com/hyper-roll-comps"
        >
          Information
        </a>
        <hr className="dropdown-divider" role="separator" />
        <a
          className="dropdown-item"
          role="button"
          tabIndex={0}
          href="https://www.metatft.com/#"
        />
        <a className="nav-link" href="https://www.metatft.com/double-up-comps">
          LogOut
        </a>
        <hr className="dropdown-divider" role="separator" />
        <a
          className="dropdown-item"
          role="button"
          tabIndex={0}
          href="https://www.metatft.com/#"
        />
        <a className="nav-link" href="https://www.metatft.com/pbe-comps">
          PBE Comps
        </a>
      </div>
    </div>
  );
};
