import { Avatar } from "@mui/material";
import authStore from "../../../store/authStore";

export const NavBarAvatar = (props: any) => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_signup");
    authStore.setIsAuth(!authStore.getIsAuth());
    props.setAuthAvatar(false);
  };
  return (
    <div className="nav-item nav-avatar dropdown">
      <a
        id="basic-nav-dropdown"
        aria-expanded="true"
        className="dropdown-toggle nav-link"
        href="http://localhost:3000/"
      >
        <div style={{ display: "inline-block" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </a>
      <div data-bs-popper="static" className="dropdown-menu">
        <a
          className="dropdown-item"
          role="button"
          href="https://www.metatft.com/double-up-comps"
        />
        <a className="nav-link" href="http://localhost:3000/">
          Information
        </a>
        <hr className="dropdown-divider" />
        <a className="dropdown-item" role="button" href="#" />
        <div className="nav-link" onClick={handleLogout}>
          LogOut
        </div>
        <hr className="dropdown-divider" role="separator" />
        <a className="dropdown-item" role="button" href="#" />
        <a className="nav-link" href="#">
          PBE Comps
        </a>
      </div>
    </div>
  );
};