import React, { useState } from "react";
import { SelectAdminOtp } from "./SelectAdminOtp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CollapseComponent from "./CollapseComponent";

const NavigationPanel = (props: any) => {
  const [collapseOtp, setCollapseOtp] = useState([false, false, false]);

  const selectHandler = (select: number) => {
    props.setOnStatus(select);
    setCollapseOtp((pre) => {
      const newCollapseMenu = [pre[0], pre[1], pre[2]];
      newCollapseMenu[select - 1] = !pre[select - 1];
      return newCollapseMenu;
    });
  };
  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-inner">
        <HeaderNavigation />
        <ul id="main-menu" className="main-menu" style={{}}>
          <SelectAdminOtp
            onClick={() => {
              selectHandler(1);
            }}
            setCollapseOtp={collapseOtp}
            aria-controls="select-admin-otp"
            aria-expanded={collapseOtp[0]}
            title="Champion"
            icon={<EmojiEventsIcon />}
          ></SelectAdminOtp>
          <CollapseComponent
            idCollapse="select-admin-otp"
            title="ALL CHAMPIONS"
            isOpen={collapseOtp[0]}
          />
          <CollapseComponent
            idCollapse="select-admin-otp"
            title="CREATE A CHAMPION"
            isOpen={collapseOtp[0]}
          />
          <SelectAdminOtp
            setOnStatus={() => props.setOnStatus(2)}
            title="Items"
            icon={<AddShoppingCartIcon />}
          />
          <SelectAdminOtp
            setOnStatus={() => props.setOnStatus(3)}
            title="Traits"
            icon={<ConnectWithoutContactIcon />}
          />
        </ul>
      </div>
    </div>
  );
};

const HeaderNavigation = () => {
  return (
    <header className="logo-env">
      <div className="logo">
        <a href="https://demo.neontheme.com/dashboard/main/">
          <img
            src="https://demo.neontheme.com/assets/images/logo@2x.png"
            width={120}
            alt=""
          />
        </a>
      </div>
      <div className="sidebar-collapse">
        <a href="#" className="sidebar-collapse-icon">
          <i className="entypo-menu" />
        </a>
      </div>
      <div className="sidebar-mobile-menu visible-xs">
        <a href="#" className="with-animation">
          <i className="entypo-menu" />
        </a>
      </div>
    </header>
  );
};

export default NavigationPanel;