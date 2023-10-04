import { SelectAdminOtp } from "./SelectAdminOtp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const NavigationPanel = (props: any) => {

  const selectHandler = (select: number) => {
    props.setOnStatus(select);
  };
  return (
    <div className="sidebar-menu col-md-4">
      <div className="sidebar-menu-inner">
        <ul id="main-menu" className="main-menu" style={{}}>
          <SelectAdminOtp
            onClick={() => {
              selectHandler(1);
            }}
            title="Champion"
            icon={<EmojiEventsIcon />}
          ></SelectAdminOtp>
          <SelectAdminOtp
            onClick={() => {
              props.setOnStatus(2);
            }}
            title="Items"
            icon={<AddShoppingCartIcon />}
          />
          <SelectAdminOtp
            onClick={() => {
              props.setOnStatus(3);
            }}
            title="Traits"
            icon={<ConnectWithoutContactIcon />}
          />
        </ul>
      </div>
    </div>
  );
};

export default NavigationPanel;
