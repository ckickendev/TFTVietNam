import { Button } from "@mui/material";
import React, { useState } from "react";
import { LINK_IMAGE_FIREBASE } from "../constants";

export const HomepageContent = () => {
  const small_bg_7 = "https://cdn.metatft.com/file/metatft/home/set7_bg.webp";
  const [statusIntro, setStatusInto] = useState(1);
  const bgImageDiscover = [
    "",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Comps.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Hyperroll.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Loadeddice.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Augments.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Items.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Units.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Traits.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/Rising.PNG",
    "https://www.metatft.com/cdn-cgi/image/width=710,format=auto/https://cdn.metatft.com/file/metatft/set8/images/App.PNG",
  ];

  const getStartImg = [
    "https://www.metatft.com/logo.svg",
    "",
    "https://www.metatft.com/icons/Patreon_120.png",
    "https://www.metatft.com/icons/Discord.svg",
  ];

  const updateStatus = (status: number) => {
    setStatusInto(status);
  };

  const getClassStatus = (position: number) => {
    if (statusIntro === position) {
      return "HomePageTab active nav-link";
    }
    return "HomePageTab nav-link";
  };

  const getClassStatusContent = (position: number) => {
    if (statusIntro === position) {
      return "tab-pane active";
    }
    return "tab-pane";
  };
  return (
    <div className="MetaTFTLayout2" style={{ minHeight: "2000px" }}>
      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="HomePage">
          <div
            className="HomePageBanner"
            style={{ height: "500px" }}
          >
            <img alt="HomePageBg" className="HomePageBg" src={small_bg_7} />
            <div className="HomePageBannerText">
              <h1 className="HomePageBannerTitle">
                <span>The best place for TFT</span>
                <span>stats and data</span>
              </h1>
              <h3 className="HomePageBannerSubTitle">
                Up to date for Patch 13.5
              </h3>
              <div className="HomePageBannerButtons">
                <div className="HomePageBannerButtonContainer">
                  <a href="https://www.metatft.com/comps">
                    <Button variant="contained" color="success">
                      View Comps
                    </Button>
                  </a>
                </div>
                <div
                  className="HomePageBannerButtonContainer"
                  id="HomeDownloadButton"
                >
                  <a href="https://www.metatft.com/download">
                    <Button variant="contained" color="warning">
                      Download App
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="HomePageSummary">
            <div className="HomePageHighlightContainer">
              <img
                alt="Happy Pengu"
                className="HomePageSummaryImg"
                src={LINK_IMAGE_FIREBASE.ICON_PENGUIN_HOME_1}
              />
              <div className="HighlightTextContainer">
                <div className="HighlightTitle">Accurate and Unbiased</div>
                <div className="HighlightText">
                  We use machine learning to discover the top TFT comps,
                  analysing over 2 million games a day to give the most accurate
                  statistics.
                </div>
              </div>
            </div>
            <div className="HomePageHighlightContainer">
              <img
                alt="Cheer Pengu"
                className="HomePageSummaryImg"
                src={LINK_IMAGE_FIREBASE.ICON_PENGUIN_HOME_2}
              />
              <div className="HighlightTextContainer">
                <div className="HighlightTitle">Up to Date</div>
                <div className="HighlightText">
                  Data is refreshed every few minutes and updated for any
                  b-patches, so we'll always be up to date on the latest meta
                  trends.
                </div>
              </div>
            </div>
            <div className="HomePageHighlightContainer">
              <img
                alt="Dab Pengu"
                className="HomePageSummaryImg"
                src={LINK_IMAGE_FIREBASE.ICON_PENGUIN_HOME_3}
              />
              <div className="HighlightTextContainer">
                <div className="HighlightTitle">Get the Advantage</div>
                <div className="HighlightText">
                  Join thousands of players using MetaTFT to adapt to the meta,
                  learn new strategies, and climb in ranked TFT.
                </div>
              </div>
            </div>
          </div>
          <div className="HomePageDiscoverContainer">
            <div className="HomePageGetStartedTitle"></div>
            <div className="HomePageTabContainer">
              <ul className="HomePageTabMain nav nav-tabs">
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(1)}
                >
                  <a className={getClassStatus(1)}>Comps</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(2)}
                >
                  <a className={getClassStatus(2)}>Game Modes</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(3)}
                >
                  <a className={getClassStatus(3)}>Loaded Dice</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(5)}
                >
                  <a className={getClassStatus(5)}>Items</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(6)}
                >
                  <a className={getClassStatus(6)}>Units</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(7)}
                >
                  <a className={getClassStatus(7)}>Traits</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(8)}
                >
                  <a className={getClassStatus(8)}>Rising</a>
                </li>
                <li
                  className="HomePageTabItem nav-item"
                  onClick={() => updateStatus(9)}
                >
                  <a className={getClassStatus(9)}>In-Game App</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className={getClassStatusContent(1)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Comps</div>
                      <div className="HomeTabText">
                        The comps page calculates average placement and pick
                        rate for the current top meta TFT comps. Filters let you
                        customise the page for your rank and region, and you can
                        expand each comp for extra data, including different
                        comp options, positioning examples, and best augments.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/comps"
                      >
                        Check out the top performing comps in the current
                        meta...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="Comps Page Preview"
                        className="HomeTabImg"
                        src={bgImageDiscover[1]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(2)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Game Modes</div>
                      <div className="HomeTabText">
                        Hyper Roll and Double Up game modes have different
                        pacing, and so the meta can be very unlike regular
                        ranked TFT. Thats why we've calculated the top comps for
                        each game mode by exclusively looking at data from those
                        games.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/hyper-roll-comps"
                      >
                        See the best comps for Hyper Roll...
                      </a>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/double-up-comps"
                      >
                        Or the best comps for Double Up...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="Game Modes Page Preview"
                        className="HomeTabImg"
                        src={bgImageDiscover[2]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(3)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Loaded Dice</div>
                      <div className="HomeTabText">
                        Are you using your Loaded Dice optimally? We've
                        calculated all the possibile outcomes of using your
                        loaded dice on each unit - If you know what unit you
                        want, quickly look up the highest probability units to
                        dice.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/loaded-dice"
                      >
                        Find the best units to use your dice on...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="Loaded Dice Page"
                        className="HomeTabImg"
                        src={bgImageDiscover[3]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(4)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Augments</div>
                      <div className="HomeTabText">
                        Introduced in Set 6, Augments impact your game in unique
                        ways. Look up the best Augments, filter by when they're
                        offered (1st/2nd/3rd) or what tier they are, and quickly
                        search for the best ones you're offered.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/augments"
                      >
                        Compare and search Augment stats...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT Augment Stats Page"
                        className="HomeTabImg"
                        src={bgImageDiscover[4]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(5)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Items</div>
                      <div className="HomeTabText">
                        A tier list for the best items in TFT. Select a unit to
                        discover the best items for that unit, best in slot
                        builds, as well as more data and stats on that unit's
                        performance.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/items"
                      >
                        Discover the best items in TFT...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT Item Stats"
                        className="HomeTabImg"
                        src={bgImageDiscover[5]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(6)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Units</div>
                      <div className="HomeTabText">
                        A tier list of the best performing TFT Champions. You
                        can also filter by an item, giving you a list of the
                        best units with a given item, as well as more stats
                        about that item
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/units"
                      >
                        Compare the performance of TFT champions...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT Unit Stats and Builds"
                        className="HomeTabImg"
                        src={bgImageDiscover[6]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(7)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Traits</div>
                      <div className="HomeTabText">
                        The performance of different Trait options, laid out in
                        a simple list. Compare average placement, frequency and
                        win-rate of TFT Trait bonuses.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/traits"
                      >
                        Analyse the best Traits to run...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT Trait Stats"
                        className="HomeTabImg"
                        src={bgImageDiscover[7]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(8)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">Rising</div>
                      <div className="HomeTabText">
                        Every day, we scan the TFT leaderboards and highlight
                        the fastest climbing players in each region. Discover
                        what the top players are running, uncover their
                        playstyles and learn from the best.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/rising"
                      >
                        See what the best players are up to...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT Top Rising Players"
                        className="HomeTabImg"
                        src={bgImageDiscover[8]}
                      />
                    </div>
                  </div>
                </div>
                <div className={getClassStatusContent(9)}>
                  <div className="HomeTabContents">
                    <div className="HomeTabDescription">
                      <div className="HomeTabTitle">In-Game App</div>
                      <div className="HomeTabText">
                        Want all of these features and more, directly in your
                        game? Check out our free in-game app on Overwolf -
                        includes matchup tracking, player tags, round by round
                        match history, comps overlay and more.
                      </div>
                      <a
                        className="HomeTabCTA"
                        href="https://www.metatft.com/download"
                      >
                        Learn more...
                      </a>
                    </div>
                    <div className="HomeTabImgContainer">
                      <img
                        alt="TFT MetaTFT App"
                        className="HomeTabImg"
                        src={bgImageDiscover[9]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="HomePageGetStartedContainer">
            <div className="HomePageGetStartedTitle">Get Started</div>
            <div className="HomePageGetStartedOptions">
              <a
                className="HomePageGetStarted"
                href="https://www.metatft.com/comps"
              >
                <img
                  alt="MetaTFT Logo"
                  className="HomePageStartedImg"
                  src={getStartImg[0]}
                />
                <div className="HighlightTitle HighlightGetStarted">
                  Dig into the data
                </div>
                <div className="HighlightText HighlightGetStarted">
                  Check out our comps page for the top TFT comps to play, and
                  start digging into the data to discover the best strategies.
                </div>
              </a>
              <a
                href="https://www.metatft.com/download"
                className="HomePageGetStarted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="OverwolfGetStartedImg"
                  viewBox="0 0 144 145"
                >
                  <path
                    d="M144 75.1895C144.11 75.1895 109.181 55.3393 109.078 54.7555C108.288 50.5363 107.293 43.5693 102.474 39.9651C98.3274 36.8903 70.3332 24.2017 70.2779 24.0694C65.1235 16.3912 60.5558 8.34592 56.6125 0C52.8678 2.7776 49.822 6.36738 47.7112 10.4913C45.6004 14.6152 44.4811 19.1626 44.4401 23.7813C30.6883 25.7236 17.7814 31.4827 7.22763 40.3855C34.5979 34.2047 42.4811 39.9028 42.4811 39.9028C33.5202 41.476 24.8855 44.5009 16.9277 48.8549C5.26076 55.1758 0 62.7656 0 62.7656C0 62.7656 26.4934 55.3004 46.8256 62.5632C37.3441 63.8814 28.5306 68.1274 21.6513 74.6913C63.7928 79.8368 84.5752 115.879 93.3194 145C96.5343 93.2026 70.3648 73.5314 70.3648 73.5314C77.9637 74.0686 87.5215 79.8913 93.6354 88.5553C112.277 86.4847 122.657 92.1128 122.57 92.1128C122.364 92.1128 132.649 88.999 139.9 85.7062C139.276 84.7799 136.654 81.565 135.161 79.7668C135.366 79.7823 141.101 79.4476 144 75.1895ZM85.7916 52.2645C86.2024 52.1633 95.3337 49.6333 97.9404 50.6064C100.31 51.486 100.357 58.1339 100.357 58.1339C100.357 58.1339 94.9466 58.8812 85.7916 52.2645Z"
                    fill="currentcolor"
                  />
                </svg>
                <div className="HighlightTitle HighlightGetStarted">
                  Download the App
                </div>
                <div className="HighlightText HighlightGetStarted">
                  Download the MetaTFT App on Overwolf to get a bunch more tools
                  and analytics right in your game. The ultimate TFT companion
                  app.
                </div>
              </a>
              <a
                href="https://www.metatft.com/patreon"
                className="HomePageGetStarted"
              >
                <img
                  alt="Molediver"
                  className="HomePageStartedImg"
                  id="PatreonGetStartedImg"
                  src={getStartImg[2]}
                />
                <div className="HighlightTitle HighlightGetStarted">
                  Support on Patreon
                </div>
                <div className="HighlightText HighlightGetStarted">
                  Like the site? Support our development and unlock more
                  features through Patreon. We're a small team of 2 so your
                  support means a lot!
                </div>
              </a>
              <a
                href="https://discord.com/invite/RqN3qPy"
                className="HomePageGetStarted"
                target="_blank"
              >
                <img
                  alt="Join Discord"
                  className="HomePageStartedImg"
                  id="DiscordGetStartedImg"
                  src={getStartImg[3]}
                />
                <div className="HighlightTitle HighlightGetStarted">
                  Join us on Discord
                </div>
                <div className="HighlightText HighlightGetStarted">
                  Join our Discord to interact with the MetaTFT community.
                  Suggest new features, share strategies, get help and show off
                  your climb.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
