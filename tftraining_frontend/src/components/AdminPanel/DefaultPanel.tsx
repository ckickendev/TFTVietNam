import { ChampionHoverComponent } from "../HoverComponent/ChampionHoverComponent";

export const DefaultPanel = () => {
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-md-6 col-sm-8 clearfix">
          <ul className="user-info pull-left pull-none-xsm">
            <li className="profile-info dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img
                  src="https://demo.neontheme.com/assets/images/thumb-1@2x.png"
                  alt=""
                  className="img-circle"
                  width={44}
                />
                John Henderson
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ChampionHoverComponent
        champion={{
          name: "Syndra",
          imgLink:
            "https://www.metatft.com/cdn-cgi/image/width=38,height=38,format=auto/https://cdn.metatft.com/file/metatft/champions/tft8_syndra.png",
          traits: [
            {
              image:
                "https://cdn.metatft.com/file/metatft/traits/spacecorps.png",
              name: "Quan canh laser",
            },
            {
              image:
                "https://cdn.metatft.com/file/metatft/traits/spacecorps.png",
              name: "Quan canh laser",
            },
          ],
        }}
      />

      <footer className="main">
        <div className="pull-right">
          <a
            href="https://themeforest.net/item/neon-bootstrap-admin-theme/6434477?ref=Laborator"
            target="_blank"
          >
            <strong>Purchase this theme for $25</strong>
          </a>
        </div>
        © 2023 <strong>Neon</strong> Admin Theme by
        <a href="https://laborator.co/" target="_blank">
          Laborator
        </a>
      </footer>
    </div>
  );
};
