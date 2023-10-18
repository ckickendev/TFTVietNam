import { SelectAdminOtp } from "./SelectAdminOtp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Box, List, ListItemButton, ListItemText, colors } from "@mui/material";
import { useState } from "react";
import { COLOR } from "../constants";

const NavigationPanel = (props: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (select: number) => {
    setSelectedIndex(select);
  };
  const selectedListItem = {
    color: "white",
    "&.Mui-selected": {
      backgroundColor: COLOR.BLACK,
    },
    "&.Mui-focusVisible": {
      backgroundColor: COLOR.UNDER_BLACK,
    },
    ":hover": {
      backgroundColor: "#2e8b57",
    },
  };
  return (
    <div className="sidebar-menu col-md-4">
      <div className="sidebar-menu-inner">
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "#303641" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 1}
              sx={selectedListItem}
              onClick={(event) => {
                handleListItemClick(1);
                props.setOnStatus(1);
              }}
            >
              <EmojiEventsIcon />
              <ListItemText primary="Champion" />
            </ListItemButton>
            <ListItemButton
              sx={selectedListItem}
              selected={selectedIndex === 2}
              onClick={(event) => {
                handleListItemClick(2);
                props.setOnStatus(2);
              }}
            >
              <AddShoppingCartIcon />
              <ListItemText primary="Items" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              sx={selectedListItem}
              onClick={(event) => {
                handleListItemClick(3);
                props.setOnStatus(3);
              }}
            >
              <AddShoppingCartIcon />
              <ListItemText primary="Traits" />
            </ListItemButton>
          </List>
        </Box>
      </div>
    </div>
  );
};

export default NavigationPanel;
