import {
  Avatar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import authStore from "../../../store/authStore";
import React from "react";
import { COLOR } from "../../constants";

export const NavBarAvatar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_signup");
    authStore.setIsAuth(!authStore.getIsAuth());
    props.setAuthAvatar(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      value: "Admin",
      link: "admin",
      click: handleLogout
    },
    {
      value: "Account",
      link: "account",
    },
    {
      value: "Dashboard",
      link: "dashboard",
    },
    {
      value: "Logout",
      link: "logout",
    },
  ];
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            sx={{ width: 200 }}
            key={setting.value}
            onClick={handleCloseUserMenu}
          >
            <Link
              sx={{ textDecoration: "none", color: COLOR.GREEN }}
              href={`${process.env.REACT_APP_ROOT_FRONTEND}/${setting.link}`}
              variant="body2"
              onClick={setting.click ?? setting.click}
            >
              {setting.value}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
