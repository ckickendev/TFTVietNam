import React from "react";

export const RightPanel = () => {
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
              <ul className="dropdown-menu">
                <li className="caret" />
                <li>
                  <a href="https://demo.neontheme.com/extra/timeline/">
                    <i className="entypo-user" />
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a href="https://demo.neontheme.com/mailbox/main/">
                    <i className="entypo-mail" />
                    Inbox
                  </a>
                </li>
                <li>
                  <a href="https://demo.neontheme.com/extra/calendar/">
                    <i className="entypo-calendar" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="entypo-clipboard" />
                    Tasks
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="user-info pull-left pull-right-xs pull-none-xsm">
            <li className="notifications dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="entypo-attention" />
                <span className="badge badge-info">6</span>
              </a>
              <ul className="dropdown-menu">
                <li className="top">
                  <p className="small">
                    <a href="#" className="pull-right">
                      Mark all Read
                    </a>{" "}
                    You have
                    <strong>3</strong> new notifications.
                  </p>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ overflow: "hidden", outline: "none" }}
                    tabIndex={5001}
                  >
                    <li className="unread notification-success">
                      <a href="#">
                        <i className="entypo-user-add pull-right" />
                        <span className="line">
                          <strong>New user registered</strong>
                        </span>
                        <span className="line small"> 30 seconds ago </span>
                      </a>
                    </li>
                    <li className="unread notification-secondary">
                      <a href="#">
                        <i className="entypo-heart pull-right" />
                        <span className="line">
                          <strong>Someone special liked this</strong>
                        </span>
                        <span className="line small"> 2 minutes ago </span>
                      </a>
                    </li>
                    <li className="notification-primary">
                      <a href="#">
                        <i className="entypo-user pull-right" />
                        <span className="line">
                          <strong>Privacy settings have been changed</strong>
                        </span>
                        <span className="line small"> 3 hours ago </span>
                      </a>
                    </li>
                    <li className="notification-danger">
                      <a href="#">
                        <i className="entypo-cancel-circled pull-right" />
                        <span className="line"> John cancelled the event </span>
                        <span className="line small"> 9 hours ago </span>
                      </a>
                    </li>
                    <li className="notification-info">
                      <a href="#">
                        <i className="entypo-info pull-right" />
                        <span className="line">
                          The server is status is stable
                        </span>
                        <span className="line small">
                          {" "}
                          yesterday at 10:30am{" "}
                        </span>
                      </a>
                    </li>
                    <li className="notification-warning">
                      <a href="#">
                        <i className="entypo-rss pull-right" />
                        <span className="line">
                          New comments waiting approval
                        </span>
                        <span className="line small"> last week </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="external">
                  <a href="#">View all notifications</a>
                </li>
                <div
                  id="ascrail2001"
                  className="nicescroll-rails"
                  style={{
                    paddingRight: "3px",
                    width: "10px",
                    zIndex: 1000,
                    cursor: "default",
                    position: "absolute",
                    top: "0px",
                    left: "-10px",
                    height: "0px",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      float: "right",
                      width: "5px",
                      height: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
                <div
                  id="ascrail2001-hr"
                  className="nicescroll-rails"
                  style={{
                    height: "7px",
                    zIndex: 1000,
                    top: "-7px",
                    left: "0px",
                    position: "absolute",
                    cursor: "default",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      height: "5px",
                      width: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </ul>
            </li>
            <li className="notifications dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="entypo-mail" />
                <span className="badge badge-secondary">10</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <form className="top-dropdown-search">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search anything..."
                        name="s"
                      />
                    </div>
                  </form>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ overflow: "hidden", outline: "none" }}
                    tabIndex={5002}
                  >
                    <li className="active">
                      <a href="#">
                        <span className="image pull-right">
                          <img
                            src="https://demo.neontheme.com/assets/images/thumb-1@2x.png"
                            width={44}
                            alt=""
                            className="img-circle"
                          />
                        </span>
                        <span className="line">
                          <strong>Luc Chartier</strong>- yesterday
                        </span>
                        <span className="line desc small">
                          This ain’t our first item, it is the best of the rest.
                        </span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">
                        <span className="image pull-right">
                          <img
                            src="https://demo.neontheme.com/assets/images/thumb-2@2x.png"
                            width={44}
                            alt=""
                            className="img-circle"
                          />
                        </span>
                        <span className="line">
                          <strong>Salma Nyberg</strong>- 2 days ago
                        </span>
                        <span className="line desc small">
                          Oh he decisively impression attachment friendship so
                          if everything.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="image pull-right">
                          <img
                            src="https://demo.neontheme.com/assets/images/thumb-3@2x.png"
                            width={44}
                            alt=""
                            className="img-circle"
                          />
                        </span>
                        <span className="line">
                          Hayden Cartwright - a week ago
                        </span>
                        <span className="line desc small">
                          Whose her enjoy chief new young. Felicity if ye
                          required likewise so doubtful.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="image pull-right">
                          <img
                            src="https://demo.neontheme.com/assets/images/thumb-4@2x.png"
                            width={44}
                            alt=""
                            className="img-circle"
                          />
                        </span>
                        <span className="line">
                          Sandra Eberhardt - 16 days ago
                        </span>
                        <span className="line desc small">
                          On so attention necessary at by provision otherwise
                          existence direction.
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="external">
                  <a href="https://demo.neontheme.com/mailbox/main/">
                    All Messages
                  </a>
                </li>
                <div
                  id="ascrail2002"
                  className="nicescroll-rails"
                  style={{
                    paddingRight: "3px",
                    width: "10px",
                    zIndex: 1000,
                    cursor: "default",
                    position: "absolute",
                    top: "0px",
                    left: "-10px",
                    height: "0px",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      float: "right",
                      width: "5px",
                      height: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
                <div
                  id="ascrail2002-hr"
                  className="nicescroll-rails"
                  style={{
                    height: "7px",
                    zIndex: 1000,
                    top: "-7px",
                    left: "0px",
                    position: "absolute",
                    cursor: "default",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      height: "5px",
                      width: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </ul>
            </li>
            <li className="notifications dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="entypo-list" />
                <span className="badge badge-warning">1</span>
              </a>
              <ul className="dropdown-menu">
                <li className="top">
                  <p>You have 6 pending tasks</p>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ overflow: "hidden", outline: "none" }}
                    tabIndex={5003}
                  >
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">Procurement</span>
                          <span className="percent">27%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "27%" }}
                            className="progress-bar progress-bar-success"
                          >
                            <span className="sr-only">27% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">App Development</span>
                          <span className="percent">83%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "83%" }}
                            className="progress-bar progress-bar-danger"
                          >
                            <span className="sr-only">83% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">HTML Slicing</span>
                          <span className="percent">91%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "91%" }}
                            className="progress-bar progress-bar-success"
                          >
                            <span className="sr-only">91% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">Database Repair</span>
                          <span className="percent">12%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "12%" }}
                            className="progress-bar progress-bar-warning"
                          >
                            <span className="sr-only">12% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">Backup Create Progress</span>
                          <span className="percent">54%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "54%" }}
                            className="progress-bar progress-bar-info"
                          >
                            <span className="sr-only">54% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="task">
                          <span className="desc">Upgrade Progress</span>
                          <span className="percent">17%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "17%" }}
                            className="progress-bar progress-bar-important"
                          >
                            <span className="sr-only">17% Complete</span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="external">
                  <a href="#">See all tasks</a>
                </li>
                <div
                  id="ascrail2003"
                  className="nicescroll-rails"
                  style={{
                    paddingRight: "3px",
                    width: "10px",
                    zIndex: 1000,
                    cursor: "default",
                    position: "absolute",
                    top: "0px",
                    left: "-10px",
                    height: "0px",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      float: "right",
                      width: "5px",
                      height: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
                <div
                  id="ascrail2003-hr"
                  className="nicescroll-rails"
                  style={{
                    height: "7px",
                    zIndex: 1000,
                    top: "-7px",
                    left: "0px",
                    position: "absolute",
                    cursor: "default",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      top: "0px",
                      height: "5px",
                      width: "0px",
                      backgroundColor: "rgb(212, 212, 212)",
                      border: "1px solid rgb(204, 204, 204)",
                      backgroundClip: "padding-box",
                      borderRadius: "1px",
                    }}
                  />
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-4 clearfix hidden-xs">
          <ul className="list-inline links-list pull-right">
            <li className="dropdown language-selector">
              Language: &nbsp;
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-close-others="true"
              >
                <img
                  src="https://demo.neontheme.com/assets/images/flags/flag-uk.png"
                  width={16}
                  height={16}
                />
              </a>
              <ul className="dropdown-menu pull-right">
                <li>
                  <a href="#">
                    <img
                      src="https://demo.neontheme.com/assets/images/flags/flag-de.png"
                      width={16}
                      height={16}
                    />
                    <span>Deutsch</span>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <img
                      src="https://demo.neontheme.com/assets/images/flags/flag-uk.png"
                      width={16}
                      height={16}
                    />
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://demo.neontheme.com/assets/images/flags/flag-fr.png"
                      width={16}
                      height={16}
                    />
                    <span>François</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://demo.neontheme.com/assets/images/flags/flag-al.png"
                      width={16}
                      height={16}
                    />
                    <span>Shqip</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://demo.neontheme.com/assets/images/flags/flag-es.png"
                      width={16}
                      height={16}
                    />
                    <span>Español</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sep" />
            <li>
              <a href="#" data-toggle="chat" data-collapse-sidebar={1}>
                <i className="entypo-chat" />
                Chat
                <span className="badge badge-success chat-notifications-badge">
                  3
                </span>
              </a>
            </li>
            <li className="sep" />
            <li>
              <a href="https://demo.neontheme.com/extra/login/">
                Log Out <i className="entypo-logout right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3 col-xs-6">
          <div className="tile-stats tile-red">
            <div className="icon">
              <i className="entypo-users" />
            </div>
            <div
              className="num"
              data-start={0}
              data-end={83}
              data-postfix
              data-duration={1500}
              data-delay={0}
            >
              83
            </div>
            <h3>Registered users</h3>
            <p>so far in our blog, and our website.</p>
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="tile-stats tile-green">
            <div className="icon">
              <i className="entypo-chart-bar" />
            </div>
            <div
              className="num"
              data-start={0}
              data-end={135}
              data-postfix
              data-duration={1500}
              data-delay={600}
            >
              135
            </div>
            <h3>Daily Visitors</h3>
            <p>this is the average value.</p>
          </div>
        </div>
        <div className="clear visible-xs" />
        <div className="col-sm-3 col-xs-6">
          <div className="tile-stats tile-aqua">
            <div className="icon">
              <i className="entypo-mail" />
            </div>
            <div
              className="num"
              data-start={0}
              data-end={23}
              data-postfix
              data-duration={1500}
              data-delay={1200}
            >
              23
            </div>
            <h3>New Messages</h3>
            <p>messages per day.</p>
          </div>
        </div>
        <div className="col-sm-3 col-xs-6">
          <div className="tile-stats tile-blue">
            <div className="icon">
              <i className="entypo-rss" />
            </div>
            <div
              className="num"
              data-start={0}
              data-end={52}
              data-postfix
              data-duration={1500}
              data-delay={1800}
            >
              52
            </div>
            <h3>Subscribers</h3>
            <p>on our site right now.</p>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-8">
          <div className="panel panel-primary" id="charts_env">
            <div className="panel-heading">
              <div className="panel-title">Site Stats</div>
              <div className="panel-options">
                <ul className="nav nav-tabs">
                  <li className>
                    <a href="#area-chart" data-toggle="tab">
                      Area Chart
                    </a>
                  </li>
                  <li className="active">
                    <a href="#line-chart" data-toggle="tab">
                      Line Charts
                    </a>
                  </li>
                  <li className>
                    <a href="#pie-chart" data-toggle="tab">
                      Pie Chart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel-body">
              <div className="tab-content">
                <div className="tab-pane" id="area-chart">
                  <div
                    id="area-chart-demo"
                    className="morrischart"
                    style={{ height: "300px", position: "relative" }}
                  >
                    <svg
                      height={300}
                      version="1.1"
                      width={585}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        left: "-0.44998px",
                        top: "-0.605485px",
                      }}
                    >
                      <desc
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        Created with Raphaël 2.1.2
                      </desc>
                      <defs
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="261.11111068725586"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166650772094727"
                        >
                          0
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,261.11111068725586H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="202.0833330154419"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166674613952637"
                        >
                          50
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,202.0833330154419H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="143.05555534362793"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166652679443359"
                        >
                          100
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,143.05555534362793H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="84.02777767181396"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166661262512207"
                        >
                          150
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,84.02777767181396H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y={25}
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          200
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,25H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x={560}
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2012
                        </tspan>
                      </text>
                      <text
                        x="474.20873452625773"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2011
                        </tspan>
                      </text>
                      <text
                        x="388.4174690525154"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2010
                        </tspan>
                      </text>
                      <text
                        x="302.62620357877313"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2009
                        </tspan>
                      </text>
                      <text
                        x="216.59989354208906"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2008
                        </tspan>
                      </text>
                      <text
                        x="130.80862806834676"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2007
                        </tspan>
                      </text>
                      <text
                        x="45.01736259460449"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2006
                        </tspan>
                      </text>
                      <path
                        fill="#727c8f"
                        stroke="none"
                        d="M45.01736259460449,36.80555553436281C66.46517896304006,51.5624999523163,109.3608116999112,81.07638878822328,130.80862806834676,95.83333320617677C152.25644443678235,110.59027762413027,195.15207717365348,154.8611108779907,216.59989354208906,154.8611108779907C238.1064710512601,154.8611108779907,281.11962606960213,95.83333320617677,302.62620357877313,95.83333320617677C324.0740199472087,95.83333320617677,366.96965268407985,154.8611108779907,388.4174690525154,154.8611108779907C409.86528542095095,154.8611108779907,452.7609181578222,110.59027762413027,474.20873452625773,95.83333320617677C495.6565508946933,81.07638878822328,538.5521836315644,51.5624999523163,560,36.80555553436281L560,261.11111068725586L45.01736259460449,261.11111068725586Z"
                        fillOpacity={1}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          fillOpacity: 1,
                        }}
                      />
                      <path
                        fill="none"
                        stroke="#576277"
                        d="M45.01736259460449,36.80555553436281C66.46517896304006,51.5624999523163,109.3608116999112,81.07638878822328,130.80862806834676,95.83333320617677C152.25644443678235,110.59027762413027,195.15207717365348,154.8611108779907,216.59989354208906,154.8611108779907C238.1064710512601,154.8611108779907,281.11962606960213,95.83333320617677,302.62620357877313,95.83333320617677C324.0740199472087,95.83333320617677,366.96965268407985,154.8611108779907,388.4174690525154,154.8611108779907C409.86528542095095,154.8611108779907,452.7609181578222,110.59027762413027,474.20873452625773,95.83333320617677C495.6565508946933,81.07638878822328,538.5521836315644,51.5624999523163,560,36.80555553436281"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="45.01736259460449"
                        cy="36.80555553436281"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="130.80862806834676"
                        cy="95.83333320617677"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="216.59989354208906"
                        cy="154.8611108779907"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="302.62620357877313"
                        cy="95.83333320617677"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="388.4174690525154"
                        cy="154.8611108779907"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="474.20873452625773"
                        cy="95.83333320617677"
                        r={4}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx={560}
                        cy="36.80555553436281"
                        r={7}
                        fill="#576277"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="#3e444e"
                        stroke="none"
                        d="M45.01736259460449,143.05555534362793C66.46517896304006,150.43402755260468,109.3608116999112,165.19097197055817,130.80862806834676,172.5694441795349C152.25644443678235,179.94791638851166,195.15207717365348,202.0833330154419,216.59989354208906,202.0833330154419C238.1064710512601,202.0833330154419,281.11962606960213,172.5694441795349,302.62620357877313,172.5694441795349C324.0740199472087,172.5694441795349,366.96965268407985,202.0833330154419,388.4174690525154,202.0833330154419C409.86528542095095,202.0833330154419,452.7609181578222,179.94791638851166,474.20873452625773,172.5694441795349C495.6565508946933,165.19097197055817,538.5521836315644,150.43402755260468,560,143.05555534362793L560,261.11111068725586L45.01736259460449,261.11111068725586Z"
                        fillOpacity={1}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          fillOpacity: 1,
                        }}
                      />
                      <path
                        fill="none"
                        stroke="#303641"
                        d="M45.01736259460449,143.05555534362793C66.46517896304006,150.43402755260468,109.3608116999112,165.19097197055817,130.80862806834676,172.5694441795349C152.25644443678235,179.94791638851166,195.15207717365348,202.0833330154419,216.59989354208906,202.0833330154419C238.1064710512601,202.0833330154419,281.11962606960213,172.5694441795349,302.62620357877313,172.5694441795349C324.0740199472087,172.5694441795349,366.96965268407985,202.0833330154419,388.4174690525154,202.0833330154419C409.86528542095095,202.0833330154419,452.7609181578222,179.94791638851166,474.20873452625773,172.5694441795349C495.6565508946933,165.19097197055817,538.5521836315644,150.43402755260468,560,143.05555534362793"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="45.01736259460449"
                        cy="143.05555534362793"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="130.80862806834676"
                        cy="172.5694441795349"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="216.59989354208906"
                        cy="202.0833330154419"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="302.62620357877313"
                        cy="172.5694441795349"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="388.4174690525154"
                        cy="202.0833330154419"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="474.20873452625773"
                        cy="172.5694441795349"
                        r={4}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx={560}
                        cy="143.05555534362793"
                        r={7}
                        fill="#303641"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                    </svg>
                    <div
                      className="morris-hover morris-default-style"
                      style={{ left: "498px", top: "57px" }}
                    >
                      <div className="morris-hover-row-label">2012</div>
                      <div
                        className="morris-hover-point"
                        style={{ color: "#303641" }}
                      >
                        Series A: 100
                      </div>
                      <div
                        className="morris-hover-point"
                        style={{ color: "#576277" }}
                      >
                        Series B: 90
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane active" id="line-chart">
                  <div
                    id="line-chart-demo"
                    className="morrischart"
                    style={{ height: "300px", position: "relative" }}
                  >
                    <svg
                      height={300}
                      version="1.1"
                      width={585}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        left: "-0.44998px",
                        top: "-0.605485px",
                      }}
                    >
                      <desc
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        Created with Raphaël 2.1.2
                      </desc>
                      <defs
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="261.11111068725586"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166650772094727"
                        >
                          0
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,261.11111068725586H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="202.0833330154419"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166674613952637"
                        >
                          25
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,202.0833330154419H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="143.05555534362793"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166652679443359"
                        >
                          50
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,143.05555534362793H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y="84.02777767181396"
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166661262512207"
                        >
                          75
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,84.02777767181396H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="32.51736259460449"
                        y={25}
                        textAnchor="end"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "end",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          100
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#aaaaaa"
                        d="M45.01736259460449,25H560"
                        strokeWidth="0.5"
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x={560}
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2012
                        </tspan>
                      </text>
                      <text
                        x="474.20873452625773"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2011
                        </tspan>
                      </text>
                      <text
                        x="388.4174690525154"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2010
                        </tspan>
                      </text>
                      <text
                        x="302.62620357877313"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2009
                        </tspan>
                      </text>
                      <text
                        x="216.59989354208906"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2008
                        </tspan>
                      </text>
                      <text
                        x="130.80862806834676"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2007
                        </tspan>
                      </text>
                      <text
                        x="45.01736259460449"
                        y="273.61111068725586"
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#888888"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "12px sans-serif",
                        }}
                        fontSize="12px"
                        fontFamily="sans-serif"
                        fontWeight="normal"
                        transform="matrix(1,0,0,1,0,6.9444)"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.166666030883789"
                        >
                          2006
                        </tspan>
                      </text>
                      <path
                        fill="none"
                        stroke="#7a92a3"
                        d="M45.01736259460449,48.61111106872559C66.46517896304006,63.36805548667908,109.3608116999112,92.88194432258607,130.80862806834676,107.63888874053956C152.25644443678235,122.39583315849305,195.15207717365348,166.66666641235352,216.59989354208906,166.66666641235352C238.1064710512601,166.66666641235352,281.11962606960213,107.63888874053956,302.62620357877313,107.63888874053956C324.0740199472087,107.63888874053956,366.96965268407985,166.66666641235352,388.4174690525154,166.66666641235352C409.86528542095095,166.66666641235352,452.7609181578222,122.39583315849305,474.20873452625773,107.63888874053956C495.6565508946933,92.88194432258607,538.5521836315644,63.36805548667908,560,48.61111106872559"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#0b62a4"
                        d="M45.01736259460449,25C66.46517896304006,39.75694441795349,109.3608116999112,69.27083325386047,130.80862806834676,84.02777767181396C152.25644443678235,98.78472208976746,195.15207717365348,143.05555534362793,216.59989354208906,143.05555534362793C238.1064710512601,143.05555534362793,281.11962606960213,84.02777767181396,302.62620357877313,84.02777767181396C324.0740199472087,84.02777767181396,366.96965268407985,143.05555534362793,388.4174690525154,143.05555534362793C409.86528542095095,143.05555534362793,452.7609181578222,98.78472208976746,474.20873452625773,84.02777767181396C495.6565508946933,69.27083325386047,538.5521836315644,39.75694441795349,560,25"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="45.01736259460449"
                        cy="48.61111106872559"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="130.80862806834676"
                        cy="107.63888874053956"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="216.59989354208906"
                        cy="166.66666641235352"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="302.62620357877313"
                        cy="107.63888874053956"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="388.4174690525154"
                        cy="166.66666641235352"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="474.20873452625773"
                        cy="107.63888874053956"
                        r={4}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx={560}
                        cy="48.61111106872559"
                        r={7}
                        fill="#7a92a3"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="45.01736259460449"
                        cy={25}
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="130.80862806834676"
                        cy="84.02777767181396"
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="216.59989354208906"
                        cy="143.05555534362793"
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="302.62620357877313"
                        cy="84.02777767181396"
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="388.4174690525154"
                        cy="143.05555534362793"
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx="474.20873452625773"
                        cy="84.02777767181396"
                        r={4}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <circle
                        cx={560}
                        cy={25}
                        r={7}
                        fill="#0b62a4"
                        stroke="#ffffff"
                        strokeWidth={1}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                    </svg>
                    <div
                      className="morris-hover morris-default-style"
                      style={{ left: "464px", top: "35px" }}
                    >
                      <div className="morris-hover-row-label">2012</div>
                      <div
                        className="morris-hover-point"
                        style={{ color: "#0b62a4" }}
                      >
                        October 2013: 100
                      </div>
                      <div
                        className="morris-hover-point"
                        style={{ color: "#7a92a3" }}
                      >
                        November 2013: 90
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="pie-chart">
                  <div
                    id="donut-chart-demo"
                    className="morrischart"
                    style={{ height: "300px" }}
                  >
                    <svg
                      height={300}
                      version="1.1"
                      width={585}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        left: "-0.44998px",
                        top: "-0.605478px",
                      }}
                    >
                      <desc
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      >
                        Created with Raphaël 2.1.2
                      </desc>
                      <defs
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#707f9b"
                        d="M292.5,243.33333333333331A93.33333333333333,93.33333333333333,0,1,0,233.38469086224157,77.77471816144734"
                        strokeWidth={2}
                        opacity={1}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 1,
                        }}
                      />
                      <path
                        fill="#707f9b"
                        stroke="#ffffff"
                        d="M292.5,246.33333333333331A96.33333333333333,96.33333333333333,0,1,0,231.48455592567075,75.45319124520815L203.82703629336234,41.66207724217101A140,140,0,1,1,292.5,290Z"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#455064"
                        d="M233.38469086224157,77.77471816144734A93.33333333333333,93.33333333333333,0,0,0,204.59701246614836,181.37157780116635"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#455064"
                        stroke="#ffffff"
                        d="M231.48455592567075,75.45319124520815A96.33333333333333,96.33333333333333,0,0,0,201.77155929541743,182.37994994477526L165.35460731710742,195.37674646240134A135,135,0,0,1,206.9939278543137,45.531288769236326Z"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <path
                        fill="none"
                        stroke="#242d3c"
                        d="M204.59701246614836,181.37157780116635A93.33333333333333,93.33333333333333,0,0,0,292.47067846904883,243.333328727518"
                        strokeWidth={2}
                        opacity={0}
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          opacity: 0,
                        }}
                      />
                      <path
                        fill="#242d3c"
                        stroke="#ffffff"
                        d="M201.77155929541743,182.37994994477526A96.33333333333333,96.33333333333333,0,0,0,292.46973599126824,246.3333285794739L292.4575884998742,284.9999933380171A135,135,0,0,1,165.35460731710742,195.37674646240134Z"
                        strokeWidth={3}
                        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
                      />
                      <text
                        x="292.5"
                        y={140}
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#000000"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "800 15px Arial",
                        }}
                        fontSize="15px"
                        fontWeight={800}
                        transform="matrix(1.4604,0,0,1.4604,-134.6754,-68.2969)"
                        strokeWidth="0.6847305297851562"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.999994277954102"
                        >
                          Download Sales
                        </tspan>
                      </text>
                      <text
                        x="292.5"
                        y={160}
                        textAnchor="middle"
                        font='10px "Arial"'
                        stroke="none"
                        fill="#000000"
                        style={{
                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          textAnchor: "middle",
                          font: "14px Arial",
                        }}
                        fontSize="14px"
                        transform="matrix(2,0,0,2,-292.5,-152.2222)"
                        strokeWidth="0.5000000238418579"
                      >
                        <tspan
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                          dy="4.999992847442627"
                        >
                          45
                        </tspan>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th width="50%" className="col-padding-1">
                    <div className="pull-left">
                      <div className="h4 no-margin">Pageviews</div>
                      <small>54,127</small>
                    </div>
                    <span className="pull-right pageviews">
                      <canvas
                        width={34}
                        height={30}
                        style={{
                          display: "inline-block",
                          width: "34px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      />
                    </span>
                  </th>
                  <th width="50%" className="col-padding-1">
                    <div className="pull-left">
                      <div className="h4 no-margin">Unique Visitors</div>
                      <small>25,127</small>
                    </div>
                    <span className="pull-right uniquevisitors">
                      <canvas
                        width={34}
                        height={30}
                        style={{
                          display: "inline-block",
                          width: "34px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      />
                    </span>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <div className="panel-title">
                <h4>
                  Real Time Stats
                  <br />
                  <small>current server uptime</small>
                </h4>
              </div>
              <div className="panel-options">
                <a
                  href="#sample-modal"
                  data-toggle="modal"
                  data-target="#sample-modal-dialog-1"
                  className="bg"
                >
                  <i className="entypo-cog" />
                </a>
                <a href="#" data-rel="collapse">
                  <i className="entypo-down-open" />
                </a>
                <a href="#" data-rel="reload">
                  <i className="entypo-arrows-ccw" />
                </a>
                <a href="#" data-rel="close">
                  <i className="entypo-cancel" />
                </a>
              </div>
            </div>
            <div className="panel-body no-padding">
              <div id="rickshaw-chart-demo" className="rickshaw_graph">
                <div id="rickshaw-legend" className="rickshaw_legend">
                  <ul>
                    <li className="line">
                      <div
                        className="swatch"
                        style={{ backgroundColor: "rgb(224, 242, 255)" }}
                      />
                      <span className="label">Download</span>
                    </li>
                    <li className="line">
                      <div
                        className="swatch"
                        style={{ backgroundColor: "rgb(115, 200, 255)" }}
                      />
                      <span className="label">Upload</span>
                    </li>
                  </ul>
                </div>
                <svg width={291} height={193}>
                  <g>
                    <path
                      d="M0,26.970723590722628Q5.146938775510205,25.66925279546995,5.938775510204082,23.998597295362373C7.126530612244898,21.492614045201,10.689795918367349,1.7197117932355581,11.877551020408164,1.9108910891089295S16.62857142857143,23.78967027135675,17.816326530612248,25.910390254096086S22.567346938775515,23.428789856053527,23.75510204081633,23.11809091650227S28.506122448979593,24.149632209303533,29.69387755102041,22.8034008585835S34.44489795918368,10.885748858685153,35.632653061224495,9.655777409301948S40.38367346938775,10.05680097873524,41.57142857142857,10.503686364751445S46.32244897959184,13.949609725870195,47.51020408163266,14.124631269464004S52.26122448979592,11.122137032241994,53.44897959183674,12.253901800689533S58.2,26.45878691644446,59.38775510204082,25.442278953939393S64.13877551020408,1.9530431899818013,65.3265306122449,2.088822175638853S70.07755102040818,23.914692537003795,71.26530612244899,26.800068810509913S76.01632653061226,33.07689770173121,77.20408163265307,30.94258491070005S81.95510204081633,6.759589479728879,83.14285714285714,5.456940900198248S87.89387755102041,17.72826055998072,89.08163265306122,17.916099115393735S93.8326530612245,7.216699513433784,95.02040816326532,7.335326454328396S99.77142857142857,17.80674268475522,100.95918367346938,19.10236852433985S105.71020408163267,18.92819796671182,106.89795918367348,20.2915848501747S111.64897959183675,33.671261055567804,112.83673469387756,32.73623735896865S117.58775510204083,12.249020796213687,118.77551020408164,10.941347884183187S123.52653061224491,20.14472517068361,124.71428571428572,19.659508238663648S129.46530612244896,6.892151682169981,130.6530612244898,6.089178563983552S135.40408163265306,11.415744323637796,136.59183673469389,11.629777056799355S141.34285714285716,7.322879621260401,142.53061224489798,8.229505895599146S147.28163265306122,19.44580197248721,148.46938775510205,20.69603980018681S153.22040816326532,21.73914091798681,154.40816326530614,20.73188417259513S159.15918367346939,10.253886835639975,160.3469387755102,10.623472346270034S165.09795918367345,22.758743254670357,166.28571428571428,24.42773927889573S171.03673469387755,27.921433327624264,172.22448979591837,27.31343258852374S176.97551020408162,19.18339196852798,178.16326530612244,18.34773188789046S182.9142857142857,17.338136112664245,184.10204081632654,18.956831782148527S188.8530612244898,34.7203305691091,190.04081632653063,34.53468858273328S194.79183673469387,18.938698009407194,195.9795918367347,17.100411918390336S200.73061224489794,14.92463980692373,201.91836734693877,16.151827672564707S206.66938775510204,29.038951986128616,207.85714285714286,29.372290574800104S212.60816326530613,19.096298543602828,213.79591836734696,19.4852135592796S218.54693877551023,34.937018205672246,219.73469387755105,33.26144073156783S224.4857142857143,4.959599317778006,225.67346938775512,2.7294388182354794S230.42448979591836,9.326378640693889,231.6122448979592,10.959835736142566S236.36326530612246,17.186584145827645,237.55102040816328,19.064009772722244S242.30204081632652,30.92944251791096,243.48979591836735,29.73409200508857S248.24081632653062,8.537473722639756,249.42857142857144,7.110504644498349S254.17959183673472,14.484097494744187,255.36734693877554,15.464401223674486S260.1183673469388,16.092021698989512,261.3061224489796,16.913541933801326S266.0571428571429,23.21226249646012,267.2448979591837,23.679603571792626S271.995918367347,20.477082404875,273.18367346938777,21.5869526871264S277.93469387755107,36.171417700062165,279.12244897959187,34.77830639430661S283.87346938775516,9.21778746839434,285.06122448979596,7.655839629570835Q285.85306122448986,6.614541070355165,291,19.15882800607156L291,105.01762627169691Q285.85306122448986,96.90360573615831,285.06122448979596,97.14219055378322C283.87346938775516,97.50006778022059,280.31020408163266,108.72015449568916,279.12244897959187,108.59639853607065S274.37142857142857,96.39880254037435,273.18367346938777,95.90463095759812S268.43265306122447,102.41801604738295,267.2448979591837,103.65468270830829S262.4938775510204,107.9657188047759,261.3061224489796,108.27129756685152S256.55510204081634,108.23825401731675,255.36734693877554,106.71047032906438S250.61632653061227,92.54388786258393,249.42857142857144,92.99346068432779S244.67755102040817,110.89182618093004,243.48979591836735,111.20619854650289S238.7387755102041,97.61226725709362,237.55102040816328,96.13718434005635S232.8,96.4518523989452,231.6122448979592,96.4553693761302S226.86122448979594,94.71287681702215,225.67346938775512,96.17235411190619S220.92244897959188,110.59764043736327,219.73469387755105,111.05014232497065S214.98367346938778,101.38230924735058,213.79591836734696,100.69737298797997S209.0448979591837,104.26645715967864,207.85714285714286,104.20077973126456S203.1061224489796,99.57191714687254,201.91836734693877,100.04059870383917S197.16734693877552,107.77713669396402,195.9795918367347,108.88759530093091S191.22857142857146,111.11636338935438,190.04081632653063,111.14518477350808S185.28979591836736,109.30042826838354,184.10204081632654,109.17580914246797S179.35102040816327,110.85999616924167,178.16326530612244,109.89899351435234S173.4122448979592,100.16443777055551,172.22448979591837,99.5657825935747S167.4734693877551,104.08313962045412,166.28571428571428,103.91244174454424S161.53469387755104,97.79692813933711,160.3469387755102,97.85880383447595S155.59591836734697,104.22284122480096,154.40816326530614,104.53119869593263S149.65714285714287,101.13448174387153,148.46938775510205,100.94237854579274S143.7183673469388,101.86884724474677,142.53061224489798,102.61016671514467S137.7795918367347,108.29499103730991,136.59183673469389,108.35557324977178S131.84081632653061,104.42599692361716,130.6530612244898,103.21598883976331S125.90204081632653,95.88689824331196,124.71428571428572,96.2554924112333S119.96326530612245,105.83845251702334,118.77551020408164,106.90193051897671S114.02448979591837,107.60865074418429,112.83673469387756,106.89027243076707S108.08571428571429,100.17797187167646,106.89795918367348,99.7181473848045S102.1469387755102,102.21545457786603,100.95918367346938,102.29202756204738S96.20816326530613,100.59599193155542,95.02040816326532,100.48387722661803S90.26938775510203,101.68485668157929,89.08163265306122,101.17088051267359S84.33061224489795,94.7218618339452,83.14285714285714,95.34411553756107S78.39183673469388,106.41771512176621,77.20408163265307,107.39341754883222S72.4530612244898,106.68857395035029,71.26530612244899,105.1011398082212S66.5142857142857,91.84819203665813,65.3265306122449,91.51907612754144S60.57551020408164,100.60837280298325,59.38775510204082,101.80998071705424S54.63673469387756,103.77996103653422,53.44897959183674,103.53515526825139S48.697959183673476,99.4722362997203,47.51020408163266,99.36192303422591S42.75918367346939,102.01628987475968,41.57142857142857,102.4320226133076S36.82040816326531,103.71839199057916,35.632653061224495,103.5192504197051S30.881632653061228,100.4478094627659,29.69387755102041,100.44060690456692S24.942857142857143,102.6974941607158,23.75510204081633,103.44722483771525S19.004081632653065,108.50237418748814,17.816326530612248,107.93791367456139S13.06530612244898,98.10174365516094,11.877551020408164,97.80261970844766S7.126530612244898,103.45714803955494,5.938775510204082,104.94667420742854Q5.146938775510205,105.93969165267761,0,112.69788138718373Z"
                      className="area"
                      fill="#e0f2ff"
                    />
                  </g>
                  <g>
                    <path
                      d="M0,112.69788138718373Q5.146938775510205,105.93969165267761,5.938775510204082,104.94667420742854C7.126530612244898,103.45714803955494,10.689795918367349,97.50349576173438,11.877551020408164,97.80261970844766S16.62857142857143,107.37345316163463,17.816326530612248,107.93791367456139S22.567346938775515,104.1969555147147,23.75510204081633,103.44722483771525S28.506122448979593,100.43340434636794,29.69387755102041,100.44060690456692S34.44489795918368,103.32010884883104,35.632653061224495,103.5192504197051S40.38367346938775,102.84775535185551,41.57142857142857,102.4320226133076S46.32244897959184,99.25160976873153,47.51020408163266,99.36192303422591S52.26122448979592,103.29034949996856,53.44897959183674,103.53515526825139S58.2,103.01158863112524,59.38775510204082,101.80998071705424S64.13877551020408,91.18996021842474,65.3265306122449,91.51907612754144S70.07755102040818,103.51370566609212,71.26530612244899,105.1011398082212S76.01632653061226,108.36911997589823,77.20408163265307,107.39341754883222S81.95510204081633,95.96636924117693,83.14285714285714,95.34411553756107S87.89387755102041,100.65690434376789,89.08163265306122,101.17088051267359S93.8326530612245,100.37176252168065,95.02040816326532,100.48387722661803S99.77142857142857,102.36860054622873,100.95918367346938,102.29202756204738S105.71020408163267,99.25832289793253,106.89795918367348,99.7181473848045S111.64897959183675,106.17189411734985,112.83673469387756,106.89027243076707S117.58775510204083,107.96540852093008,118.77551020408164,106.90193051897671S123.52653061224491,96.62408657915465,124.71428571428572,96.2554924112333S129.46530612244896,102.00598075590946,130.6530612244898,103.21598883976331S135.40408163265306,108.41615546223365,136.59183673469389,108.35557324977178S141.34285714285716,103.35148618554257,142.53061224489798,102.61016671514467S147.28163265306122,100.75027534771394,148.46938775510205,100.94237854579274S153.22040816326532,104.8395561670643,154.40816326530614,104.53119869593263S159.15918367346939,97.92067952961479,160.3469387755102,97.85880383447595S165.09795918367345,103.74174386863436,166.28571428571428,103.91244174454424S171.03673469387755,98.96712741659388,172.22448979591837,99.5657825935747S176.97551020408162,108.93799085946301,178.16326530612244,109.89899351435234S182.9142857142857,109.0511900165524,184.10204081632654,109.17580914246797S188.8530612244898,111.17400615766178,190.04081632653063,111.14518477350808S194.79183673469387,109.9980539078978,195.9795918367347,108.88759530093091S200.73061224489794,100.5092802608058,201.91836734693877,100.04059870383917S206.66938775510204,104.13510230285048,207.85714285714286,104.20077973126456S212.60816326530613,100.01243672860937,213.79591836734696,100.69737298797997S218.54693877551023,111.50264421257803,219.73469387755105,111.05014232497065S224.4857142857143,97.63183140679023,225.67346938775512,96.17235411190619S230.42448979591836,96.45888635331518,231.6122448979592,96.4553693761302S236.36326530612246,94.66210142301908,237.55102040816328,96.13718434005635S242.30204081632652,111.52057091207574,243.48979591836735,111.20619854650289S248.24081632653062,93.44303350607164,249.42857142857144,92.99346068432779S254.17959183673472,105.18268664081201,255.36734693877554,106.71047032906438S260.1183673469388,108.57687632892713,261.3061224489796,108.27129756685152S266.0571428571429,104.89134936923362,267.2448979591837,103.65468270830829S271.995918367347,95.41045937482188,273.18367346938777,95.90463095759812S277.93469387755107,108.47264257645215,279.12244897959187,108.59639853607065S283.87346938775516,97.50006778022059,285.06122448979596,97.14219055378322Q285.85306122448986,96.90360573615831,291,105.01762627169691L291,193Q285.85306122448986,193,285.06122448979596,193C283.87346938775516,193,280.31020408163266,193,279.12244897959187,193S274.37142857142857,193,273.18367346938777,193S268.43265306122447,193,267.2448979591837,193S262.4938775510204,193,261.3061224489796,193S256.55510204081634,193,255.36734693877554,193S250.61632653061227,193,249.42857142857144,193S244.67755102040817,193,243.48979591836735,193S238.7387755102041,193,237.55102040816328,193S232.8,193,231.6122448979592,193S226.86122448979594,193,225.67346938775512,193S220.92244897959188,193,219.73469387755105,193S214.98367346938778,193,213.79591836734696,193S209.0448979591837,193,207.85714285714286,193S203.1061224489796,193,201.91836734693877,193S197.16734693877552,193,195.9795918367347,193S191.22857142857146,193,190.04081632653063,193S185.28979591836736,193,184.10204081632654,193S179.35102040816327,193,178.16326530612244,193S173.4122448979592,193,172.22448979591837,193S167.4734693877551,193,166.28571428571428,193S161.53469387755104,193,160.3469387755102,193S155.59591836734697,193,154.40816326530614,193S149.65714285714287,193,148.46938775510205,193S143.7183673469388,193,142.53061224489798,193S137.7795918367347,193,136.59183673469389,193S131.84081632653061,193,130.6530612244898,193S125.90204081632653,193,124.71428571428572,193S119.96326530612245,193,118.77551020408164,193S114.02448979591837,193,112.83673469387756,193S108.08571428571429,193,106.89795918367348,193S102.1469387755102,193,100.95918367346938,193S96.20816326530613,193,95.02040816326532,193S90.26938775510203,193,89.08163265306122,193S84.33061224489795,193,83.14285714285714,193S78.39183673469388,193,77.20408163265307,193S72.4530612244898,193,71.26530612244899,193S66.5142857142857,193,65.3265306122449,193S60.57551020408164,193,59.38775510204082,193S54.63673469387756,193,53.44897959183674,193S48.697959183673476,193,47.51020408163266,193S42.75918367346939,193,41.57142857142857,193S36.82040816326531,193,35.632653061224495,193S30.881632653061228,193,29.69387755102041,193S24.942857142857143,193,23.75510204081633,193S19.004081632653065,193,17.816326530612248,193S13.06530612244898,193,11.877551020408164,193S7.126530612244898,193,5.938775510204082,193Q5.146938775510205,193,0,193Z"
                      className="area"
                      fill="#73c8ff"
                    />
                  </g>
                </svg>
                <div className="detail inactive" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4">
          <div className="panel panel-primary">
            <table className="table table-bordered table-responsive">
              <thead>
                <tr>
                  <th className="padding-bottom-none text-center">
                    <br />
                    <br />
                    <span className="monthly-sales">
                      <canvas
                        width={262}
                        height={80}
                        style={{
                          display: "inline-block",
                          width: "262px",
                          height: "80px",
                          verticalAlign: "top",
                        }}
                      />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="panel-heading">
                    <h4>Monthly Sales</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <div className="panel-title">Latest Updated Profiles</div>
              <div className="panel-options">
                <a
                  href="#sample-modal"
                  data-toggle="modal"
                  data-target="#sample-modal-dialog-1"
                  className="bg"
                >
                  <i className="entypo-cog" />
                </a>
                <a href="#" data-rel="collapse">
                  <i className="entypo-down-open" />
                </a>
                <a href="#" data-rel="reload">
                  <i className="entypo-arrows-ccw" />
                </a>
                <a href="#" data-rel="close">
                  <i className="entypo-cancel" />
                </a>
              </div>
            </div>
            <div className="panel-body with-table">
              <table className="table table-bordered table-responsive">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Art Ramadani</td>
                    <td>CEO</td>
                    <td className="text-center">
                      <span className="inlinebar">
                        <canvas
                          width={29}
                          height={14}
                          style={{
                            display: "inline-block",
                            width: "29px",
                            height: "14px",
                            verticalAlign: "top",
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ylli Pylla</td>
                    <td>Font-end Developer</td>
                    <td className="text-center">
                      <span className="inlinebar-2">
                        <canvas
                          width={29}
                          height={14}
                          style={{
                            display: "inline-block",
                            width: "29px",
                            height: "14px",
                            verticalAlign: "top",
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Arlind Nushi</td>
                    <td>Co-founder</td>
                    <td className="text-center">
                      <span className="inlinebar-3">
                        <canvas
                          width={29}
                          height={14}
                          style={{
                            display: "inline-block",
                            width: "29px",
                            height: "14px",
                            verticalAlign: "top",
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-3">
          <div className="tile-block" id="todo_tasks">
            <div className="tile-header">
              <i className="entypo-list" />
              <a href="#">
                Tasks
                <span>To do list, tick one.</span>
              </a>
            </div>
            <div className="tile-content">
              <input
                type="text"
                className="form-control"
                placeholder="Add Task"
              />
              <ul className="todo-list">
                <li>
                  <div className="checkbox checkbox-replace color-white neon-cb-replacement">
                    <label className="cb-wrapper">
                      <input type="checkbox" />
                      <div className="checked" />
                    </label>
                    <label>Website Design</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox checkbox-replace color-white neon-cb-replacement checked">
                    <label className="cb-wrapper">
                      <input type="checkbox" id="task-2" defaultChecked />
                      <div className="checked" />
                    </label>
                    <label>Slicing</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox checkbox-replace color-white neon-cb-replacement">
                    <label className="cb-wrapper">
                      <input type="checkbox" id="task-3" />
                      <div className="checked" />
                    </label>
                    <label>WordPress Integration</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox checkbox-replace color-white neon-cb-replacement">
                    <label className="cb-wrapper">
                      <input type="checkbox" id="task-4" />
                      <div className="checked" />
                    </label>
                    <label>SEO Optimize</label>
                  </div>
                </li>
                <li>
                  <div className="checkbox checkbox-replace color-white neon-cb-replacement checked">
                    <label className="cb-wrapper">
                      <input type="checkbox" id="task-5" defaultChecked />
                      <div className="checked" />
                    </label>
                    <label>Minify &amp; Compress</label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tile-footer">
              <a href="#">View all tasks</a>
            </div>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="tile-group">
            <div className="tile-left">
              <div className="tile-entry">
                <h3>Map</h3>
                <span>top visitors location</span>
              </div>
              <div className="tile-entry">
                <img
                  src="https://demo.neontheme.com/assets/images/sample-al.png"
                  alt=""
                  className="pull-right op"
                />
                <h4>Albania</h4>
                <span>25%</span>
              </div>
              <div className="tile-entry">
                <img
                  src="https://demo.neontheme.com/assets/images/sample-it.png"
                  alt=""
                  className="pull-right op"
                />
                <h4>Italy</h4>
                <span>18%</span>
              </div>
              <div className="tile-entry">
                <img
                  src="https://demo.neontheme.com/assets/images/sample-au.png"
                  alt=""
                  className="pull-right op"
                />
                <h4>Austria</h4>
                <span>15%</span>
              </div>
            </div>
            <div className="tile-right">
              <div id="map-2" className="map">
                <div
                  className="jvectormap-container"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "rgb(56, 63, 71)",
                  }}
                >
                  <svg width={419} height={353}>
                    <g transform="scale(1.0579838833768636) translate(-251.98186069591176, -633.9416039677899)">
                      <path
                        d="M400.74,604.29l-0.53,-2.71l-0.54,-0.63l-1.78,-0.57l-2.13,-0.17l-0.39,-0.34l-0.52,-2.77l-0.72,-1.47l-1.1,-1.13l-0.38,-0.11l-1.14,0.27l-1.44,0.87l-0.87,0.25l-0.9,-0.69l-2.11,-2.57l-0.18,-0.59l0.24,-1.12l-0.86,-1.96l-0.11,-0.72l5.67,-3.5l3.55,-1.85l1.24,-0.42l0.35,1.54l0.39,0.7l0.62,0.5l0.83,-0.0l1.3,-0.85l1.19,0.2l0.86,0.39l1.05,0.92l1.15,0.17l2.08,-0.89l1.87,-1.34l0.76,-1.46l0.74,0.35l0.94,0.12l0.66,-0.29l0.19,-0.42l-0.22,-1.1l0.54,-0.5l0.48,-0.18l1.07,0.98l0.85,0.08l1.68,-1.39l0.34,0.46l0.12,0.79l0.21,0.3l0.58,0.23l1.3,-0.1l1.16,-1.18l0.54,2.22l1.66,1.65l1.66,0.52l2.16,-0.5l1.53,1.73l2.54,0.99l0.28,0.39l-0.09,0.64l-0.91,2.06l-0.08,1.01l-1.24,1.51l-0.16,0.93l0.73,1.48l0.43,0.22l1.63,-0.66l0.22,0.32l-0.5,-0.02l-0.41,0.39l0.39,0.41l2.41,0.08l1.66,1.4l0.54,0.94l0.78,0.61l-0.65,0.78l0.11,0.96l0.57,0.67l1.12,0.26l0.45,0.51l0.28,2.54l-2.36,1.63l-0.72,1.73l-1.65,-0.4l-0.41,0.13l-1.48,1.78l-1.12,2.64l-0.64,1.01l-0.26,2.39l0.9,1.25l1.15,2.2l-0.93,1.81l-0.99,-0.01l-2.53,0.59l-3.15,-3.48l-1.97,-0.86l-1.61,-1.2l-1.78,-0.28l-0.28,-2.28l-0.66,-1.01l0.91,-3.54l-0.17,-0.44l-0.57,-0.37l-0.39,-0.02l-0.73,0.38l-0.99,1.02l-0.66,1.89l-1.3,0.77l-2.26,0.3l-2.47,-0.3l-0.27,-0.38l0.63,-1.13l0.11,-0.87l-0.74,-1.24l0.43,-1.46l-0.06,-0.87l-1.77,-1.59l-1.45,-0.4l-2.33,-0.24l-0.8,0.21l-0.42,0.48Z"
                        data-code="BE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M467.37,761.27l0.82,-0.95l0.95,-2.17l1.24,-0.96l3.09,-0.99l1.23,-1.27l0.6,0.05l1.08,0.57l0.51,-0.04l0.35,-0.34l0.44,-1.15l-0.18,-1.04l0.1,-2.29l0.34,-1.07l0.24,-0.03l0.41,0.47l0.22,2.13l-0.31,3.82l0.26,0.79l0.7,1.12l0.41,7.09l-0.06,0.45l-2.01,3.69l-0.12,3.65l-0.25,0.85l-0.6,0.97l-1.03,2.98l-0.66,0.99l-2.15,-1.44l-1.44,-0.71l-0.96,-1.06l0.8,-1.11l0.2,-0.78l-0.24,-0.44l-2.04,-0.96l0.01,-0.46l0.51,-1.13l-0.22,-1.26l-0.41,-0.3l-1.24,-0.04l1.07,-1.47l0.06,-1.21l-1.58,-1.39l-0.21,-0.77l0.39,-0.5l0.84,-0.43l0.16,-0.57l-0.67,-1.09l-0.6,-0.2ZM334.27,716.57l0.62,-7.77l0.54,-3.46l0.77,-3.06l2.9,2.5l0.75,1.18l1.1,4.36l0.83,0.94l1.16,0.89l0.49,-0.01l0.11,-0.48l-0.46,-0.97l-0.8,-0.78l-1.22,-5.55l-0.81,-1.7l-1.34,-1.51l-3.86,-2.82l-0.27,-0.42l-0.09,-0.53l0.72,0.03l1.05,0.5l0.56,-0.45l-0.98,-3.56l-0.57,-7.56l-0.31,-0.33l-2.25,-0.31l-0.99,-0.42l-5.23,-3.17l-1.78,-3.26l-1.87,-2.49l-0.4,-0.96l0.03,-0.94l0.94,-2.26l-0.02,-0.35l-0.86,-1.47l-0.96,-0.44l-0.45,-0.45l0.51,-0.94l0.44,-0.63l0.86,-0.17l1.3,0.24l1.31,0.68l1.18,0.23l0.44,-0.25l-0.17,-0.48l-3.41,-1.95l-5.05,0.63l-1.72,-0.55l-0.25,-0.97l0.63,-0.57l0.66,-1.16l-0.05,-0.47l-0.75,-0.82l-1.14,-0.42l-2.89,0.21l0.67,-1.11l-0.12,-0.56l-0.73,-0.48l-2.6,0.42l-1.15,-0.35l-1.51,-1.53l-1.37,0.16l-0.87,-0.53l-0.91,-0.14l-0.6,0.13l-0.86,-0.78l-5.42,-1.72l-2.3,-0.21l-2.17,0.75l-0.91,-0.21l-0.73,-0.94l-0.91,-2.02l-2.94,-1.24l0.28,-0.39l1.49,-0.22l1.83,-0.65l0.84,-0.97l-0.09,-0.58l-1.43,-0.98l-1.1,-0.28l-0.54,-0.72l1.88,0.19l2.2,-0.22l0.25,-0.67l-0.82,-0.89l-1.51,-0.55l-1.79,-0.09l-0.89,0.3l-1.49,-0.09l-0.45,-1.38l0.49,-1.59l2.4,-1.53l6.28,-1.76l2.68,0.26l2.02,-0.33l2.4,-1.17l1.02,-0.96l3.04,-0.54l2.88,0.96l2.78,3.79l1.41,1.37l0.5,0.04l3.23,-2.21l4.66,0.06l0.91,1.14l0.69,-0.11l0.4,-1.04l0.64,-0.89l0.33,0.26l0.33,0.7l0.38,0.23l5.25,-0.22l0.92,-0.24l0.11,-0.72l-1.32,-0.87l-1.06,-2.05l-0.24,-8.12l-1.5,-2.48l-1.65,-3.65l-0.75,-2.13l0.11,-1.36l3.43,0.31l2.89,-0.79l1.06,0.42l-0.06,1.53l0.44,2.16l1.33,2.37l0.35,0.18l2.37,-0.11l2.66,0.69l3.28,0.11l5.03,1.18l2.18,-0.75l1.93,-1.44l3.73,-0.96l0.55,-0.7l-0.38,-0.6l-2.08,0.2l-1.74,-0.82l-0.2,-0.75l0.96,-2.77l5.65,-3.26l4.18,-1.0l4.36,-1.86l2.3,-1.97l1.51,-2.54l0.98,-0.91l0.1,-0.53l-0.49,-0.78l0.37,-9.34l0.38,-1.62l0.78,-1.3l1.22,-1.03l1.88,-1.13l7.17,-1.62l0.68,-0.39l0.91,2.43l-0.25,0.78l0.24,1.01l1.04,1.5l1.31,1.39l1.09,0.83l0.36,0.07l1.21,-0.37l1.31,-0.82l0.86,-0.2l0.81,0.82l0.66,1.35l0.2,1.52l0.44,1.48l0.82,0.62l2.14,0.17l1.47,0.43l0.27,0.27l0.53,2.7l0.37,0.56l0.57,0.07l0.75,-0.73l0.33,-0.04l2.14,0.23l1.15,0.28l1.54,1.38l-0.5,1.95l0.75,1.2l-0.08,0.63l-0.63,1.13l-0.02,0.47l0.23,0.48l0.48,0.36l2.78,0.39l2.64,-0.38l1.51,-0.89l0.82,-2.12l1.15,-0.96l0.14,0.09l-0.89,3.44l0.7,1.19l0.35,2.59l0.4,0.32l1.73,0.18l1.55,1.17l2.02,0.9l2.07,2.49l1.03,0.95l0.75,0.1l1.02,-0.37l2.11,-0.2l0.56,0.68l1.0,0.3l0.86,0.75l0.7,0.19l1.04,-0.19l0.75,-0.68l0.65,-0.23l0.63,0.07l1.34,0.83l0.7,-0.05l0.84,0.26l0.91,0.88l0.56,1.57l2.41,3.45l0.87,0.08l1.01,-0.96l0.31,-0.06l1.17,0.43l0.24,0.99l0.29,0.4l0.51,0.07l0.84,-0.24l1.24,0.28l3.11,-0.8l0.9,1.21l1.32,0.64l5.32,1.06l1.56,0.68l0.06,1.38l-4.08,5.17l-0.6,1.89l-0.4,2.77l-0.79,2.59l-1.22,2.56l-0.44,1.88l0.31,1.37l-0.19,1.86l-0.73,2.64l-0.14,2.09l0.68,1.69l-1.11,0.71l-0.93,1.7l-0.88,0.37l-1.62,0.02l-0.4,-0.76l-0.69,-0.41l-1.33,0.07l-1.26,0.82l-0.92,1.18l-0.05,0.4l0.29,0.66l1.04,0.49l-0.59,1.01l-3.55,4.13l-0.31,0.64l-2.89,1.62l-0.29,0.61l-0.36,3.2l-3.37,2.89l-1.4,3.71l0.83,1.17l-0.31,1.62l-0.69,0.69l-0.84,0.43l-0.22,0.36l0.02,1.24l0.26,0.37l0.65,0.2l1.25,-0.15l1.53,-0.9l1.1,-1.24l0.05,-0.45l-0.58,-1.09l1.13,-1.17l1.32,-0.66l1.9,-0.13l2.27,0.4l-0.07,0.63l0.23,1.09l0.4,0.73l-0.56,1.99l0.05,0.33l1.71,2.23l0.78,0.7l0.76,1.43l-0.87,0.9l-1.98,1.25l-0.23,0.8l0.05,0.88l0.34,0.79l0.96,0.73l1.81,3.3l1.74,1.74l-0.45,0.81l-0.48,1.93l-1.23,0.43l-1.73,1.42l-1.94,-0.13l-1.07,0.56l-0.2,0.39l0.1,0.96l0.83,1.06l0.71,2.02l0.98,0.8l2.2,0.66l0.63,2.08l-0.89,0.65l-1.59,3.18l0.64,1.71l-0.22,0.82l0.42,1.21l0.91,1.06l2.59,1.58l2.3,1.2l0.79,0.23l3.44,-0.73l0.4,1.16l-1.09,2.0l-1.48,1.92l0.08,1.79l-0.81,-0.18l-0.26,0.1l-0.47,0.73l-2.5,1.3l-4.33,4.15l-1.97,1.19l-0.54,0.88l-0.41,1.34l-1.07,1.05l-0.93,0.5l-2.59,0.59l-2.4,1.15l-1.16,-0.49l-2.85,0.05l-1.9,-1.47l-3.43,-0.9l-1.09,-2.02l-0.32,-0.21l-2.66,-0.08l-0.38,-0.19l-0.13,-1.19l-0.51,-0.38l-1.08,0.31l-1.01,0.05l-0.8,0.5l-0.8,-0.06l-0.3,0.45l-0.6,0.06l-4.44,-1.52l-2.06,-0.44l-0.69,-0.37l-0.73,-1.14l-1.16,-0.62l-2.13,0.7l-1.65,1.83l-7.11,4.99l-1.43,2.24l-1.51,3.07l-0.15,1.66l0.65,4.56l1.47,2.48l-2.59,-0.65l-1.27,0.19l-1.1,0.51l-1.61,0.42l-0.59,0.48l-0.23,0.67l-5.67,-1.43l-1.65,0.67l-0.82,0.54l-0.31,-0.05l-0.81,-1.21l-2.74,-1.31l0.33,-0.53l0.05,-0.58l-0.69,-0.9l-2.88,-0.72l-1.0,0.58l-0.79,-1.28l-0.93,-0.51l-1.23,-0.09l-2.65,-1.2l-3.33,-1.09l-0.98,-0.15l-0.8,0.43l-0.27,0.76l-0.12,1.69l-1.28,0.05l-1.87,-0.25l-1.59,0.13l-0.92,-0.48l-3.16,0.54l-2.05,-1.68l-1.47,-0.82l-0.75,-0.03l-0.76,0.36l-1.02,0.15l-1.27,-0.01l-2.48,-2.58l-2.3,-0.18l-4.56,-1.95l-0.09,-0.44l-0.51,-0.41l-0.46,0.22l-0.66,1.01l-0.36,-0.03l-0.39,-0.31l0.67,-1.19l0.26,-1.01l-0.04,-0.91l-0.19,-0.32l-0.97,-0.57l-2.09,-0.28l-1.07,-0.42l-0.43,-0.26l-0.43,-0.72l-0.01,-0.23l2.1,-0.62l2.07,-2.52l1.89,-8.61l1.35,-10.16l0.91,-1.75l1.14,-0.48l0.17,-0.6l-1.03,-1.42l-0.62,-0.03l-0.42,0.47ZM332.29,692.33l0.62,0.41l1.29,1.71l-0.17,0.6l-1.61,-2.11l-0.13,-0.61Z"
                        data-code="FR"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M662.06,779.7l0.29,-4.47l0.72,-1.97l-0.05,-0.73l-0.34,-0.49l-0.52,-0.26l-1.47,-3.96l-0.7,-0.68l-1.51,-0.6l-1.28,-0.79l-1.09,-1.05l-1.71,-2.22l0.72,-0.31l1.36,-2.03l0.19,-0.9l-0.22,-0.76l-0.64,-0.66l-0.42,-1.38l0.35,-1.45l0.03,-0.76l-0.32,-0.79l0.26,-0.66l0.98,-0.53l1.96,-0.1l0.31,-0.18l1.24,-1.83l0.8,-0.64l1.21,-1.55l0.5,-1.79l-0.16,-0.38l-1.53,-1.15l-1.32,-1.95l-2.83,-1.84l-0.67,-1.06l-0.35,-1.57l-1.06,-1.96l-0.32,-1.31l-0.05,-1.42l0.65,-2.45l2.31,-1.27l0.53,-2.35l0.69,-0.56l4.0,2.7l-0.42,0.66l-1.07,0.63l-0.66,0.92l-0.16,0.92l0.16,0.81l0.83,0.78l0.32,0.08l4.09,-0.73l4.13,0.37l5.62,1.25l3.78,0.44l2.81,-0.57l9.81,2.01l4.63,0.3l2.7,-0.78l1.88,-1.07l1.63,-2.0l3.74,-2.52l3.64,-1.42l4.81,-1.16l3.04,-0.38l4.52,2.7l1.98,0.06l1.32,0.37l0.46,0.53l0.53,0.26l1.96,-0.49l2.27,3.01l2.33,0.93l2.13,0.54l2.52,0.07l-0.28,3.98l-1.09,1.74l-1.9,-0.61l-2.52,0.58l-1.57,2.51l-1.43,1.52l-0.53,3.32l-0.1,4.8l-0.71,0.46l-1.03,0.31l-3.65,4.39l0.11,0.6l2.06,1.21l0.86,0.86l1.53,2.59l2.15,2.88l0.22,0.74l-1.32,-0.21l-0.64,0.1l-0.51,0.43l-1.75,-0.07l-1.67,0.7l-0.61,-0.36l-2.39,-2.37l-0.84,-0.35l-3.35,0.61l-1.82,1.24l-1.07,0.28l-2.65,0.24l-0.64,0.49l-0.8,2.02l-2.11,0.55l-0.45,0.52l-0.21,0.73l-1.3,-0.33l-1.48,0.47l-0.63,1.29l0.23,0.75l0.41,0.52l0.41,1.46l0.15,1.46l-0.2,0.68l-0.78,0.53l-1.79,0.65l-1.97,-0.3l-0.78,0.26l-2.65,0.28l-3.58,0.98l-1.53,-1.24l-1.96,-0.91l-1.99,-0.53l-1.14,0.56l-2.1,-1.36l-0.95,-1.84l-0.73,-0.28l-1.5,0.57l-4.42,-0.07l-0.37,0.29l-0.38,0.96l-1.79,0.09l-1.58,0.76l-1.64,0.45l-2.62,-0.21l-2.71,0.24l-1.28,1.13l-2.51,-0.18Z"
                        data-code="BG"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M554.96,499.02l-0.26,0.21l-1.99,-0.59l-2.46,-1.48l0.36,-2.9l0.46,-0.91l4.45,3.23l0.05,1.08l-0.59,1.37ZM521.15,486.08l-0.25,-0.86l0.75,-1.06l0.34,1.24l-0.84,0.67ZM520.72,481.07l0.03,2.28l-0.27,0.55l-0.4,0.36l-1.35,0.49l-1.27,0.77l-1.14,1.37l-0.39,1.71l0.87,1.56l1.46,0.74l0.31,1.95l-1.02,0.97l-3.08,1.13l-0.26,0.33l-0.33,2.81l0.1,2.25l-0.28,3.52l-1.98,0.78l-1.45,-2.95l-0.03,-1.37l-0.48,-1.53l-0.1,-1.38l-0.58,-2.16l-0.29,-0.28l-2.47,-0.6l-1.09,-0.06l-1.23,0.32l-1.45,-2.74l0.25,-3.16l-0.85,-1.81l-0.08,-1.45l-0.81,-0.98l-0.77,-0.37l-0.29,-1.34l0.57,-0.27l2.37,0.2l0.83,-0.18l0.63,-0.39l2.05,-3.19l0.14,-1.41l1.58,-0.25l0.68,0.87l-0.17,1.79l0.12,2.42l0.21,0.33l1.85,0.79l0.46,-0.28l0.84,-2.54l0.56,-0.67l0.16,-1.79l-0.3,-1.0l-0.45,-0.59l2.03,-1.76l2.32,-1.54l1.24,-0.07l1.34,0.37l1.87,0.92l0.26,0.48l-0.8,1.61l-0.27,1.06l0.58,3.36ZM517.36,499.11l2.2,0.61l0.74,0.77l-2.0,-0.19l-2.42,1.56l-0.39,-0.23l0.38,-0.94l0.82,-0.49l0.66,-1.08ZM504.45,502.62l2.48,1.52l1.74,-0.02l0.86,0.47l0.29,2.5l-0.82,0.43l-1.38,-0.15l-1.55,0.7l-5.34,-3.16l0.24,-3.35l2.23,-0.22l1.26,1.28ZM500.22,444.71l-0.32,0.34l-1.16,-0.52l0.46,-0.65l2.1,-0.44l-0.67,0.58l-0.4,0.68ZM495.93,505.32l-0.8,-1.92l0.9,-1.17l0.6,-1.35l1.52,-2.01l-2.22,6.44ZM468.61,501.67l-0.42,-3.06l-0.75,-1.79l0.93,-0.36l0.25,-0.4l-0.25,-4.11l-0.49,-2.2l-3.84,-2.45l-2.69,-2.0l0.93,-8.99l-1.09,-3.94l0.56,-11.09l1.11,-0.15l2.53,1.23l1.03,0.14l0.64,0.97l1.01,0.6l0.54,-0.17l0.67,-1.33l0.23,-1.94l1.95,-2.52l2.06,-1.26l1.51,2.01l0.44,0.17l0.3,-0.36l0.79,-7.67l-0.25,-0.42l-1.96,-0.8l-1.91,0.69l-1.78,3.39l-1.35,3.83l-2.06,0.33l-1.75,1.05l-2.33,-1.9l-0.02,-1.3l0.21,-0.81l1.89,-3.21l2.46,-2.99l2.43,0.03l2.03,-1.02l1.03,-0.11l3.53,0.22l2.12,-0.8l1.72,-1.56l3.52,-6.16l1.89,-2.46l4.05,-0.96l3.66,-2.92l-1.29,1.68l-0.51,2.25l1.24,2.99l-0.25,1.7l0.09,3.29l-1.16,1.76l-1.3,3.68l-0.63,0.77l-0.18,9.37l1.46,1.9l1.55,0.93l4.82,0.03l0.88,1.58l-0.87,3.34l-1.29,1.2l-1.67,0.9l-0.82,0.03l-1.39,-1.7l-0.57,-0.05l-0.78,0.66l-0.82,1.1l-1.25,5.05l-0.57,3.25l-0.65,-0.38l-1.22,-0.04l-1.74,0.85l-0.08,0.65l0.75,0.69l0.67,1.01l-0.16,0.3l-1.36,0.71l-1.2,1.36l-0.52,1.04l-1.54,1.26l-0.95,1.54l1.01,5.62l-0.33,1.28l-1.81,2.03l-0.77,1.94l0.38,0.54l1.53,-0.02l0.85,0.36l0.51,0.47l0.44,0.55l-0.3,0.95l0.36,1.86l-1.27,-0.61l-1.64,0.37l-2.05,0.77l-0.95,-0.03l-0.98,-0.85l-3.84,-1.23l-2.9,-0.16ZM494.77,485.66l2.19,6.48l-0.41,1.1l0.28,1.73l-0.27,1.44l-1.98,1.73l-2.24,0.08l-2.46,-0.89l-3.43,-1.7l-0.24,-0.84l-0.54,-0.65l-0.92,-2.91l0.02,-3.41l1.58,-0.42l3.82,-1.75l0.68,0.21l1.14,0.97l1.1,0.05l1.66,-1.24ZM494.13,480.94l-0.33,-0.13l-0.07,-1.28l0.31,-1.35l-0.31,-1.36l1.08,1.96l-0.68,2.15ZM490.71,502.3l1.01,0.29l0.71,0.49l-0.45,0.12l-0.83,-0.41l-0.43,-0.49ZM483.61,498.7l2.32,1.66l0.74,1.8l-0.88,0.21l-0.75,-0.53l-1.03,-0.17l-0.39,-2.96Z"
                        data-code="DK"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M540.53,702.53l1.22,0.52l4.01,-0.12l0.91,-0.6l1.57,-2.69l0.23,0.7l0.58,0.78l1.14,1.22l0.99,0.7l1.07,0.16l0.65,-0.44l0.53,-0.1l2.0,0.9l1.91,0.21l1.5,-0.52l0.25,-0.47l-0.74,-2.08l0.06,-0.41l0.76,-0.54l0.17,-0.39l-0.15,-0.5l-0.89,-0.91l2.12,-1.11l2.28,-0.7l0.64,-0.83l0.33,-2.44l-0.13,-1.33l-0.95,-1.3l0.14,-0.89l0.26,-0.4l1.9,-0.62l3.0,-1.43l0.95,-1.31l0.34,-0.13l1.86,0.07l0.48,-0.66l-0.21,-1.73l0.87,-0.67l1.2,0.17l1.86,0.75l2.35,1.32l1.59,1.44l0.9,1.62l1.32,1.39l1.63,0.96l1.18,1.17l1.02,1.66l1.3,0.88l1.77,0.25l0.87,0.44l0.48,0.89l0.9,0.8l1.45,0.77l2.3,0.44l4.38,0.11l1.08,0.21l2.53,-0.91l1.72,-2.04l0.65,0.11l1.95,-0.41l-0.06,0.46l-0.61,0.48l-0.1,0.51l0.73,1.3l0.66,1.99l-0.32,1.28l0.67,1.0l0.98,0.43l-0.49,0.98l0.08,1.58l1.31,1.29l3.14,1.32l0.66,0.66l0.14,0.41l-2.13,0.11l-0.84,-0.49l-0.59,0.26l-0.1,0.64l-0.63,0.2l-0.28,0.45l0.49,3.06l-0.16,0.7l-0.63,-0.04l-0.37,0.18l-0.19,0.82l-0.37,0.03l-1.26,-0.31l-0.48,-0.44l-0.13,-1.17l-0.45,-0.95l-1.47,-1.2l-2.31,-0.16l-2.74,-0.92l-2.11,0.26l-1.82,-0.41l-1.86,1.23l-0.56,-0.01l-1.55,-1.44l-0.69,-0.2l-2.03,0.81l-2.45,-0.83l-0.89,-0.13l-0.74,0.25l-0.95,-0.25l-2.74,-1.97l-0.5,0.03l-1.6,1.42l-3.35,-0.36l-0.33,0.12l-1.05,1.05l-1.23,2.02l-0.75,0.73l-0.54,-0.22l-0.92,-0.81l-1.73,-2.23l-1.03,-0.53l-1.29,-0.12l-0.89,0.25l-0.64,0.56l-0.8,6.43l-0.02,1.77l0.15,0.31l1.92,1.58l2.27,2.72l0.74,0.36l1.42,5.59l1.25,1.88l3.93,3.98l1.7,2.56l5.03,4.91l2.25,0.92l0.2,0.26l0.02,1.77l0.32,0.95l1.52,2.04l2.97,2.86l0.35,0.86l-0.53,0.37l-3.21,-3.09l-2.74,-1.81l-3.21,-3.45l-4.07,-1.33l-2.77,-1.47l-1.94,0.18l-1.87,0.46l-1.04,0.01l-0.62,-0.2l-0.43,-0.68l0.07,-0.66l-0.23,-1.18l-1.64,-1.49l-2.27,-1.44l-2.07,-1.79l-4.21,-4.91l-0.62,-1.16l1.07,-0.13l0.64,-0.29l1.03,-0.01l1.33,0.32l0.45,-0.21l-0.09,-0.48l-2.73,-2.12l-3.85,-4.11l-1.1,-1.86l-0.13,-2.01l0.29,-2.9l-0.72,-2.27l-3.1,-2.87l-1.26,-1.54l-2.23,-0.86l-1.17,0.06l-0.32,0.2l-0.64,1.19l-0.42,2.29l-3.54,5.99l-0.91,-0.0l-1.53,-2.81l-1.51,-2.21l-0.34,-2.31l-1.11,-4.59l0.29,-0.24l0.5,0.57l3.57,0.94l1.06,-0.45l0.68,-1.02ZM583.9,749.49l0.22,-0.0l0.37,0.18l-0.59,-0.18ZM585.83,750.3l4.5,2.14l-1.03,-0.23l-3.48,-1.91ZM591.15,752.63l0.21,-0.05l-0.02,-0.51l-0.36,-0.41l0.3,-0.1l0.55,0.16l0.59,1.06l2.4,1.66l-2.2,-1.45l-1.47,-0.36ZM598.83,757.38l1.49,0.61l0.07,0.58l-0.84,-0.58l-0.72,-0.6ZM573.91,745.84l0.82,-0.12l1.61,0.25l0.73,0.75l1.83,0.21l-1.98,-0.05l-1.67,-0.37l-1.34,-0.68ZM577.1,750.17l1.82,0.38l1.91,-0.23l1.77,0.43l-1.8,-0.21l-1.62,0.56l-1.33,-0.28l-0.74,-0.64ZM578.23,744.14l-2.02,0.05l-1.74,-0.32l-0.63,-0.4l0.03,-0.19l0.17,-0.5l1.74,0.08l3.02,0.55l0.37,0.32l-0.94,0.4ZM552.34,719.61l1.55,1.4l1.43,1.85l1.28,1.21l-0.34,0.31l-3.0,-2.95l-0.35,-1.02l-0.57,-0.81ZM551.12,716.23l-1.1,-0.31l-0.1,-0.25l0.21,-0.49l0.33,0.02l0.67,1.03ZM550.91,712.03l-0.95,0.23l-1.06,-1.3l-1.24,-0.17l-0.69,-0.69l0.92,-0.75l0.51,-1.07l2.51,3.76ZM545.03,709.15l0.08,0.85l-0.23,-0.75l0.15,-0.1ZM545.54,711.47l0.91,1.08l-0.18,1.84l0.2,2.75l0.25,0.98l-1.57,-4.47l-0.1,-0.56l0.44,-0.62l0.04,-1.0Z"
                        data-code="HR"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M430.52,589.48l0.97,-0.07l2.67,-2.47l0.09,-0.38l-0.17,-0.43l-0.63,-0.32l-0.02,-0.54l1.21,-2.81l0.46,-2.14l-0.12,-1.07l-1.34,-2.34l-0.02,-0.74l-1.91,-2.83l0.0,-0.59l0.61,-0.52l1.94,-0.95l1.59,0.59l0.75,0.54l0.42,0.03l0.89,-0.68l1.27,0.06l3.04,-1.25l0.65,-0.78l0.41,-1.07l-1.19,-1.45l0.09,-0.61l1.65,-1.1l1.69,-1.57l0.67,-1.48l0.24,-2.68l-0.54,-1.13l-0.46,-0.56l-0.36,-0.14l-1.7,0.04l-0.97,-0.42l-0.5,-0.63l-0.1,-0.44l0.34,-0.98l-0.14,-0.82l0.27,-0.19l3.46,0.01l0.6,-0.57l0.3,-2.24l0.88,-3.13l0.86,-1.85l0.25,-7.2l-0.67,-1.24l-1.26,-1.07l0.68,-3.81l1.26,-2.09l0.9,-0.52l4.55,-0.36l4.92,0.14l1.91,3.01l-0.7,1.53l0.15,0.5l1.25,0.8l0.39,0.02l0.6,-0.29l0.21,-0.24l0.87,-3.24l1.24,0.97l0.46,0.7l0.03,2.62l0.37,0.39l0.42,-0.34l0.59,-3.71l-0.43,-2.68l0.29,-2.41l1.01,-1.82l3.66,0.85l4.04,-0.45l1.39,0.86l3.63,4.91l1.35,0.86l1.5,0.25l0.45,-0.27l-0.2,-0.48l-1.99,-1.0l-4.4,-5.97l-1.45,-0.79l-1.93,-0.22l-1.11,-0.52l-0.67,-0.77l-0.19,-0.67l-0.05,-6.23l-0.75,-0.9l-1.15,-0.44l-0.85,0.39l-0.78,0.0l-0.18,-0.95l0.21,-0.71l2.27,-0.64l1.73,-0.97l0.2,-0.33l0.07,-1.65l-1.1,-1.54l-1.22,-2.36l-1.42,-2.2l-0.13,-2.09l2.64,0.13l3.72,1.2l1.13,0.91l1.33,0.01l2.1,-0.79l1.37,-0.31l0.62,0.45l0.82,0.2l0.3,0.43l1.87,0.59l1.6,2.28l0.08,1.92l-2.05,2.39l-0.08,0.45l0.4,0.23l3.43,-0.34l0.85,1.63l0.47,0.18l1.84,-0.63l4.88,2.75l0.36,0.02l3.37,-1.4l0.56,1.86l-0.69,2.09l-2.61,2.38l-0.1,0.44l0.59,1.51l1.08,0.56l2.63,-0.28l3.91,1.46l0.33,-0.03l0.93,-0.54l3.21,-3.39l1.18,-0.67l4.19,-0.52l0.3,-0.2l0.74,-1.27l1.74,-1.37l1.1,-1.45l2.51,-2.63l5.75,1.25l1.62,2.93l4.08,3.29l3.74,-0.18l1.2,2.79l0.69,3.98l2.21,2.01l3.07,0.85l0.5,3.73l1.57,6.19l-0.05,1.81l-0.55,2.02l-0.95,1.66l-1.28,0.95l-0.84,1.21l-0.2,1.41l1.83,2.5l3.48,3.02l1.31,2.4l-0.62,2.01l-0.21,1.81l0.32,1.14l0.57,0.81l0.87,0.64l0.27,0.73l-0.16,1.17l0.17,1.01l0.6,0.68l-0.99,3.62l-1.01,1.83l0.33,1.44l1.36,2.39l0.15,0.59l-0.36,1.71l0.21,0.69l2.55,1.47l0.3,0.46l1.06,3.83l-0.69,3.28l-0.61,1.82l-1.6,3.52l-0.29,0.35l-0.32,0.04l-1.13,-0.64l0.12,-1.06l-0.89,-1.06l-0.34,-1.02l-0.67,-0.4l-2.47,-0.58l-0.78,0.18l-0.57,0.76l-0.03,0.37l0.63,1.12l0.82,0.67l-2.02,0.72l-1.4,0.81l-1.38,0.49l-1.32,0.83l-2.59,0.93l-2.08,0.3l-0.56,0.43l-0.69,1.52l-0.23,0.16l-0.95,-0.35l-1.0,0.78l-1.04,0.35l-0.68,1.25l-2.05,0.39l-0.3,0.26l-0.68,1.48l-2.3,-0.48l-1.01,0.49l-2.21,0.38l-1.39,1.01l-1.28,1.63l-0.71,1.41l-0.39,-0.81l-1.35,-1.45l-0.75,-0.1l-0.34,0.18l-0.19,0.41l0.03,0.87l0.52,1.17l0.63,0.8l0.51,1.74l1.03,1.25l1.43,0.9l0.93,0.84l0.66,1.12l-0.15,0.59l-1.44,2.36l-0.03,0.37l0.32,0.67l1.2,1.48l1.76,3.68l0.7,1.04l1.86,1.85l1.5,0.08l1.31,1.32l1.63,2.16l1.18,0.97l0.85,0.33l0.58,0.65l0.91,1.79l0.82,0.55l1.28,-0.07l1.73,1.59l1.6,2.01l-0.17,2.9l-0.15,0.56l-0.71,0.79l-0.49,0.25l-2.32,-1.09l-0.46,0.08l-0.47,0.56l-0.67,3.4l-0.4,0.56l-0.62,0.54l-3.19,1.12l-2.56,1.48l-1.17,0.9l-0.82,1.19l-0.01,1.07l2.56,3.67l0.01,1.45l-0.75,1.71l0.22,0.48l1.69,0.42l0.19,0.61l-0.42,3.13l-1.34,-0.53l-0.88,-0.67l-0.25,-0.3l0.14,-0.9l-0.34,-0.65l-1.33,-0.77l-2.78,0.61l-0.64,-0.55l-0.98,-0.45l-2.11,-0.61l-0.61,0.29l-0.13,1.7l-6.22,0.72l-1.94,0.68l-1.45,0.89l-1.01,0.37l-0.43,0.65l-0.88,0.6l-0.9,0.17l-0.55,-0.17l-1.89,0.6l-0.58,-0.07l-1.08,-1.3l-0.22,-0.73l-0.38,-0.43l-1.71,-0.08l-1.23,-0.47l-2.31,0.11l-0.52,-0.17l-0.6,0.39l-0.4,2.58l-0.43,0.93l-0.69,0.96l-1.06,0.53l0.2,-1.15l-0.25,-0.46l-1.53,-0.42l0.04,-0.69l-0.67,-1.05l-2.74,-1.63l-1.22,-0.47l-0.44,0.1l-1.12,0.86l-1.25,-0.15l-0.38,0.13l-4.42,-2.82l-4.12,0.21l-0.69,-0.89l-0.86,-0.27l-0.55,0.32l-1.4,-1.25l-0.76,-0.28l-1.2,0.23l-1.13,0.86l-0.44,0.88l0.1,0.79l0.75,0.49l0.66,-0.02l-0.68,0.41l-0.31,0.08l-1.19,-0.33l-1.76,0.0l-1.52,0.63l-2.17,0.24l-3.01,-0.12l-1.57,-0.64l-0.4,-1.11l0.12,-1.89l0.74,-2.69l0.21,-1.96l-0.32,-1.3l0.41,-1.74l1.21,-2.53l0.81,-2.65l0.41,-2.83l0.55,-1.72l4.06,-5.1l0.02,-2.07l-0.27,-0.36l-1.85,-0.78l-5.27,-1.05l-1.02,-0.45l-0.95,-1.28l-0.31,-0.16l-0.79,0.01l-2.62,0.78l-1.16,-0.28l-0.93,0.15l-0.43,-1.19l-1.76,-0.61l-0.56,0.12l-0.6,0.69l-0.39,0.27l-0.23,-0.05l-2.06,-3.12l-0.64,-1.68l-1.19,-1.1l-1.24,-0.33l0.42,-2.45l0.36,-0.88l1.1,-1.46l0.03,-1.99l-0.31,-0.35l-2.09,-0.79l-0.85,-0.66l-1.52,-2.05l-0.35,-1.15l-0.02,-1.17l0.84,-2.71l2.47,-1.7l0.17,-0.39l-0.31,-2.84l-0.72,-0.97l-1.3,-0.38l-0.21,-0.31l-0.06,-0.22l0.78,-0.93l-0.06,-0.57l-1.04,-0.81l-0.55,-0.96l-1.52,-1.24l0.67,-3.48l-0.68,-1.1l-0.7,-0.49l-0.82,-0.26l-0.3,-0.54ZM542.83,524.91l0.1,0.73l-1.73,0.25l-1.34,-0.3l-0.24,-1.05l0.18,-1.56l-1.23,-1.42l-0.06,-0.63l4.44,3.5l-0.12,0.48ZM536.23,514.51l0.19,1.47l-1.39,-1.07l-1.53,0.02l-0.36,0.24l-0.82,1.84l-0.29,0.04l-2.15,-1.69l-0.38,-1.4l0.28,-3.31l0.73,-1.0l0.1,-1.16l1.11,-1.16l0.7,-0.03l0.33,0.98l0.56,0.8l2.03,0.99l0.19,0.27l0.09,0.3l-0.82,1.0l-0.34,0.88l0.45,1.11l1.32,0.9ZM503.24,513.06l-1.47,0.03l-0.67,-0.79l-0.58,-0.24l0.24,-0.64l0.29,-0.22l1.65,0.62l0.53,1.24ZM463.5,503.23l0.05,-1.19l0.23,-0.56l0.12,0.74l0.37,0.33l2.12,0.12l-2.59,0.32l-0.31,0.24ZM466.68,506.44l-0.26,0.28l-0.98,-0.05l-0.38,-0.28l0.57,-0.5l0.39,-0.05l0.56,0.18l0.1,0.42Z"
                        data-code="DE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M580.15,707.05l2.68,1.89l1.16,0.3l0.81,-0.25l0.75,0.11l2.54,0.85l0.75,-0.09l1.33,-0.72l2.09,1.62l1.06,-0.05l1.55,-1.14l1.71,0.39l2.05,-0.28l2.67,0.91l2.34,0.17l0.97,0.84l0.38,0.79l0.25,1.39l0.83,0.7l1.42,0.35l1.5,-0.11l1.3,-0.56l1.28,-0.25l1.19,0.48l-0.23,1.56l-0.56,1.54l-1.92,3.28l-0.27,0.93l-0.18,2.47l0.5,1.2l1.23,0.56l1.38,0.98l3.19,3.3l-0.0,0.29l-0.25,0.24l-1.18,0.15l-2.09,-0.26l-0.66,0.29l-0.31,0.35l-0.07,0.42l3.28,4.9l0.08,0.98l-0.18,0.77l-0.21,0.34l-1.05,-0.55l-0.88,0.04l-0.85,0.27l-0.68,0.8l-1.39,0.28l-1.33,-0.42l-0.69,0.39l-0.24,1.02l1.26,2.52l-0.09,0.8l-0.77,-0.92l-0.67,-0.18l-0.84,0.13l-2.52,2.33l-0.72,2.03l0.01,1.54l-1.66,0.3l-0.53,0.44l-0.22,0.55l0.27,3.74l1.05,1.97l0.03,0.43l-1.04,1.13l-1.65,-0.64l-2.39,-1.64l-3.77,-2.81l-0.73,-1.17l-0.84,-0.25l-1.04,0.28l-0.39,-0.27l0.55,-0.64l-0.1,-0.86l-0.43,-0.78l-3.0,-2.88l-1.42,-1.91l-0.2,-0.59l-0.1,-2.08l-0.52,-0.59l-2.14,-0.84l-4.93,-4.82l-1.7,-2.56l-3.91,-3.95l-1.11,-1.63l-1.12,-4.83l-0.38,-0.96l-0.86,-0.5l-2.23,-2.68l-1.85,-1.53l0.68,-7.55l0.3,-0.29l0.72,-0.2l0.87,0.08l0.73,0.34l1.74,2.24l1.0,0.88l0.96,0.41l0.43,-0.09l0.97,-0.95l1.24,-2.03l0.88,-0.88l3.34,0.36l1.8,-1.42Z"
                        data-code="BA"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M573.97,659.39l1.36,-1.19l0.31,-0.04l0.62,0.19l1.3,1.02l0.65,0.22l0.75,-0.31l1.89,-0.01l1.35,-0.25l0.31,-0.49l-0.47,-2.54l0.09,-0.51l0.54,-0.7l0.14,-1.14l0.82,-0.75l1.21,0.14l0.49,0.25l2.14,2.02l2.13,1.6l1.95,0.88l5.24,0.14l7.85,-0.48l0.32,-0.2l0.73,-1.34l-0.35,-1.08l0.02,-0.76l0.48,-1.05l1.48,-0.91l4.67,-0.44l2.81,-0.78l0.65,-1.22l0.78,-0.89l0.58,-0.15l2.39,1.34l1.51,0.48l5.93,-3.36l2.24,-4.74l1.8,-0.41l2.92,0.08l2.82,0.82l1.75,-0.1l2.56,-0.88l0.72,0.02l1.4,1.06l1.11,1.87l1.02,1.16l0.79,0.28l4.87,-1.12l0.36,-0.25l1.14,-0.11l0.82,2.29l0.51,0.73l1.17,0.4l1.17,0.69l0.97,1.52l1.38,0.63l1.11,-0.09l0.79,0.82l0.2,0.43l-0.12,0.68l0.28,1.0l-2.45,2.64l-0.83,0.59l-0.44,0.1l-1.06,-0.24l-1.0,0.2l-0.96,0.55l-0.96,0.27l-2.41,3.12l-0.96,0.68l-0.6,0.71l-0.15,2.29l-1.64,1.74l-1.17,3.36l-1.72,2.0l-0.13,1.57l-2.12,3.43l-0.24,0.95l0.21,0.74l-2.31,1.85l-0.94,2.45l0.14,1.32l-0.95,0.53l-0.53,1.65l-1.26,1.0l-2.6,-0.32l-1.19,0.27l-0.9,1.55l-0.97,0.62l-1.53,-0.61l-3.08,0.66l-0.46,0.34l-1.03,-0.52l-3.08,-0.38l-1.3,0.3l-3.01,-0.44l-1.3,0.28l-1.64,1.86l-1.88,1.16l-0.82,0.31l-0.64,-0.04l-0.71,-0.5l-0.4,-0.04l-0.48,0.32l-0.56,0.81l-1.04,0.48l-1.32,0.41l-2.47,0.21l-1.68,2.06l-2.17,0.77l-0.89,-0.21l-4.41,-0.11l-2.03,-0.37l-1.27,-0.67l-0.81,-0.72l-0.58,-0.99l-1.19,-0.58l-1.57,-0.18l-1.14,-0.77l-0.95,-1.58l-1.34,-1.31l-1.54,-0.89l-1.18,-1.22l-0.99,-1.74l-1.75,-1.57l-3.02,-1.6l-1.75,-2.57l-0.0,-0.88l-0.66,-0.85l-0.33,-1.94l-0.39,-0.72l-0.33,-0.2l-1.68,-0.08l1.48,-1.48l0.92,-0.52l1.34,0.06l0.6,-0.43l0.55,-2.37l-0.15,-0.56l-0.64,-0.31l-0.21,-1.14l0.59,-1.14l-0.32,-2.08l0.81,-0.11l1.52,-0.89l0.86,-1.94l-0.48,-1.76l-0.25,-0.25l-2.5,-0.85Z"
                        data-code="HU"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M831.52,949.1l0.58,-3.75l0.44,-1.69l0.83,-1.68l-0.37,-3.48l0.04,-1.82l0.5,-2.26l-0.28,-2.5l0.23,-3.56l0.41,-0.71l1.55,-0.7l0.59,-0.08l1.29,0.3l0.72,0.65l1.37,2.1l2.34,0.77l2.13,1.76l1.5,0.42l4.88,0.65l26.06,-16.74l3.62,13.32l-0.67,0.21l-0.26,0.5l0.81,2.68l0.5,0.27l2.42,-0.64l0.41,1.14l-3.77,3.56l-0.39,0.16l-27.16,8.02l-0.18,0.65l7.06,7.67l6.48,7.64l-4.17,2.52l-2.33,5.15l-9.58,2.0l-0.86,0.61l-3.15,5.31l-5.4,4.48l-0.55,0.12l-13.96,-2.45l0.34,-1.63l-0.11,-1.17l1.27,-6.52l0.98,-2.53l0.02,-4.51l4.02,-11.13l-0.49,-1.73l0.27,-1.39Z"
                        data-code="JO"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M466.68,857.43l0.21,1.11l-1.91,1.1l-1.15,2.27l-1.81,1.41l-0.47,0.77l0.23,0.74l1.18,0.62l0.49,1.18l-1.38,8.28l0.01,1.22l0.97,2.56l0.14,1.12l-0.17,2.95l1.02,3.29l-1.03,1.83l-0.52,1.83l-0.43,4.05l-1.56,2.64l-0.98,0.79l-2.8,1.68l-1.33,2.64l-2.56,2.07l-0.62,0.8l-0.32,1.89l0.06,2.42l0.5,2.03l1.26,2.74l1.09,2.99l0.36,1.65l0.53,0.67l4.21,2.32l0.43,0.47l1.29,2.01l1.24,3.64l0.54,2.68l4.74,3.75l4.51,3.25l0.26,0.4l6.36,28.86l-2.6,1.66l-0.12,0.53l3.2,5.0l1.26,2.45l1.42,4.12l1.0,3.91l0.29,2.24l-0.36,6.31l0.62,8.2l-250.76,0.0l0.0,-9.15l0.21,-1.23l1.33,-0.75l3.96,-3.28l3.6,-2.35l4.25,-3.37l0.73,-0.35l1.98,-0.32l3.41,-2.85l1.14,-0.64l3.72,0.29l2.99,0.51l0.69,-0.17l0.64,-0.54l0.61,-0.87l0.32,-2.33l3.51,0.14l2.92,-0.33l3.15,-0.6l4.43,-1.38l2.23,-1.66l1.59,-1.74l2.87,-4.67l2.45,-1.3l6.17,-2.3l4.58,-3.38l3.74,-0.48l0.72,-0.43l0.65,-0.84l-0.07,-1.31l-0.77,-0.81l-1.94,-1.09l0.22,-1.59l0.36,-0.97l-0.1,-1.2l-0.72,-2.05l0.23,-1.21l1.4,-0.48l1.34,0.2l2.32,-0.3l5.73,-2.07l0.65,-0.91l0.73,-2.54l0.67,-0.37l5.54,-0.87l15.89,0.66l0.84,-0.33l0.24,-0.37l-0.02,-1.03l-0.46,-1.6l0.24,-0.85l2.27,-2.01l0.11,-0.47l-0.72,-1.49l-3.29,-2.45l-1.25,-1.24l-0.75,-1.39l-0.54,-3.1l-1.04,-1.87l-0.69,-2.06l0.63,-3.94l-0.98,-2.61l-0.14,-0.99l0.29,-3.4l-0.19,-3.04l-1.12,-3.1l0.75,-1.72l-0.2,-0.7l-1.0,-0.96l-0.34,-0.63l0.71,-1.69l-0.01,-0.69l-4.68,-3.87l-0.72,-0.88l-0.18,-0.57l2.12,0.25l1.51,-0.15l3.37,-1.51l2.63,-2.02l2.1,-1.11l1.75,-2.16l1.55,-1.34l2.26,-1.47l6.57,-3.18l0.86,-0.02l2.3,0.73l2.13,-0.32l1.4,-1.25l1.37,-2.65l2.09,-1.6l2.71,-1.65l3.72,-1.58l2.46,-1.47l3.79,-1.25l9.68,-0.81l4.98,-0.72l3.36,0.16l3.65,-2.39l1.61,-0.72l7.35,-0.18l3.59,-1.71l13.12,-0.0l1.53,0.54l1.53,0.89l2.81,2.27l1.59,0.49l1.83,-0.49l4.04,-2.08l4.64,-1.12l2.5,-1.26l1.15,-1.85l1.75,-0.55l1.23,1.33l4.77,1.42l3.1,-0.39l1.36,-0.44l0.26,-0.47l-0.33,-1.52l2.46,0.45l2.28,0.97l2.45,1.99l1.77,0.48l3.11,-0.91l5.73,-0.43Z"
                        data-code="DZ"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M795.47,887.17l1.26,-0.3l0.28,-0.24l0.63,-1.62l0.18,-1.53l4.6,0.73l2.05,0.09l2.1,-0.31l6.25,-2.01l1.81,-1.22l3.23,-1.46l-7.04,5.0l-0.61,1.93l0.32,1.03l0.42,0.57l-0.81,-0.29l-1.27,0.77l-1.5,0.46l-1.87,-0.33l-0.57,0.29l-0.13,-1.16l-0.43,-0.66l-0.66,-0.48l-1.98,0.03l-0.72,-0.25l-1.82,0.45l-2.09,0.94l-1.61,-0.44Z"
                        data-code="_1"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M322.87,627.69l-0.04,0.58l-0.56,-0.31l-1.5,0.11l0.1,-0.9l1.39,0.17l0.62,0.36Z"
                        data-code="JE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M730.74,49.41l3.04,4.0l2.03,2.01l5.27,3.58l4.53,2.3l2.5,7.41l-1.21,2.89l-2.89,4.06l-2.47,4.41l-0.16,2.38l0.8,2.22l0.79,1.18l-5.04,3.34l-2.02,0.89l-0.2,0.53l0.54,1.2l0.34,0.24l3.32,0.25l0.65,0.69l0.05,0.83l-0.33,1.5l-3.69,8.68l-0.15,1.95l1.23,5.19l1.7,5.92l9.02,4.84l2.41,4.73l4.03,6.3l2.1,2.31l0.09,0.55l-0.61,4.16l-4.97,7.82l-4.47,7.99l-2.13,4.38l-0.32,2.91l0.41,1.66l2.71,5.27l2.31,5.56l1.07,3.11l0.64,2.85l1.09,2.72l3.14,6.19l2.49,10.08l0.2,1.93l-0.08,1.19l-0.62,0.25l-2.05,0.26l-2.15,0.96l-0.32,0.56l0.06,0.37l1.27,1.65l-1.18,3.04l-0.18,4.35l-1.28,2.24l-0.17,0.79l0.12,0.62l0.47,0.52l2.24,0.57l0.13,1.56l-0.18,1.0l-1.15,0.84l-1.43,1.5l-0.29,1.21l0.03,1.19l0.48,1.95l0.87,2.11l1.17,1.43l3.95,1.32l0.41,0.82l0.2,1.31l-0.07,1.23l-1.77,2.66l-0.04,1.39l1.66,5.0l3.94,2.79l1.23,1.33l0.31,1.02l0.18,1.77l-0.02,1.93l-0.28,1.66l-3.89,6.54l-2.72,1.67l-0.32,0.55l0.02,0.38l0.91,1.47l4.93,5.64l7.58,6.2l2.73,2.72l2.1,4.17l2.33,3.36l0.33,0.89l-0.03,0.93l-1.28,3.18l-2.05,6.14l-1.31,2.49l-3.38,4.58l-5.04,5.74l-3.52,4.71l-8.34,11.97l-2.68,2.9l-3.26,4.42l-6.92,6.41l-1.07,1.6l-3.47,2.96l-8.18,9.89l-0.51,0.14l-1.17,0.87l-1.85,0.21l-0.83,0.61l-2.74,-1.86l-0.83,-0.18l-1.91,0.59l-1.6,1.4l-3.06,0.45l-1.55,0.48l-0.55,0.36l-0.11,-0.89l0.4,-1.93l0.7,-1.47l0.06,-0.89l-0.47,-0.42l-0.5,0.09l-0.29,0.22l-1.0,2.01l-0.54,2.33l-0.91,1.0l-2.03,0.42l-2.14,-1.76l-1.35,-0.07l-0.35,0.58l0.67,1.32l0.4,1.7l-1.07,-0.03l-1.36,0.88l-1.15,1.23l-0.14,0.0l-0.69,-1.56l-0.56,-0.18l-1.47,0.84l-1.23,1.1l-2.65,0.44l-1.46,1.42l-2.54,0.94l-1.54,0.0l-3.37,1.2l-1.28,1.94l-0.73,0.51l-1.43,-0.51l-4.31,0.9l-4.08,1.17l-1.64,-0.06l-1.71,-0.48l-0.37,0.09l-1.89,1.67l-1.9,2.11l-1.94,0.7l-0.2,-0.07l0.36,-0.67l1.46,-1.24l0.99,-1.61l0.19,-1.51l-0.15,-0.35l-0.68,-0.53l-0.96,-0.22l-1.03,-1.23l-1.09,-2.96l-0.27,-0.25l-0.61,-0.17l-0.48,0.24l-0.33,0.88l-0.33,2.26l-0.81,1.01l-1.22,0.7l-2.11,-0.03l-0.23,-1.21l0.43,-1.49l-0.3,-0.54l0.19,-0.62l1.1,-0.16l0.65,-1.03l-0.03,-0.75l-0.32,-0.38l-0.7,-0.25l0.84,-2.1l0.12,-0.59l-0.25,-0.46l-0.63,-0.11l-0.43,0.18l-3.37,-0.63l-4.33,-2.69l-0.98,-0.16l-0.59,-2.19l-0.5,-0.28l-1.22,0.4l-1.27,1.18l-0.96,-0.89l-1.11,-0.64l-0.28,-0.91l-0.09,-3.58l-0.59,-5.55l0.22,-2.46l0.96,-1.84l0.41,-1.28l0.48,-3.18l0.11,-3.71l-0.23,-1.7l0.42,0.0l0.39,-0.49l-0.17,-0.72l-0.66,-1.07l0.82,-0.11l0.37,-0.29l0.18,-0.9l-0.72,-2.1l-0.1,-1.07l-2.19,-6.11l-1.7,-2.12l1.29,-6.59l-0.13,-1.68l-0.39,-2.15l-2.04,-1.99l-0.82,-5.97l0.19,-1.88l0.33,-1.44l0.67,-1.42l3.53,-4.71l0.27,-2.35l2.07,-0.16l0.33,-0.58l-1.09,-2.18l-0.29,-2.29l2.99,-0.87l1.48,0.77l3.16,-1.08l2.7,-2.0l0.16,-0.34l-0.05,-1.06l-0.94,-2.69l0.09,-0.12l0.71,0.27l0.44,-0.1l0.06,-0.45l-0.4,-0.82l0.03,-0.33l0.58,0.22l0.48,-0.16l1.76,-2.7l0.12,-2.0l2.96,-1.12l3.48,-4.22l3.21,-2.33l3.23,-4.15l1.26,-0.18l0.33,-0.3l0.71,-2.82l2.73,-3.74l0.96,-0.66l1.3,-3.44l3.49,-4.12l2.19,-5.18l1.2,-1.83l0.38,-1.84l1.06,-0.13l1.41,-1.52l2.45,-0.95l2.42,0.26l1.31,0.7l1.0,-0.22l0.31,-0.41l-0.1,-1.79l-0.65,-1.1l0.42,-0.76l1.28,-0.75l0.2,-0.38l-0.14,-1.79l-0.31,-1.15l-1.11,-1.44l0.54,-3.05l0.14,-3.59l0.54,-4.11l-1.61,-2.58l-5.46,-3.75l-1.19,0.05l-0.96,-0.37l-1.14,-2.58l0.61,-3.31l-0.42,-0.43l-0.8,0.21l-0.77,1.15l-1.5,1.18l-2.04,-0.95l-0.98,0.12l-1.36,-5.78l-1.93,-5.33l-2.17,-1.56l-0.34,-0.68l-0.26,-1.17l-0.36,-4.28l0.11,-2.06l0.23,-1.11l0.9,-0.87l1.36,-2.54l0.39,-4.46l0.58,-2.27l0.69,-1.42l-0.67,-2.43l-3.56,-6.55l-0.47,-2.07l-0.24,-1.86l0.04,-1.65l0.37,-1.05l1.36,-1.44l0.28,-0.8l-0.55,-3.51l-1.31,-0.93l-2.47,-0.43l0.14,-1.84l0.95,-2.51l0.09,-0.99l-0.56,-3.0l-0.17,-3.54l0.18,-2.67l1.69,-1.99l0.17,-0.98l-0.11,-0.32l-2.2,-2.25l-1.56,-2.51l-0.49,-1.47l-0.33,-0.27l-1.58,-0.2l-1.15,-4.3l-3.36,-4.08l-1.07,-0.94l-5.7,-2.69l-2.29,-0.53l-2.59,-1.52l-1.96,-1.95l-1.73,-1.29l-1.5,-1.61l-1.96,-1.42l-0.61,-1.28l-2.18,-2.33l-1.1,-1.61l-3.47,-2.84l-0.14,-2.09l-0.36,-0.8l-3.36,-1.96l0.41,-0.7l2.58,-0.07l2.31,1.09l0.44,-0.07l0.64,-0.66l0.32,-1.22l-1.0,-3.94l0.15,-0.86l0.94,-1.13l1.53,-0.93l2.51,-0.14l1.92,0.2l9.1,15.58l1.09,2.91l0.37,2.09l0.4,0.33l1.17,-0.01l7.57,1.67l0.9,1.08l0.35,0.14l2.44,-0.24l2.01,-1.1l3.29,-1.34l2.05,-3.39l1.6,0.23l4.44,3.19l5.02,2.2l1.5,1.79l1.88,0.49l0.36,-0.09l2.1,-1.93l1.16,-4.65l0.99,-2.01l1.36,-1.44l3.04,-1.02l1.01,-1.27l1.38,-2.68l0.31,-3.41l-0.26,-5.94l0.24,-1.89l1.13,-3.24l1.51,-8.58l0.66,-2.43l0.77,-1.41l1.14,-0.92l2.06,-2.63l2.93,-5.19l0.63,-0.35l2.0,-0.25l2.53,0.19l2.31,0.9l0.51,-0.06l1.21,-0.56l1.95,-1.66l3.25,-3.21l1.96,-0.83l1.62,0.11l2.03,3.39ZM687.39,226.03l-1.75,0.92l-1.21,-0.49l-0.02,-1.63l0.81,-0.8l1.6,-0.35l2.23,0.89l-1.11,0.44l-0.53,1.02ZM651.47,363.64l1.54,0.57l0.67,-0.12l0.48,0.83l-1.08,0.71l-0.18,0.3l-0.1,1.13l0.66,1.35l-0.71,-0.0l-0.49,-0.64l-0.35,-1.16l-1.29,-1.22l0.49,-1.53l0.36,-0.22ZM647.15,361.34l0.65,0.81l-0.29,0.7l0.88,0.94l-0.27,0.03l-1.19,-1.16l0.4,-0.75l-0.19,-0.59ZM646.44,369.25l-1.05,0.72l-0.05,-0.02l0.09,-1.13l0.59,-0.52l0.67,-0.04l-0.25,1.0ZM643.69,370.04l-0.74,0.17l-0.4,-0.42l0.75,-0.75l0.46,0.05l0.1,0.39l-0.17,0.57ZM641.17,358.98l-0.1,0.67l-1.33,0.09l-0.57,-0.96l-0.3,-2.24l0.42,0.76l1.87,1.68ZM638.04,280.67l0.16,0.7l0.46,0.29l1.0,-0.26l0.85,-0.81l0.29,0.19l-0.04,0.74l-0.6,-0.04l-0.81,1.3l-0.33,0.14l-1.16,-1.17l-0.65,-1.73l0.92,-0.0l-0.08,0.66Z"
                        data-code="FI"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M670.47,576.86l-0.14,-0.33l0.07,-1.84l1.09,-2.33l-0.23,-1.46l0.57,-1.96l0.0,-1.75l-0.9,-1.57l-1.27,-0.79l-0.67,-0.7l-3.41,-1.85l-0.14,-0.71l3.02,-4.5l0.86,-0.73l4.91,-2.5l0.89,-0.98l0.3,-2.84l-0.4,-4.75l-0.38,-1.94l-0.96,-3.65l-2.57,-7.45l-1.39,-7.02l2.8,0.35l1.98,-0.54l1.87,0.09l2.22,-0.4l0.58,0.63l1.45,0.64l2.18,-0.89l1.87,-1.07l1.88,0.11l0.38,-0.21l0.29,-0.54l0.51,-2.78l0.37,-0.38l2.44,0.21l1.02,-0.63l0.87,-1.3l1.24,-0.75l1.31,-0.08l0.94,-0.74l0.28,0.3l0.24,0.92l-0.35,0.8l0.35,0.88l1.04,0.5l1.46,-0.01l1.08,-0.41l0.46,-0.9l-0.01,-1.06l-0.3,-1.04l-0.8,-0.9l-1.82,-0.53l0.94,-2.83l1.44,-2.52l-0.03,-3.61l0.76,-2.62l0.98,-1.87l1.26,-0.58l1.7,-0.35l1.3,-1.06l0.65,-1.24l0.45,-1.67l0.33,-0.21l4.07,0.22l0.4,-0.26l0.62,-1.7l1.67,-1.56l0.07,-0.43l-0.46,-0.71l-1.14,-0.33l-2.37,-0.26l-0.27,-0.31l1.43,-4.66l0.37,-2.82l2.09,-0.44l0.81,-0.41l1.83,-2.51l1.13,-0.36l3.38,0.63l3.67,0.13l0.36,-0.17l0.92,-2.75l3.37,-3.9l1.74,-1.31l1.0,-0.26l2.17,2.17l0.76,-0.0l1.04,-0.8l1.94,-0.07l0.8,0.6l1.38,2.52l0.92,0.47l0.38,-0.04l2.04,-1.42l1.03,-0.43l0.58,0.01l3.69,1.88l0.22,1.06l-0.55,2.58l0.81,1.43l1.0,1.05l0.54,0.03l2.61,-1.97l0.89,-0.06l1.08,-0.6l0.83,-0.92l0.56,-0.23l1.41,0.2l2.49,-0.2l2.81,1.31l2.24,2.81l1.47,1.21l1.07,0.51l0.96,0.02l0.25,0.47l-0.08,3.91l-1.07,1.62l-0.1,1.36l1.98,3.46l0.23,1.82l-1.99,3.21l-0.54,2.62l0.11,0.67l2.65,2.29l1.84,1.11l0.3,0.39l-1.06,2.9l0.19,0.41l1.4,0.85l0.75,1.3l0.76,2.38l1.42,2.22l5.34,3.33l0.36,0.45l0.12,0.54l-0.16,1.41l-0.94,2.81l0.2,0.5l1.09,0.46l2.29,-0.11l2.71,0.34l3.12,1.87l0.01,0.6l-0.33,1.01l0.26,0.94l0.48,0.88l2.85,2.19l0.21,0.49l0.05,0.99l-0.05,0.48l-1.5,0.51l-1.54,0.99l-0.69,1.44l-2.28,1.78l-1.36,0.78l-1.04,0.03l-2.63,-0.36l-0.83,-0.78l-0.6,-0.98l-1.2,-0.4l-3.44,0.11l-0.75,0.53l-0.32,1.01l-1.4,2.7l0.03,0.46l2.49,3.47l1.23,1.41l0.34,0.74l-0.01,0.39l-0.6,0.9l0.15,1.66l1.02,1.62l-0.28,0.39l-0.11,4.92l0.38,0.8l0.7,0.58l0.5,0.83l0.89,2.03l-5.22,-0.07l-1.78,1.16l-2.01,-0.49l-1.46,0.77l-3.05,3.31l-1.28,1.91l-1.83,4.78l0.37,1.65l0.56,1.31l0.36,2.31l-0.69,0.78l-0.32,0.85l-0.88,-0.14l-1.37,-0.97l-0.42,-1.67l-2.25,-1.81l-1.44,-0.08l-2.08,0.52l-4.77,0.5l-2.67,1.07l-0.43,-0.44l-2.21,-4.44l-0.82,-0.4l-0.79,0.15l-1.09,1.12l-1.76,0.73l-0.86,0.78l-0.7,1.4l-0.58,-0.31l-0.82,-1.98l-0.91,-0.43l-1.58,-0.06l-1.73,-0.38l-1.44,-0.56l-0.78,0.12l-0.95,0.81l-0.72,0.09l-1.98,-0.68l-0.38,0.07l-0.51,0.45l-1.08,1.89l-0.2,0.04l0.15,-1.59l-0.21,-0.39l-1.37,-0.68l-2.02,-0.1l-1.95,0.21l-2.19,-3.39l-1.04,-0.2l-1.6,0.15l-2.37,-0.36l-4.24,-0.92l-0.92,-0.7l-1.7,-0.23l-4.61,-1.28l-1.95,-0.24l-7.05,-0.31l-2.77,0.16l-2.75,0.69l-5.02,0.35l-1.85,0.35l-0.75,0.78l-0.63,1.44l-2.01,2.33l-1.94,1.54l-1.24,-0.74l-2.22,-0.39l-1.09,0.35l-0.52,0.4l-0.15,0.4Z"
                        data-code="BY"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M263.27,309.93l-0.46,1.48l-0.5,-0.17l-0.27,-0.48l0.08,-2.27l1.14,1.44ZM260.23,323.5l-1.07,-1.12l-1.0,-0.73l-0.43,-1.11l2.22,1.07l0.4,0.82l-0.12,1.07ZM259.09,318.06l-0.57,-0.37l-2.69,-3.27l-1.97,-5.11l2.3,-0.71l1.94,1.36l2.15,1.02l-0.28,3.24l-0.87,-0.95l-0.92,-0.33l-0.49,0.23l-0.26,0.75l0.04,0.69l0.44,0.63l1.18,2.83ZM257.15,329.12l1.63,0.7l0.03,0.97l0.48,1.08l0.04,1.16l-1.78,-2.53l-0.4,-1.38ZM252.9,313.63l1.13,1.04l0.26,0.48l-0.42,0.46l-0.65,0.15l-0.89,-0.15l-1.48,-0.73l-0.37,-1.19l0.72,0.01l1.23,-0.32l0.47,0.25Z"
                        data-code="FO"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M825.38,940.71l0.28,-1.09l-0.45,-3.89l0.72,-2.76l0.68,-1.81l1.49,-1.02l2.07,0.39l0.46,0.85l1.11,0.79l0.78,0.14l0.24,2.14l-0.5,2.18l-0.04,1.94l0.36,3.38l-0.78,1.47l-0.61,2.74l-0.42,0.03l-1.77,0.94l-2.31,0.87l-2.55,0.13l0.96,-3.28l1.03,-1.02l2.18,-1.17l0.26,-0.45l-0.25,-0.68l-1.06,-0.69l-1.0,-0.34l-0.87,0.22Z"
                        data-code="PS"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M833.54,917.58l-0.48,-0.12l-0.63,0.34l-0.69,2.22l-0.87,0.56l-3.31,-0.18l0.97,-2.23l0.65,-2.15l1.15,-1.83l2.37,-6.11l1.36,-2.47l0.52,-3.59l2.02,-2.95l1.51,-0.87l0.87,-0.98l0.08,-1.21l3.51,-0.06l0.61,-0.69l0.78,0.23l0.36,0.4l-1.21,1.35l-0.05,0.59l0.35,0.31l1.54,0.5l0.53,0.44l1.01,3.21l-0.59,1.24l-0.94,1.13l-1.39,0.77l-0.91,1.01l-0.27,0.55l0.02,0.73l0.6,0.53l-2.85,0.05l-1.68,1.42l-0.32,0.47l-0.32,1.38l0.4,0.72l0.72,0.52l-0.71,0.45l-0.56,0.56l-0.23,0.63l-1.65,1.48l-2.26,1.66Z"
                        data-code="LB"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M226.07,830.85l0.09,-1.44l-0.54,-1.73l0.63,-0.35l1.29,-0.24l1.05,-0.96l0.66,-1.26l-0.29,-1.61l0.74,-1.45l1.91,-1.34l0.14,-0.49l-0.45,-0.23l-1.03,0.21l-1.33,0.94l-1.96,3.28l-0.57,1.48l-2.68,0.69l-1.22,-0.43l0.0,-1.79l0.59,-1.91l0.23,-2.6l0.82,-2.33l-0.24,-1.62l0.58,-0.72l0.98,-0.69l1.44,-2.13l4.21,-10.11l-0.17,-0.91l-0.44,-0.52l0.16,-1.21l1.34,-6.08l0.56,-0.84l0.66,-1.93l0.33,-6.08l-0.22,-1.3l-0.85,-2.32l-0.9,-4.92l-0.06,-1.48l0.64,-0.72l-0.26,-0.66l-1.02,-0.1l-0.4,-0.78l0.1,-1.01l1.29,-1.87l1.22,-1.17l1.85,-1.05l2.9,-0.83l0.74,-0.38l0.33,0.03l0.99,1.67l-1.02,1.5l-0.17,0.99l0.67,1.32l0.69,0.42l0.94,-0.08l2.16,-1.14l0.4,0.16l2.66,-0.31l2.39,0.93l1.71,0.04l1.83,-0.56l0.91,-0.62l0.35,-1.27l0.25,-0.19l1.58,0.52l2.24,0.1l0.57,-0.33l1.48,0.49l1.18,-0.09l0.37,0.34l0.19,0.56l-0.02,3.0l0.26,0.74l0.3,0.25l2.05,0.14l1.0,0.37l0.75,0.62l0.3,0.85l-0.91,1.32l-1.46,1.37l-2.17,1.27l-1.76,1.67l-1.17,1.92l-1.44,0.83l-0.44,0.44l-0.27,0.68l0.95,2.59l0.29,1.75l0.23,2.13l-0.23,3.01l-0.22,0.82l0.11,0.74l0.42,0.91l-2.59,2.2l-0.36,0.89l0.16,0.86l1.46,1.47l0.2,0.45l-0.18,1.35l-0.85,2.38l-0.79,1.41l-0.86,0.41l-4.59,0.03l-1.11,0.34l-0.24,0.57l1.23,2.22l1.47,1.3l0.41,2.17l1.81,3.55l1.86,0.66l0.45,0.65l-0.09,1.04l-0.5,1.26l-1.01,1.31l-1.24,0.95l-0.9,1.03l-0.42,2.72l-0.51,1.95l3.27,5.05l0.38,0.17l1.46,-0.19l-0.68,1.83l-2.21,0.72l-1.45,1.72l-1.2,2.09l-0.94,1.11l-0.83,2.61l1.25,6.56l-0.92,0.18l-4.53,2.71l-1.23,0.0l-2.73,-1.22l-4.69,-0.39l-1.51,-0.36l-2.09,0.78l-1.4,-0.02l-1.27,0.96l-0.22,-0.07l2.35,-6.55l-0.06,-2.73l0.36,-2.5l-0.42,-2.39l-0.73,-1.47l1.01,-3.86l-0.14,-2.12l-0.72,-1.92l2.22,0.3l0.41,-0.21l-0.05,-0.45l-0.96,-1.07l-1.18,-0.69l-1.66,0.13l-3.48,1.23ZM117.57,924.83l1.54,0.71l1.82,-0.35l2.35,1.13l-1.21,1.15l-2.2,-0.21l-1.95,-0.9l-0.62,-0.61l-0.12,-0.37l0.38,-0.55ZM10.65,856.46l-1.1,0.02l-0.22,-0.38l0.93,-0.15l0.4,0.52ZM2.48,841.91l1.1,0.18l4.28,-0.25l0.74,0.12l-0.07,0.69l-0.58,0.35l-2.4,0.32l-3.85,-0.78l-1.16,-0.94l-0.14,-0.65l0.41,-0.14l1.66,1.1Z"
                        data-code="PT"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M728.69,20.59l0.21,0.53l1.37,0.56l0.35,-0.02l2.58,-1.44l0.51,0.99l-0.91,3.66l-0.16,5.54l-0.34,3.25l0.01,3.02l0.37,1.57l0.4,0.31l0.38,-0.33l1.56,-7.75l1.76,-2.49l0.64,-4.76l1.67,-5.71l1.85,-3.27l0.94,-0.78l3.39,0.12l1.4,1.13l1.35,2.74l1.1,1.22l3.32,1.26l1.0,1.33l0.19,0.81l0.3,0.3l0.8,0.18l0.36,-0.1l2.13,-2.05l1.07,-0.26l2.08,2.95l-0.44,2.28l0.14,0.92l0.42,0.33l2.74,-0.15l2.19,0.89l4.35,4.82l0.43,2.15l-0.2,2.51l-6.24,2.97l-2.83,2.92l-4.39,1.08l-15.45,-1.94l-0.45,0.46l0.31,2.11l0.24,0.31l10.67,4.54l0.5,1.07l-0.33,2.68l-0.01,2.2l0.21,1.55l1.02,1.7l1.55,0.69l2.56,-0.33l1.21,0.68l0.51,-0.1l1.0,-1.33l0.33,-3.6l0.44,-0.47l1.09,0.79l0.63,3.83l0.54,0.63l0.67,-0.18l0.67,-2.5l1.26,0.16l1.55,-0.23l1.77,0.4l0.69,4.85l-0.02,1.72l-0.33,1.64l-0.39,0.71l-0.76,0.3l-2.16,-0.14l-3.08,-1.95l-2.04,-1.89l-0.86,-0.18l-0.58,0.32l-0.13,0.41l0.48,1.85l-0.13,1.38l-0.72,2.95l-0.57,1.14l-1.19,1.47l-2.1,1.18l-6.22,2.59l-0.5,1.11l-1.93,6.59l-1.12,1.62l-1.69,0.86l-0.78,-1.13l-0.76,-2.09l0.17,-2.03l2.37,-4.15l2.91,-4.09l1.31,-3.11l-2.59,-8.0l-4.8,-2.57l-5.22,-3.55l-1.89,-1.87l-2.98,-3.92l-2.12,-3.55l-0.32,-0.19l-2.11,-0.09l-2.24,0.98l-3.3,3.25l-1.88,1.59l-0.98,0.45l-2.45,-0.88l-2.63,-0.19l-2.19,0.27l-0.94,0.49l-3.09,5.37l-2.01,2.57l-1.2,1.0l-0.86,1.61l-0.68,2.49l-1.51,8.6l-1.13,3.27l-0.25,2.03l0.26,5.89l-0.26,3.16l-1.32,2.58l-0.85,1.06l-1.21,0.24l-1.68,0.68l-1.6,1.64l-1.13,2.28l-1.14,4.57l-1.72,1.5l-1.55,-0.4l-1.41,-1.73l-5.01,-2.18l-4.52,-3.24l-2.11,-0.34l-0.4,0.19l-1.94,3.34l-3.18,1.3l-1.85,1.05l-2.14,0.21l-1.07,-1.16l-7.75,-1.71l-0.97,-0.0l-0.34,-1.86l-1.15,-3.03l-9.21,-15.76l-0.69,-0.3l-1.8,-0.15l-2.69,0.14l-1.86,1.07l-1.24,1.54l-0.18,1.22l0.99,3.92l-0.25,0.79l-0.25,0.23l-2.33,-1.05l-2.9,0.07l-0.33,0.2l-0.62,1.06l-6.65,0.59l-0.29,0.62l2.93,4.48l0.14,1.79l-0.38,3.47l-1.05,2.95l-1.21,2.37l-2.38,2.38l0.07,0.62l3.31,2.15l-3.23,3.94l-1.09,-0.17l-8.24,-3.78l-2.83,-1.03l-2.59,-0.33l-1.31,0.04l-5.22,-2.27l-1.37,0.27l-1.91,1.0l-0.21,0.32l-0.21,2.29l0.4,9.76l-0.68,2.36l-2.61,5.67l-7.65,-4.8l-0.53,0.09l-2.07,2.65l-5.22,4.86l-2.92,9.96l-1.52,2.31l-3.68,1.84l-0.9,2.81l3.17,6.39l0.97,3.29l-0.39,3.28l-2.21,2.68l-4.8,7.17l-4.43,7.41l-1.8,2.09l-0.09,0.31l0.8,6.06l-1.33,1.64l-2.94,2.0l-1.48,0.76l-1.59,0.45l-5.06,0.81l-0.33,0.45l1.24,9.45l-0.01,1.63l-0.52,1.65l-0.63,3.22l-0.94,11.18l-0.71,1.2l-0.99,3.01l-3.2,7.2l-6.3,11.59l0.12,0.52l3.03,2.15l2.65,1.5l0.53,2.2l0.38,3.94l-0.09,2.6l-2.23,4.6l-8.71,-1.83l-1.38,-0.02l-3.14,0.82l-2.71,1.62l-1.82,1.9l-4.9,8.29l-1.71,2.28l0.41,3.34l-2.83,5.96l1.86,6.38l1.01,2.49l-1.44,2.49l0.42,5.85l-0.34,3.81l2.56,9.05l-0.15,3.34l-1.85,12.87l0.11,0.33l1.88,1.95l2.64,2.3l1.48,0.91l2.13,2.65l1.58,2.5l-0.67,3.45l-0.7,1.36l-0.95,3.16l-0.13,0.16l-2.86,0.16l-1.65,0.57l-0.81,0.57l-0.17,0.36l0.29,3.17l3.24,9.6l0.45,2.51l-0.47,2.54l-0.51,1.45l-0.39,5.29l-2.54,3.65l-1.57,1.39l-2.31,0.54l-0.98,0.86l-1.41,4.59l-2.04,2.76l-0.01,1.31l1.52,7.0l-1.15,7.07l-0.88,2.27l-1.06,0.68l-0.63,-0.28l-1.04,-3.12l-0.31,-1.83l-0.26,-0.28l-7.04,-2.06l-1.17,-2.78l-1.31,-2.46l-0.17,-0.94l0.04,-4.7l-0.4,-2.05l-0.12,-2.25l-0.33,-0.37l-0.44,0.23l-0.83,1.85l0.42,2.96l-0.85,1.01l-1.21,0.55l-0.23,0.39l0.12,1.7l0.55,0.53l0.1,1.52l-0.3,2.51l-2.51,5.65l-0.73,1.09l-0.95,-0.38l-0.42,0.08l-1.59,1.51l-1.12,0.18l-0.56,-1.63l-2.24,-2.4l-0.34,-0.12l-1.06,0.14l-0.26,0.65l1.74,2.48l-0.41,0.78l-0.43,0.54l-0.88,0.34l-3.27,2.0l-0.09,0.6l0.97,1.11l-0.73,1.13l-1.2,0.32l-0.61,0.71l-0.27,1.0l-3.34,2.71l-5.48,6.93l-2.79,1.93l-1.92,1.96l-1.83,0.04l-2.13,1.68l-5.39,1.47l-3.6,-0.67l-2.53,0.56l-1.12,-0.97l-0.13,-0.61l0.26,-0.88l-0.22,-0.52l-0.6,-0.23l-1.01,-0.1l-0.36,0.16l-0.51,0.8l-0.05,1.11l-0.14,0.1l-1.6,-0.62l-0.27,-0.38l0.55,-1.09l1.13,-1.18l0.02,-0.54l-0.36,-0.86l-0.32,-0.28l-0.57,-0.09l-1.76,0.17l-1.26,-0.2l-4.4,-2.68l-1.12,-1.52l-3.59,-2.32l-1.57,-2.4l-0.89,-2.65l0.07,-2.43l0.43,-3.88l0.51,-0.66l2.96,1.27l3.29,2.32l0.32,0.06l0.78,-0.31l1.0,-1.77l1.95,-1.43l-0.0,-0.65l-0.57,-0.41l-0.43,-0.02l-2.77,1.56l-2.5,-2.53l0.0,-0.69l0.8,-1.05l0.27,-1.34l-0.41,-1.39l0.17,-1.53l1.26,-1.72l1.98,-1.84l1.46,-1.81l1.45,-1.08l0.13,-0.48l-0.16,-0.37l-0.52,-0.21l-1.78,0.75l-1.68,1.25l-1.89,1.98l-2.26,1.57l-3.78,1.64l-1.46,2.41l-1.26,0.87l-2.15,0.08l-0.44,-1.32l0.71,-5.93l0.76,-2.91l0.77,-1.89l1.38,-0.48l0.82,-1.35l0.38,0.0l0.75,0.7l2.61,0.69l0.44,-0.17l1.19,-1.82l1.66,-0.32l3.06,-1.99l0.11,-0.77l-0.48,-0.32l-3.35,0.51l-1.68,0.46l-0.65,-0.24l-0.34,-1.14l0.62,-1.16l2.86,-3.18l1.07,-1.52l0.57,-1.32l-0.05,-1.03l0.44,-1.71l2.73,-3.16l1.9,-1.24l0.47,0.8l-0.62,3.88l0.0,1.72l0.34,0.39l0.44,-0.28l1.81,-5.82l0.76,-1.32l0.81,-0.87l2.1,-0.63l0.84,-1.09l-0.38,-0.62l-2.66,0.33l-6.23,2.25l-2.73,2.06l-0.8,1.65l-1.79,2.27l-0.89,1.55l-0.41,2.22l-0.88,1.02l-1.48,0.56l-1.92,2.77l-0.86,2.22l-3.09,3.08l-1.1,1.73l-0.28,-0.46l-0.07,-1.59l0.19,-2.65l0.89,-1.92l0.47,-2.02l-0.58,-1.9l0.27,-0.74l2.06,0.55l1.6,-0.08l2.8,-1.49l0.17,-0.53l-0.42,-0.84l-0.32,-0.22l-3.17,-0.01l-1.59,-1.26l-1.32,-2.67l-0.6,-3.6l0.34,-0.87l5.04,-3.79l1.46,-1.83l-0.23,-0.64l-0.8,-0.17l-0.38,0.12l-1.87,2.07l-2.42,1.16l-1.49,-1.58l-0.85,-1.86l-0.51,-4.09l0.18,-2.19l-0.2,-2.64l0.83,-0.66l1.19,0.44l1.3,0.18l3.03,-0.25l6.46,-1.7l4.09,1.0l1.82,-0.08l2.7,-1.49l2.05,-0.14l1.53,1.02l0.82,1.14l0.18,1.82l0.79,1.15l0.56,0.1l0.53,-0.37l0.15,-0.45l-0.41,-1.32l-0.07,-1.78l6.57,-2.32l0.98,-1.06l-0.26,-0.66l-2.47,-0.3l-0.64,-1.83l1.39,-3.49l-0.13,-0.44l-0.69,-0.14l-1.59,1.92l-0.74,2.49l0.27,2.06l-0.21,0.63l-1.14,0.35l-2.99,0.15l-1.93,-0.81l-1.81,-0.45l-0.41,-0.41l0.18,-1.22l-0.49,-0.66l-0.6,0.1l-0.77,1.27l-0.68,2.44l-1.18,0.46l-4.09,-0.92l-5.91,0.55l-2.69,1.26l-1.5,-0.14l-2.81,-2.12l-1.06,-1.64l-0.41,-3.45l0.14,-1.27l1.98,-0.57l1.36,-0.04l1.09,-0.85l-0.05,-0.66l-2.19,-1.55l-0.88,-2.1l-1.46,-0.86l-0.84,-1.69l-0.23,-2.71l0.24,-1.78l0.47,-0.41l1.71,0.4l4.62,-0.32l4.36,1.97l3.22,1.17l6.26,-0.61l3.58,-1.79l0.06,-0.68l-1.0,-0.56l-3.83,1.02l-3.48,-0.04l-8.89,-2.67l-2.83,0.27l-1.21,-0.51l-0.75,-1.76l0.59,-3.57l0.85,-0.54l0.8,0.87l0.87,0.06l0.38,-0.21l0.85,-1.57l0.89,-1.04l0.63,-1.98l2.33,-1.85l1.1,-0.2l1.37,-0.83l0.66,0.18l0.59,0.86l1.09,0.87l1.8,-0.11l5.18,-1.67l1.58,-1.85l0.02,-0.45l-0.41,-0.18l-3.19,0.59l-2.67,0.94l-1.29,0.2l-0.13,-0.64l1.58,-2.11l0.44,-1.74l0.86,-0.64l1.1,0.03l2.43,-0.34l1.69,-0.48l2.85,0.32l4.29,0.71l2.75,1.71l1.33,-0.1l1.22,-0.49l0.67,-0.75l-0.19,-0.63l-1.97,-0.65l-0.08,-0.69l0.18,-0.52l3.39,-1.36l3.88,-0.32l0.31,-0.6l-0.68,-1.17l-0.43,-0.19l-8.5,1.73l-2.32,-1.18l-1.78,0.01l-1.32,0.71l-3.05,0.76l-0.27,-0.27l0.55,-1.76l1.97,-3.32l0.19,-0.82l0.77,-0.67l5.09,-1.93l2.54,-2.29l0.94,-0.24l1.15,0.15l1.62,-0.26l3.0,0.6l1.54,2.84l1.33,0.88l4.22,3.54l0.46,0.04l0.19,-0.42l-0.26,-1.19l-3.67,-4.82l-1.39,-1.2l-0.96,-2.19l0.32,-2.04l1.02,-1.31l4.04,-0.78l0.98,-1.01l0.17,-1.75l-0.7,-1.26l-0.35,-0.19l-1.44,0.05l-1.01,-0.51l-0.28,-1.31l0.41,-0.9l2.31,-1.93l1.25,-0.62l2.12,-0.66l3.68,1.48l0.18,0.5l-1.03,1.84l0.06,1.36l0.35,0.36l0.98,0.12l0.38,-0.17l2.18,-3.24l2.51,-0.44l1.22,-0.76l0.93,-0.33l1.7,2.83l1.36,1.37l0.55,2.38l0.3,0.3l0.57,0.13l0.43,-0.17l0.74,-1.17l1.32,-0.6l1.93,-0.42l3.32,0.66l1.66,-0.48l0.67,0.06l0.42,-0.52l-0.72,-2.28l-0.39,-0.6l0.61,-1.77l0.64,-0.7l2.26,-1.38l2.35,-0.72l1.44,-1.34l1.93,-1.24l0.17,-0.45l-0.88,-2.23l-0.34,-0.23l-1.1,-0.06l-0.17,-0.21l3.52,-2.93l0.1,-0.52l-0.57,-0.83l-1.99,-0.76l-1.33,0.61l-1.88,1.31l-2.23,2.11l0.02,0.6l0.66,0.56l0.92,1.47l-1.34,2.03l-7.99,6.02l-3.71,1.71l-1.4,-0.22l-0.36,-1.4l-0.85,-1.31l-0.86,-2.49l-0.4,-0.27l-1.5,0.07l-0.66,0.37l-0.12,-0.28l0.6,-2.53l1.19,-2.04l2.17,-1.72l1.04,-2.04l0.93,-3.04l3.06,-3.01l4.42,-7.39l3.56,-2.35l1.41,-2.67l2.14,-1.19l1.73,-1.95l1.47,-0.25l2.61,-1.86l1.58,-2.32l-0.28,-0.62l-1.24,-0.08l-2.96,1.73l0.06,-1.69l0.6,-2.31l1.8,-2.13l8.75,-6.29l0.65,0.77l1.07,1.88l0.41,0.2l2.74,-0.43l3.4,-3.9l2.4,-4.05l-0.06,-0.48l-0.48,-0.07l-1.3,0.71l-1.51,1.72l-2.67,2.22l-1.06,0.3l-0.42,-0.17l-0.56,-1.59l-0.96,-0.5l-0.93,0.22l-0.62,-0.76l-0.15,-2.51l2.01,-6.62l0.95,-1.99l3.82,-5.78l0.85,-3.2l1.51,-1.47l2.06,0.34l0.98,-0.56l0.14,-0.46l-0.77,-2.1l-2.46,-1.76l-0.08,-0.54l7.8,-2.63l3.83,0.09l0.32,-0.14l1.09,-1.3l2.16,-0.94l1.61,-1.69l-0.02,-0.57l-0.83,-0.75l-0.41,-0.08l-3.94,1.55l-2.4,0.71l-1.06,-0.02l-1.0,0.54l-2.68,0.17l-0.64,-6.33l0.44,-3.27l0.81,0.05l0.42,-0.37l0.26,-3.44l1.22,-1.87l1.91,-0.53l0.99,-0.95l1.22,-1.63l2.16,0.38l2.33,-0.41l0.26,-0.62l-0.58,-0.86l-2.91,-1.2l-0.56,-1.51l1.82,-1.57l1.18,-0.34l1.91,-3.73l1.0,-1.37l1.06,0.23l0.35,-0.1l1.66,-1.51l1.91,0.46l1.69,-1.06l2.27,-0.69l8.63,-0.28l0.38,-0.33l0.26,-1.55l-0.32,-0.46l-1.88,-0.37l-6.45,-0.4l-3.32,0.03l-1.26,0.35l-0.22,-0.23l0.06,-0.63l1.12,-1.38l0.62,-1.71l2.35,-3.91l2.6,-2.47l1.82,0.58l2.21,2.47l1.72,0.42l0.61,0.66l1.16,3.42l0.86,0.38l0.48,-0.42l-0.24,-3.24l1.51,-2.64l0.0,-0.39l-0.41,-0.76l-0.51,-0.18l-2.18,0.92l-1.56,-0.89l-1.33,-1.93l-0.36,-1.69l0.81,-1.7l0.8,-0.9l0.06,-0.45l-0.57,-1.11l-0.61,-0.13l-3.5,2.9l-2.31,0.63l-0.57,-0.23l0.47,-2.36l-0.28,-2.12l3.25,-5.06l0.94,-0.49l1.66,0.37l1.64,1.42l0.33,0.09l1.55,-0.28l1.56,-0.8l0.21,-0.41l-0.21,-1.43l-0.33,-0.34l-3.22,-0.54l-0.66,-0.91l0.22,-0.82l2.25,-1.22l2.23,-2.17l2.53,-0.62l2.01,-1.56l0.4,0.65l0.78,6.3l1.9,5.09l0.97,0.43l0.5,-0.45l-0.71,-4.19l0.59,-1.08l0.83,-0.92l0.36,-1.25l-0.25,-0.47l-0.84,-0.31l-0.71,-1.38l-1.12,-4.84l0.34,-1.11l2.35,-2.51l2.86,-0.56l3.21,1.81l1.36,0.07l2.11,-0.54l3.26,-1.53l1.85,-0.56l0.95,0.0l0.38,-0.28l0.25,-0.78l-0.19,-0.47l-0.84,-0.45l-0.44,-0.56l-0.73,-0.28l-3.23,0.81l-8.15,-0.26l-0.6,-0.67l-0.13,-1.32l0.83,-2.09l0.9,-1.14l3.02,-2.13l3.5,-0.42l3.52,-3.96l1.44,-3.18l0.75,-4.55l2.04,-3.57l5.25,-2.09l0.24,-0.28l0.21,-1.15l-0.55,-1.91l0.04,-3.42l1.44,-4.05l0.88,-1.3l1.02,1.08l1.39,2.85l2.33,1.8l3.1,0.36l0.33,-0.12l0.77,-0.81l-0.05,-0.6l-2.21,-1.61l-1.59,-2.02l-0.12,-1.91l0.59,-0.85l1.12,0.1l1.8,-0.36l1.47,-1.47l0.73,-3.99l2.05,-3.25l6.19,-2.08l0.27,0.51l-0.35,6.46l-0.76,4.29l0.02,3.09l0.32,0.39l0.45,-0.24l1.32,-3.16l1.73,-8.48l1.28,-3.95l1.38,-2.18l0.95,-0.47l1.11,-1.24l0.93,-0.49l0.64,2.54l-0.73,7.42l0.07,2.35l-0.81,3.05l-3.18,7.16l0.15,0.88l0.56,0.3l0.72,-0.33l1.4,-1.3l3.77,-6.36l3.14,0.77l0.49,-0.36l-0.01,-0.77l-2.41,-3.78l-0.38,-2.19l0.18,-6.11l0.89,-2.14l2.67,0.24l1.64,-0.3l0.68,0.92l0.34,0.16l1.78,-0.08l0.37,-0.29l1.16,-4.25l1.93,-0.31l1.99,2.77l2.6,2.05l2.03,2.82l0.64,0.01l0.58,-0.78l-1.04,-7.01l-1.25,-2.57l-2.76,-1.43l-2.73,-2.95l-0.65,-1.2l0.08,-0.64l2.13,-0.83l3.14,1.07l0.39,-0.08l2.66,-2.32l0.54,0.47l0.47,0.04l1.93,-1.15l1.17,1.52l0.53,0.09l1.03,-0.79l0.45,-2.2l3.19,-1.34l2.04,1.24l1.11,1.3l1.4,8.02l1.82,3.04l1.32,1.59l1.3,0.39l0.48,-0.22l0.63,-1.44l-0.04,-0.39l-1.17,-1.67l-0.3,-1.49l0.57,-3.97l0.65,-1.54l3.78,-6.07l3.07,-3.07l1.78,-0.25l0.31,-0.23l3.34,-7.19l0.85,-1.19l0.76,-0.26l0.27,-0.43l-0.22,-1.78l-0.19,-0.29l-1.65,-1.01l-0.05,-1.84l2.35,-2.63l2.84,-4.41l1.03,-0.22l0.85,1.14l2.81,2.02l1.71,2.3l1.32,1.23l0.39,0.09l1.08,-0.48l0.65,-1.68l0.6,-0.6l1.48,0.38l1.0,1.05l0.95,0.25l0.57,0.51l0.14,1.17l-1.49,1.57l-2.69,4.34l-2.64,4.89l-0.9,2.62l-0.86,6.7l-2.07,4.35l-0.1,3.19l0.83,1.39l0.52,0.16l2.43,-1.22l2.81,-3.96l0.76,-4.31l6.98,-11.5l3.3,-6.45l3.67,-5.28l1.57,-0.84l0.83,3.0l-0.77,4.49l-1.56,2.89l0.05,0.45l1.06,1.22l-0.21,3.29l-0.6,4.0l0.02,1.77l0.56,0.36l1.2,-0.53l4.52,-3.84l2.14,-6.91l0.49,-2.55l1.54,-2.21l3.01,-0.02l0.39,-0.35l0.12,-0.97l-0.13,-0.35l-3.8,-3.34l-0.37,-1.26l1.19,-1.88l3.42,-3.75l1.53,0.36l1.23,0.93l4.32,0.67l3.16,2.63l-0.12,4.13l-0.71,1.73l-0.69,1.04l-4.3,3.27l-0.84,1.79ZM756.72,55.78l-2.08,0.93l-0.12,-0.38l0.53,-1.4l0.6,-2.66l0.56,0.06l0.94,1.01l0.67,1.1l-1.1,1.34ZM697.76,1.96l3.4,1.5l1.18,0.01l1.68,2.79l0.45,0.18l0.38,-0.11l-0.1,1.01l-1.57,0.74l-2.78,0.52l-0.48,0.34l-2.04,-0.24l-1.26,-2.27l-2.21,-0.72l0.0,-0.34l1.36,-1.72l1.99,-1.68ZM676.07,25.02l-2.19,1.37l-1.21,-1.13l-0.57,-1.29l-0.09,-3.08l0.32,-1.77l0.83,-0.69l0.86,1.19l1.33,0.57l1.47,1.78l-0.74,3.05ZM670.57,26.08l0.33,3.3l-1.18,2.11l-2.88,2.92l0.01,0.91l-0.76,0.57l-1.27,0.47l-0.44,-0.3l0.1,-2.31l-0.26,-0.9l-0.64,-0.18l-0.86,0.75l-0.82,-0.89l-0.0,-1.09l0.28,-1.02l1.03,-1.59l1.6,-1.03l1.03,0.38l0.44,-0.11l3.64,-4.1l0.65,2.12ZM668.17,15.14l-0.65,2.28l-1.1,1.32l-3.15,5.12l-1.78,0.79l-0.72,0.89l-0.54,0.35l-2.17,-0.66l-0.45,0.16l-1.2,1.6l-1.49,0.24l-0.84,-0.19l-2.46,-1.84l-1.47,-2.01l-0.55,-1.18l1.74,0.02l0.9,-0.41l1.45,0.34l0.45,-0.2l0.83,-1.6l1.93,0.18l3.74,-1.23l1.28,0.64l0.5,-0.12l3.13,-4.12l1.09,0.0l1.2,-0.94l0.31,0.57ZM632.11,44.36l-0.59,0.74l-0.78,0.26l-0.54,-0.48l-0.86,-0.38l-0.89,0.09l-0.63,-1.33l0.08,-1.23l0.99,-1.75l1.96,-0.98l1.5,0.38l0.26,0.33l-0.51,4.34ZM618.41,39.62l0.82,0.62l0.86,-0.17l0.31,0.23l1.09,2.03l1.19,0.86l0.04,0.67l-0.9,0.83l-1.28,0.27l-1.28,-0.29l-0.86,-3.25l-1.32,-2.2l-0.15,-1.46l0.5,-0.13l0.99,1.99ZM611.42,45.45l1.25,2.35l0.43,0.2l1.07,-0.21l0.3,-0.25l0.27,-0.68l0.37,-0.21l1.08,0.84l-0.17,1.6l-2.02,2.45l-1.4,3.32l-1.55,0.67l-0.74,-0.34l-0.48,0.11l-1.67,2.0l-2.77,4.75l-0.29,2.22l-4.82,0.97l-1.75,0.63l-1.68,-0.75l-0.78,-1.45l0.17,-0.55l1.72,-0.33l0.32,-0.38l0.06,-1.51l0.42,-0.83l0.7,-0.7l0.43,-1.9l0.48,-0.33l1.25,0.44l0.47,-0.16l1.01,-1.44l0.49,0.91l0.41,0.2l0.33,-0.32l0.32,-1.7l-0.31,-1.64l0.14,-0.89l1.81,-2.66l0.82,-2.01l0.96,-1.07l0.9,0.16l0.47,-0.33l0.33,-1.9l-0.32,-2.03l0.11,-1.18l0.9,-2.82l0.45,-0.06l0.42,2.36l0.08,4.44ZM588.2,64.82l1.16,1.58l0.59,0.06l0.65,-0.6l1.16,-0.2l0.87,0.63l0.83,1.34l1.09,0.24l0.55,1.55l0.31,2.23l-0.67,1.58l-1.14,1.0l-0.29,2.2l0.36,2.61l-2.07,0.86l-2.51,0.4l-0.94,-1.2l-0.62,-0.02l-2.23,2.55l-2.19,3.9l-0.42,0.18l-0.04,-0.68l-0.21,-0.33l-1.59,-0.86l-1.79,-0.09l0.3,-0.9l1.65,-0.92l0.2,-0.28l0.35,-2.01l-0.31,-3.65l0.37,-2.84l0.88,-1.13l3.53,0.63l0.45,-0.27l0.46,-1.36l-0.29,-1.11l-1.87,-1.52l0.18,-0.61l1.2,-0.77l1.23,-0.11l0.35,-0.3l0.43,-1.79ZM564.02,103.19l0.22,0.55l0.69,-0.03l1.79,-3.47l1.94,-1.06l0.21,-0.31l0.12,-1.15l0.81,-1.37l-0.09,-1.92l0.34,-1.36l1.99,-1.1l1.07,1.07l0.69,1.36l0.89,3.12l-0.35,2.9l-2.32,2.29l-2.04,1.18l-1.97,2.77l-0.98,2.21l-0.58,0.33l-0.98,-0.69l-1.0,-0.0l-0.35,0.2l-1.04,1.85l-3.06,1.46l-0.89,-0.31l-0.05,-1.67l-0.48,-0.38l-0.78,0.16l-0.27,0.2l-1.2,2.24l-1.68,0.86l-1.35,-0.79l-0.48,0.06l-3.96,3.87l-3.56,0.69l-0.88,-0.32l-0.0,-2.0l2.35,-2.98l1.91,-2.06l7.04,-1.66l4.3,-6.46l1.09,-7.2l1.0,-2.53l-0.47,-1.73l-0.29,-0.27l-0.85,-0.19l-0.06,-1.88l0.57,-2.33l2.21,-3.31l1.29,-1.51l2.01,-4.04l0.82,-0.77l0.8,0.0l0.85,0.83l-0.18,1.95l-1.62,3.86l-2.5,3.6l0.3,2.4l0.98,2.03l0.29,6.4l-1.83,4.25l-0.44,2.15ZM556.52,89.09l1.78,3.83l0.76,2.09l-0.62,3.95l-1.55,1.88l-2.44,0.34l-1.68,-0.16l-0.96,-0.82l-0.13,-0.98l-0.22,-0.31l-0.68,-0.33l-0.43,0.05l-1.7,1.38l-0.97,0.15l-1.32,-0.94l-0.35,-1.47l1.56,-2.11l0.7,-1.58l1.4,0.12l0.54,0.54l1.05,0.34l0.51,-0.27l0.64,-2.13l-0.12,-1.52l0.27,-0.6l1.9,0.63l0.53,-0.38l0.0,-3.72l0.57,-0.09l0.54,0.71l0.41,1.38ZM538.62,114.54l1.03,0.67l2.02,-0.15l-0.19,0.65l-0.79,0.99l-2.04,0.85l-0.83,1.66l-0.45,0.43l-1.5,0.01l-1.13,0.43l-1.07,1.27l-0.65,-0.76l-0.68,0.13l-0.44,2.15l-1.48,0.62l-0.33,-2.72l1.24,-2.42l0.65,-0.16l0.75,0.11l0.42,-0.22l1.42,-3.0l1.83,-0.81l1.16,-0.09l1.06,0.35ZM526.27,128.13l-1.04,0.98l0.46,-2.2l1.06,-3.45l1.17,-1.58l0.27,0.29l-0.31,1.57l0.01,1.59l-1.63,2.79ZM520.17,196.19l-0.54,0.05l0.01,-0.83l0.54,-1.08l0.84,-0.7l2.31,-0.28l0.14,0.21l-0.59,0.66l-2.71,1.97ZM518.98,191.49l-0.66,0.12l0.12,-0.83l1.0,-1.41l0.59,-2.04l0.54,-0.52l0.86,0.74l0.02,1.61l-0.54,1.47l-1.92,0.87ZM512.61,205.49l-0.69,0.78l-1.19,-0.21l-0.1,-0.51l0.41,-1.51l0.78,-0.55l0.96,0.11l0.23,0.41l-0.41,1.49ZM502.6,230.16l-0.45,0.56l-1.53,-0.61l-2.96,0.52l-0.82,-0.56l0.76,-1.29l2.63,-1.66l1.19,0.06l1.34,1.9l-0.16,1.08ZM465.47,267.39l-1.37,0.06l-0.34,-0.25l1.69,-1.04l3.46,-1.29l0.46,-0.79l0.37,0.62l0.07,1.18l-0.25,0.44l-4.08,1.06ZM460.3,277.41l-1.04,0.02l-1.42,-0.42l-0.83,-0.83l-0.08,-0.48l1.55,-0.93l1.51,-0.52l0.61,0.86l0.06,1.73l-0.34,0.58ZM418.14,361.51l0.61,1.31l0.47,2.15l0.04,2.71l-0.56,-0.11l-0.6,-1.72l0.09,-1.91l-0.27,-1.84l0.23,-0.59ZM417.52,343.08l-0.83,0.25l-0.53,-0.17l0.28,-2.2l0.31,-0.27l0.34,-0.07l0.58,1.07l-0.15,1.4ZM228.97,13.75l-0.89,0.19l-0.38,-0.49l1.61,-2.24l5.98,-4.74l2.43,-4.57l4.03,-1.37l0.24,2.02l-0.29,2.92l-3.87,2.38l-4.62,1.77l-4.23,4.12Z"
                        data-code="NO"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M723.53,860.59l1.03,-0.2l0.97,-0.44l4.05,-0.38l1.07,-0.41l1.19,-1.58l1.86,-1.25l0.39,-0.72l-0.36,-0.56l-7.79,0.37l-4.31,-0.21l-0.83,0.68l-0.12,-1.16l0.44,-0.52l0.87,0.04l2.26,-0.71l0.28,-0.44l-0.39,-1.74l-1.53,-0.93l-0.58,-0.69l-1.07,-0.12l-0.73,-0.53l-0.21,-1.67l-0.76,-1.92l-1.01,-0.92l1.8,-0.64l0.27,-0.32l0.41,-2.69l-0.31,-1.79l-0.34,-0.32l-0.94,-0.13l-2.86,-1.29l-0.86,0.07l-0.95,-1.35l-1.69,-1.04l-0.37,-0.02l-1.3,0.77l-0.51,-0.15l-1.34,-0.91l-1.2,-0.45l-0.32,-0.34l0.5,-1.11l0.72,0.03l0.41,-0.34l0.16,-1.45l-0.75,-2.02l0.05,-0.73l0.51,-0.17l0.73,0.15l0.85,1.08l0.28,1.05l-0.15,1.36l0.63,1.14l0.58,0.43l0.61,-0.24l0.27,-1.04l0.55,0.43l1.41,0.26l3.22,-0.74l0.81,-0.74l0.08,-0.44l-0.38,-0.24l-2.23,0.07l-0.7,-0.47l-0.88,-1.23l-0.9,-2.37l1.84,-0.98l1.42,-1.93l-0.05,-0.53l-0.59,-0.56l-0.8,-0.35l-0.77,0.12l-0.43,-0.41l-0.06,-0.62l0.54,-0.84l-0.02,-1.28l-2.18,-2.93l0.25,-0.53l1.38,-1.38l1.32,-1.73l-0.09,-0.92l-0.29,-0.28l-1.14,-0.24l-4.65,0.74l-1.83,0.64l-2.83,0.26l-0.07,-1.25l0.73,-1.66l-0.07,-3.77l0.37,-1.81l1.77,-0.69l2.18,-3.03l3.42,-3.47l3.55,0.07l1.62,-1.0l1.85,-0.05l0.7,1.37l1.94,1.0l3.63,-0.11l1.84,-1.01l0.07,-0.6l-1.33,-1.5l1.34,-0.18l1.24,0.33l-0.82,1.45l0.21,0.55l0.46,0.19l4.59,-0.56l4.58,0.47l1.55,-0.25l3.6,0.02l0.93,-0.72l-0.05,-0.62l-1.1,-0.77l-1.16,-0.32l-0.92,-0.54l1.82,-1.36l7.34,-1.36l4.57,-0.53l0.35,-0.34l0.06,-0.39l-0.39,-0.46l-6.45,-0.87l-1.33,-0.63l-1.92,-1.58l-0.78,-1.04l0.6,-2.77l0.55,-0.6l2.16,-0.11l8.06,1.38l5.81,-0.82l6.37,2.01l6.03,-0.41l1.57,-1.12l1.46,-2.82l8.42,-4.81l3.0,-2.55l3.12,-1.36l5.51,-1.57l4.54,-2.04l1.21,-0.22l10.96,0.98l7.59,0.13l3.52,-1.91l1.48,0.48l-0.47,1.06l0.18,1.39l1.18,1.76l1.36,1.34l3.82,1.74l4.81,-1.42l1.46,0.46l1.73,4.59l1.44,1.72l1.88,1.17l1.41,0.22l0.36,-0.13l1.01,-1.11l0.69,-0.39l1.56,-0.17l2.7,1.48l1.19,1.73l4.95,1.27l4.49,0.63l2.03,1.39l6.39,1.39l2.61,-0.23l3.98,-1.45l7.64,-1.57l5.14,2.2l1.4,0.29l1.25,-0.17l1.64,0.58l2.16,-0.34l2.62,-1.2l0.0,69.29l-6.32,3.29l-4.43,1.47l-4.4,0.95l-7.9,-0.2l-0.92,-0.32l-3.39,-2.52l-1.92,-0.54l-1.6,-0.15l-4.06,1.84l-2.52,0.86l-3.79,1.66l-4.8,-0.16l-0.93,-0.71l-0.79,-1.06l-2.24,-0.58l-1.66,-0.18l-0.83,0.69l-0.44,1.34l-0.81,4.14l1.38,3.48l-1.95,0.2l-0.87,0.36l-0.62,0.54l-0.48,2.83l-1.12,0.43l-0.76,0.67l-0.67,1.65l-2.03,-1.23l-0.54,-0.1l0.56,-1.17l-1.91,-5.07l0.84,-1.41l2.0,-1.94l2.23,-2.57l-0.2,-2.76l-1.83,-1.81l-0.45,-0.05l-1.96,1.07l-1.39,1.17l-0.95,0.27l-0.99,0.67l-0.59,1.29l-1.03,0.82l-1.76,0.33l-2.82,-0.97l-3.11,-1.51l-1.91,-1.29l-1.69,-0.28l-1.48,0.6l-4.09,3.05l-3.79,4.48l-0.87,0.72l-3.45,1.86l-2.21,0.61l-1.14,-0.13l-4.62,0.83l-2.28,0.12l-1.85,0.97l-3.33,-1.02l-2.03,-1.33l-1.22,-1.36l-2.06,-3.03l-1.66,-1.6l-3.29,-1.3l-5.75,-3.17l-1.67,-0.4l-8.11,-0.75l-0.35,0.16l-0.92,1.37l-0.31,4.5l-0.67,1.18l-0.34,2.41l-0.4,0.53l-0.52,0.29l-1.11,-0.66l-1.18,-0.32l-1.99,0.97l-3.93,1.35l-1.22,0.17l-4.49,-1.67l-1.61,-1.05l-0.98,-1.1l-0.35,-1.96l-0.69,-1.24l-0.37,-1.73l-1.17,-0.63l-0.38,0.04l-0.89,0.63l-0.88,-0.02l-1.25,-0.4l-3.14,-1.72l-2.61,-0.19l-0.35,0.17l-1.42,2.05l-1.0,0.59l-0.76,0.12l0.86,-1.29l-0.36,-0.63l-3.8,0.25l-2.06,1.04l-1.39,-0.14l-0.77,-0.31ZM721.5,767.79l1.54,1.45l0.89,0.53l0.34,0.03l1.67,-0.72l1.77,0.09l0.65,-0.48l0.44,-0.07l1.38,0.24l-0.28,1.9l0.89,2.36l2.0,3.17l2.18,1.74l8.14,3.94l1.2,0.28l-0.72,2.57l-0.44,0.77l-2.12,0.54l-6.48,-1.72l-1.73,-0.18l-1.42,0.4l-2.05,1.2l-2.42,-0.38l-3.36,0.72l-0.29,0.24l-0.91,2.33l-2.25,2.63l-3.76,2.16l-2.85,1.26l-4.12,4.21l-1.86,2.43l-0.86,0.49l0.55,-1.43l-0.06,-1.98l2.44,-2.15l3.66,-1.75l1.14,-1.61l-0.34,-0.62l-2.94,0.04l-2.9,0.32l-1.81,-0.2l-1.39,0.1l-0.64,-1.49l0.76,-0.34l0.94,-1.36l2.12,-2.39l0.34,-0.92l-0.0,-0.71l-0.35,-1.11l0.02,-2.31l2.56,-1.73l0.82,-0.18l0.29,-0.26l0.3,-0.86l-0.18,-2.17l-0.39,-1.67l-1.28,-0.78l-1.16,-1.16l-1.1,-0.37l0.07,-0.53l0.3,-0.35l2.17,-0.59l0.91,-2.16l0.28,-0.18l2.45,-0.19l1.2,-0.31l1.23,-0.68l0.57,-0.55l2.33,-0.32l0.65,-0.26l0.45,0.16l0.86,0.93ZM702.54,801.16l-2.69,0.47l-0.4,-0.22l0.57,-0.63l2.0,-0.66l0.56,0.75l-0.04,0.28Z"
                        data-code="TR"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M899.6,746.44l-3.54,-2.98l-2.62,-1.83l1.19,-2.03l0.66,-0.23l4.32,0.92l0.0,6.15Z"
                        data-code="GE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M479.66,671.16l0.01,-1.74l0.15,-0.5l0.75,1.72l-0.21,0.58l-0.69,-0.07Z"
                        data-code="LI"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M721.67,438.41l1.43,0.09l0.34,0.24l0.48,2.05l3.47,2.82l0.33,0.46l0.01,2.25l-0.17,0.57l-0.73,0.88l-0.62,2.01l-0.1,1.96l-0.96,3.24l0.28,0.5l0.22,0.06l2.09,-0.55l0.69,0.76l0.21,2.17l1.29,2.26l0.31,1.28l1.2,1.24l0.89,3.8l0.43,2.98l-0.61,2.43l-1.53,0.37l-1.91,1.45l-3.43,3.97l-0.8,2.59l-3.4,-0.11l-3.63,-0.62l-1.56,0.58l-1.72,2.42l-0.55,0.29l-1.99,0.33l-0.41,0.26l-2.31,-0.8l-1.52,-1.05l-2.67,-3.54l-5.8,-5.1l-1.16,-0.66l-6.82,-1.66l-1.61,-2.88l-0.54,-1.74l-1.08,-0.57l-2.2,0.73l-2.39,2.11l-0.62,0.25l-4.64,0.47l-1.47,-0.73l-2.73,-0.85l-2.72,-0.11l-5.62,-0.81l-1.26,0.91l-0.69,0.11l-0.87,-1.18l-1.46,-0.54l-1.58,0.45l-2.43,0.05l-6.94,-0.76l-5.97,2.31l-4.6,3.09l-3.09,2.44l-0.35,-3.84l0.22,-9.23l0.52,-4.48l2.44,-2.61l1.32,-2.18l0.78,-2.93l0.23,-2.66l0.49,-2.09l3.54,-6.07l2.8,-0.66l3.9,-1.74l4.02,-1.34l1.21,3.06l5.26,5.11l1.29,1.64l2.02,5.8l5.36,3.22l4.01,-1.02l4.75,-4.09l1.44,-2.02l0.35,-2.14l-0.55,-8.08l-0.83,-3.52l0.22,-1.7l0.45,-0.06l1.27,-1.03l4.19,-1.93l0.9,-0.11l0.98,-0.41l2.5,-1.39l1.64,1.62l0.76,-0.19l0.25,-0.58l-0.04,-0.48l0.37,0.11l3.08,2.43l1.28,0.62l0.78,0.17l1.09,1.17l2.52,0.73l0.49,1.25l3.62,4.67l2.42,1.58l1.23,0.34l4.93,-1.94l0.66,-0.01l0.88,0.73l2.08,1.02l2.44,0.3Z"
                        data-code="LV"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M681.0,428.99l1.85,-5.56l0.33,-3.94l0.53,-0.44l0.31,-0.73l-0.27,-1.5l-0.23,-0.28l-1.86,-0.82l-0.98,0.09l-0.3,0.22l-1.27,2.22l-1.32,0.49l-1.32,-0.96l-3.16,-1.34l-0.74,-1.67l-0.19,-1.82l-1.79,-2.0l-0.66,-1.97l0.24,-1.23l1.44,-0.9l0.59,-1.02l-0.38,-0.58l-2.0,0.07l-0.9,-3.1l0.66,-0.88l0.4,-1.13l-0.06,-0.37l-0.54,-0.73l0.64,-1.94l-0.27,-2.08l1.74,-1.09l1.84,-0.83l4.02,-0.44l0.35,-0.47l-0.32,-1.69l1.45,-0.18l2.64,-2.45l2.79,0.39l3.91,-1.74l7.88,-0.09l1.05,-1.03l0.11,-0.36l-0.16,-1.57l1.09,0.21l2.35,-0.19l8.99,2.15l2.19,0.01l2.98,2.12l1.9,0.64l4.87,0.0l7.53,0.97l0.33,-0.11l1.44,-1.44l0.31,0.36l1.03,1.79l-1.13,0.71l-0.5,0.91l-0.86,0.1l-0.78,0.62l-1.99,6.09l-1.8,2.75l-1.51,1.6l-0.7,1.26l-0.41,1.42l-0.11,1.6l1.41,7.71l-0.02,1.31l-0.57,2.86l0.2,1.38l0.95,2.22l0.98,3.14l0.39,2.01l1.41,1.62l-0.18,0.36l-2.99,1.24l-0.67,1.85l-1.28,1.56l-0.65,3.27l-1.73,-0.3l-1.99,-0.97l-1.14,-0.83l-1.06,0.05l-4.81,1.9l-0.78,-0.28l-2.12,-1.37l-3.55,-4.57l-0.22,-0.75l-0.57,-0.79l-2.56,-0.74l-0.91,-1.06l-2.12,-0.82l-3.1,-2.45l-0.91,-0.3l-0.48,0.22l-0.18,1.08l-1.51,-1.6l-0.47,-0.06l-2.69,1.5l-0.9,0.37l-0.93,0.12l-4.3,1.98l-1.24,0.99ZM666.95,411.47l-0.72,0.17l-2.24,-1.55l0.42,-0.85l0.51,-0.33l1.86,0.63l0.27,1.58l-0.09,0.34ZM657.28,410.34l1.2,0.64l1.75,-0.61l1.74,0.37l4.31,3.07l0.13,0.26l-2.12,0.31l-0.28,0.18l-1.12,1.51l-0.83,0.3l-1.26,1.33l-1.71,1.28l-0.37,0.69l-2.88,-0.13l-2.03,0.62l-1.49,1.65l-0.56,2.75l-0.95,2.04l-0.87,0.66l-0.64,0.07l-0.05,-1.05l2.21,-3.0l0.51,-1.07l-0.22,-0.54l-1.04,-0.41l-0.98,-1.08l-1.95,-1.19l-0.16,-0.42l0.74,-0.47l0.55,-0.85l0.31,-1.09l-1.49,-2.81l0.37,-0.19l0.82,0.08l0.99,0.76l0.5,-0.01l1.12,-0.93l0.29,-0.08l0.7,0.29l0.52,-0.21l0.76,-1.73l1.81,-0.57l0.94,-0.55l0.73,0.12ZM661.52,404.19l-1.1,1.14l-0.61,-0.78l-0.71,0.02l-1.36,2.77l-1.28,0.4l-0.58,-0.35l0.05,-1.0l-1.1,-3.09l-1.41,-0.84l-2.03,-0.13l-0.64,-0.53l4.62,-0.68l0.31,-0.24l0.55,-1.32l0.99,-1.28l0.57,-0.1l0.4,0.19l0.14,1.0l0.45,0.68l2.33,0.59l0.86,1.66l0.29,1.79l-0.76,0.12Z"
                        data-code="EE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M639.04,493.11l-0.42,-1.51l0.48,-2.73l-0.91,-3.93l-1.46,-4.66l-0.19,-5.97l3.46,-2.73l4.53,-3.04l5.71,-2.22l6.79,0.77l2.53,-0.05l1.38,-0.45l1.01,0.31l0.94,1.27l0.38,0.16l1.24,-0.25l0.89,-0.77l5.47,0.79l2.69,0.11l2.58,0.81l1.73,0.78l4.88,-0.51l0.87,-0.37l2.25,-2.03l1.72,-0.65l0.51,0.19l0.53,1.67l1.95,3.25l6.96,1.7l0.96,0.56l5.68,4.99l2.72,3.59l1.71,1.17l2.35,0.84l-0.34,2.48l-1.32,4.17l-0.07,1.06l0.77,0.72l2.49,0.27l0.89,0.33l-1.58,1.48l-0.59,1.58l-4.14,-0.14l-0.72,0.57l-0.47,1.75l-0.49,1.0l-0.97,0.85l-1.73,0.37l-1.61,0.84l-1.09,2.1l-0.79,2.71l0.04,3.55l-1.4,2.42l-1.02,3.07l0.14,0.7l0.38,0.29l0.74,0.01l0.99,0.34l0.49,0.62l0.2,0.76l-0.12,1.13l-0.71,0.29l-1.28,0.01l-0.65,-0.35l0.31,-1.09l-0.3,-1.16l-0.7,-0.82l-0.54,-0.04l-1.12,0.88l-1.25,0.06l-1.41,0.86l-1.0,1.42l-0.69,0.39l-2.26,-0.26l-0.33,0.12l-0.7,0.82l-0.62,2.99l-1.96,-0.05l-1.91,1.09l-1.98,0.81l-1.79,-1.28l-2.45,0.42l-1.87,-0.08l-1.89,0.53l-2.23,-0.16l-0.76,-0.35l0.01,-2.94l-0.39,-1.58l-1.22,-1.48l-2.8,-1.96l-1.63,-0.54l-0.44,-0.99l-1.72,-1.03l-1.08,-0.16l-0.74,0.59l-0.86,-2.51l0.06,-1.53l0.33,-1.57l1.64,-4.81l-0.07,-0.95l-1.29,-1.58l-1.45,-0.99l-0.77,-1.97l-0.36,-0.25l-6.64,-0.1l-2.62,-0.85l-4.3,-2.23l-1.38,-0.88l-0.74,-0.93l-0.4,-0.14l-1.64,0.26ZM635.23,491.83l0.33,-0.58l-0.01,0.05l-0.31,0.53Z"
                        data-code="LT"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M433.16,608.92l-0.06,1.71l0.46,1.5l1.68,2.23l1.02,0.77l2.0,0.79l0.06,0.59l-0.1,0.8l-1.01,1.28l-0.42,1.02l-0.46,2.55l-0.97,-0.59l-0.83,-0.1l-1.01,0.31l-0.69,0.65l-0.64,0.14l-0.49,-0.13l-0.78,-0.71l-1.03,-0.33l-0.19,-0.29l0.51,-0.77l0.56,-1.35l-0.01,-0.37l-1.29,-2.45l-0.76,-0.92l0.01,-0.3l0.23,-1.75l0.59,-0.89l1.04,-2.49l1.29,-1.55l1.12,0.22l0.2,0.44Z"
                        data-code="LU"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M631.67,697.2l-0.56,-0.63l-1.03,-1.82l-2.98,-2.05l-1.35,-2.26l3.03,-0.78l1.62,0.61l0.76,-0.31l0.68,-0.59l0.67,-1.35l0.8,-0.2l2.68,0.33l1.45,-0.91l0.51,-0.6l0.47,-1.51l0.83,-0.34l0.25,-0.38l-0.15,-1.42l0.8,-2.12l1.19,-0.78l1.2,-1.14l0.11,-0.4l-0.24,-0.85l0.18,-0.55l2.14,-3.44l0.14,-1.59l1.69,-1.94l1.12,-3.27l1.65,-1.75l0.16,-2.31l1.43,-1.23l2.32,-3.03l2.51,-0.86l1.07,0.24l0.76,-0.2l0.99,-0.71l2.71,-2.99l2.29,-1.12l1.16,-1.59l0.55,0.04l2.94,1.93l3.45,-0.05l4.49,1.14l0.87,-0.13l1.64,0.74l1.41,-0.1l1.42,-0.55l1.27,-0.17l1.09,0.28l4.18,4.21l0.35,0.14l1.25,-0.15l1.28,-0.44l1.42,-1.61l3.86,-1.71l9.42,-1.65l0.27,-0.17l1.57,-2.48l0.38,-1.72l3.99,-1.06l1.18,-0.07l0.88,0.14l1.43,0.84l1.0,1.05l2.3,3.92l1.04,2.32l0.64,2.5l0.82,1.64l1.56,1.8l2.2,4.2l2.1,2.29l0.48,1.2l0.7,1.07l2.94,2.7l1.03,3.6l1.19,2.94l-0.22,2.53l0.28,1.15l-1.67,6.04l-0.28,3.32l0.21,2.91l0.55,2.22l0.04,1.07l-1.06,0.85l0.01,0.51l1.84,2.84l1.43,2.0l1.94,1.17l4.3,1.16l0.61,-0.14l0.26,-0.3l-0.22,-1.02l1.39,0.37l1.89,-0.63l2.59,-1.55l2.25,-0.3l2.06,0.87l1.68,1.89l-0.92,5.2l-0.95,2.36l-5.83,1.39l-0.37,-2.54l0.54,-0.79l-0.24,-0.62l-1.88,-0.27l-0.78,0.64l-0.53,0.9l0.39,2.2l-0.98,1.7l-0.07,1.55l-0.45,0.73l-0.09,0.71l0.46,0.44l0.41,-0.07l-0.22,0.59l-2.08,2.53l-0.77,1.68l0.18,5.84l-0.97,4.2l-2.4,-0.05l-2.03,-0.51l-2.2,-0.88l-2.17,-3.0l-0.44,-0.16l-1.84,0.54l-0.83,-0.74l-1.6,-0.44l-1.74,-0.01l-4.75,-2.77l-3.29,0.41l-4.86,1.18l-3.76,1.46l-3.91,2.62l-1.6,1.97l-1.69,0.97l-2.45,0.73l-4.48,-0.28l-9.86,-2.02l-2.86,0.57l-3.66,-0.43l-5.68,-1.26l-4.2,-0.38l-4.07,0.71l-0.45,-0.36l0.03,-1.18l0.47,-0.6l0.94,-0.52l0.63,-0.65l0.16,-0.82l-0.14,-0.35l-1.19,-0.97l-2.27,-1.27l-1.03,-0.87l-0.14,-0.78l-0.62,-0.67l-0.83,-0.38l-0.6,-0.65l-0.42,-0.93l0.08,-0.82l0.58,-0.79l0.7,-0.33l1.23,0.06l0.46,-0.27l0.18,-0.45l-0.32,-0.89l-1.13,-0.91l-2.26,-1.09l-1.99,0.57l-2.13,2.22l-1.06,0.26l-0.89,-1.38l-1.6,-0.88l-2.39,-0.32l-1.24,-0.5l-0.58,-0.87l-1.0,-0.66l-2.05,-0.66l0.04,-0.14l1.79,-0.2l0.48,-0.61l0.05,-0.5l-0.21,-0.37l-1.68,-0.75l-0.53,-0.47l0.36,-0.07l0.52,-0.46l0.17,-0.74l0.8,-1.09l-0.1,-0.71l-0.98,-1.0l-2.71,-0.92l-1.0,-0.91l-0.81,-0.13l-0.92,-0.48l-3.06,-2.78l-0.16,-0.19l0.17,-0.86l-0.27,-1.19l0.18,-1.25l-0.06,-1.7l-0.35,-0.47l-0.53,0.03l-0.28,0.27Z"
                        data-code="RO"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M765.39,947.08l-0.33,0.13l-0.25,0.42l0.35,0.35l1.86,0.21l4.2,-0.94l0.68,-0.91l0.41,-1.3l1.34,0.22l4.59,2.07l1.26,0.02l3.65,-1.3l0.33,0.2l-0.63,0.21l-0.2,1.01l-1.37,1.85l0.15,0.6l1.78,0.83l1.38,0.31l1.14,1.85l0.47,0.2l1.62,-0.55l1.02,-1.3l0.01,-0.48l-0.43,-0.59l3.25,2.71l1.25,0.6l1.19,-0.1l2.22,-0.67l0.73,0.08l2.79,-0.82l0.75,1.1l0.43,0.14l2.43,-0.72l3.95,-0.0l3.29,-0.84l3.66,-1.92l3.74,10.93l0.56,2.41l1.74,3.98l3.24,10.91l-0.63,0.61l-1.57,2.64l-1.61,7.92l-2.3,6.16l-0.28,3.94l-0.35,1.3l-7.31,0.0l-0.69,-0.6l-2.23,-3.16l-2.46,-2.12l-2.21,-2.66l-0.58,-1.84l0.0,-1.33l-1.02,-3.16l-0.79,-1.55l-2.75,-3.27l-0.78,-1.72l-1.21,-1.88l-1.01,-4.32l-1.1,-2.75l-0.58,-0.19l-1.26,0.76l-0.19,0.42l0.19,0.99l-1.05,1.55l-0.66,1.85l0.51,1.77l2.32,2.4l0.41,0.9l0.51,2.08l-0.06,3.04l0.43,1.11l1.68,2.15l1.54,3.41l1.72,1.95l2.46,3.64l2.44,2.53l-113.28,0.0l-0.01,-17.93l-1.55,-6.06l-0.85,-4.97l-1.24,-3.81l-0.1,-0.95l2.33,-3.94l1.16,-3.58l0.16,-1.69l-1.3,-4.49l-0.33,-4.13l3.51,-4.58l0.78,1.49l0.29,0.21l2.13,0.33l7.0,-1.71l18.21,3.83l4.0,2.63l1.21,0.35l2.7,-0.05l1.97,1.54l7.36,0.74l3.88,1.67l2.23,1.34l1.58,0.48l1.29,-0.09l1.61,-0.51l2.12,-1.0l2.25,-1.35l4.54,-3.39l1.47,-0.55l2.32,0.1l0.33,-0.2l2.2,-2.98l2.26,-0.24ZM783.58,946.31l0.38,0.23l0.46,0.51l-0.84,-0.74Z"
                        data-code="EG"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M544.56,530.02l3.69,1.76l0.59,-0.42l-0.41,-1.52l0.16,-1.04l-0.09,-1.6l-0.29,-0.36l-2.82,-0.82l-1.63,-0.25l-0.14,-0.77l2.28,0.24l4.48,-2.15l7.74,-2.8l8.26,-2.63l1.96,-0.29l1.95,-0.56l1.66,-1.82l1.11,-1.73l2.39,-2.61l4.3,-0.97l1.78,-1.35l3.38,-1.78l7.81,-2.03l3.24,-0.44l3.09,-0.05l2.75,1.55l-1.08,-0.15l-0.41,0.54l2.05,5.43l1.15,1.98l2.39,1.56l2.01,0.53l6.0,-0.86l2.21,-1.18l0.48,-0.44l0.44,0.19l7.66,0.61l26.6,1.42l7.64,0.23l0.78,-0.29l0.64,-0.74l0.67,0.09l1.02,0.51l0.42,0.33l0.3,0.87l0.32,0.3l1.63,0.5l2.61,1.81l1.05,1.22l0.34,1.35l-0.04,2.8l1.64,8.25l2.59,7.51l0.94,3.57l0.67,4.61l0.08,2.96l-0.17,1.35l-0.64,0.73l-4.88,2.48l-1.07,0.91l-2.82,3.98l-0.45,1.29l0.48,1.07l3.51,1.92l0.61,0.66l1.24,0.78l0.63,1.17l-0.02,1.35l-0.58,2.0l0.21,1.58l-1.05,2.09l-0.07,2.31l1.61,3.69l0.25,1.02l-0.28,0.98l0.16,1.1l2.67,3.94l1.0,2.84l0.68,1.19l1.48,1.46l0.06,0.25l-0.34,0.31l-0.83,0.22l-0.47,0.71l0.03,0.41l0.88,1.28l0.62,2.14l-0.06,1.62l-0.46,0.45l-1.02,1.95l-3.57,0.8l-2.76,3.09l-1.34,1.2l-5.08,5.84l-4.48,6.15l-0.8,1.45l0.11,1.4l0.97,3.88l-0.36,2.61l1.95,2.02l-0.07,0.46l-0.17,0.16l-1.22,-0.33l-1.61,-0.76l-1.5,-0.11l-5.93,-2.56l-0.67,-1.73l-1.16,-1.07l-2.51,-0.86l-0.94,-0.6l-4.1,-0.41l-3.7,0.22l-0.35,0.18l-1.02,1.56l-0.57,0.37l-0.89,0.04l-0.79,-0.24l-1.04,-0.89l-1.53,-0.45l-1.21,0.19l-1.5,-0.22l-1.01,0.19l-2.84,1.54l-0.82,1.06l-0.53,1.46l-1.53,-0.66l-1.68,0.55l-0.18,-0.07l0.36,-1.12l-0.2,-2.19l-0.78,-0.64l-1.19,-0.28l-2.05,-3.46l-0.61,-0.57l-0.54,0.01l-1.81,1.46l-0.86,0.43l-1.25,2.14l-1.88,0.06l-0.37,-1.81l-0.32,-0.3l-1.13,-0.21l-0.43,-2.09l-2.81,-2.95l-0.3,-1.07l0.09,-0.58l-0.34,-1.02l-0.77,-0.56l-2.28,-0.58l-0.67,0.25l-1.22,-0.97l-1.3,-0.54l-0.68,-0.79l-0.48,-0.18l-0.44,0.19l-0.49,0.63l-1.25,0.48l-0.38,-0.15l-1.96,-2.41l-1.05,-0.71l1.32,-0.62l0.55,-0.99l-0.18,-1.66l-0.4,-0.44l-0.48,0.0l-0.59,0.45l-1.26,0.4l-1.67,0.19l-3.57,-2.6l-2.32,-0.8l-1.43,-0.25l-0.42,0.2l-0.17,0.61l1.63,3.37l-1.87,0.99l-0.93,0.69l-0.68,0.82l-0.44,0.28l-0.3,-0.05l-0.43,-0.31l-1.49,-2.68l-2.02,-2.42l-1.45,-0.69l-0.14,-0.32l0.76,-0.95l1.08,-0.45l0.91,-1.63l-0.15,-0.71l-0.78,-0.83l-1.05,-0.73l-3.23,0.48l-0.63,0.29l-0.82,-1.15l-0.66,-0.13l-2.18,-1.32l-1.26,-0.23l-2.4,-0.95l-0.97,-0.07l-0.4,-0.24l-0.94,-1.37l-0.24,-1.55l-0.24,-0.31l-1.8,-0.74l-1.84,-0.48l-0.45,0.2l-0.17,0.44l0.01,2.23l-0.9,0.41l-0.49,0.02l1.25,-2.63l0.65,-1.91l0.72,-3.66l-1.09,-3.92l-0.46,-0.75l-2.48,-1.38l0.26,-2.07l-0.25,-0.9l-1.31,-2.28l-0.26,-1.15l0.96,-1.58l1.05,-3.89l-0.11,-0.38l-0.56,-0.54l-0.13,-0.69l0.15,-1.4l-0.35,-0.94l-0.96,-0.76l-0.48,-0.69l-0.22,-0.87l0.82,-3.92l-1.52,-2.73l-3.5,-3.04l-1.57,-1.99l0.11,-0.97l0.65,-0.98l1.4,-1.08l1.02,-1.78l0.63,-2.29l0.04,-2.03l-1.57,-6.2l-0.42,-3.23ZM601.84,505.56l2.93,1.92l0.06,0.12l-0.63,-0.29l-2.36,-1.76Z"
                        data-code="PL"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M507.03,919.87l1.65,0.8l2.05,0.39l6.38,3.81l2.05,0.48l4.43,0.45l5.34,-1.56l1.83,-0.26l3.38,1.43l1.6,0.42l2.49,0.11l4.28,1.3l1.03,0.43l2.49,2.07l1.39,0.71l8.88,1.9l1.1,1.15l1.18,2.3l0.07,3.04l1.82,5.05l1.39,2.08l1.62,1.78l1.78,1.07l3.95,1.53l4.54,0.61l4.47,0.2l7.64,2.09l6.46,2.41l1.67,1.22l3.2,1.15l6.52,5.7l3.62,1.97l2.67,0.43l2.51,-0.38l4.04,-1.98l1.73,-1.21l4.15,-5.0l1.38,-2.65l0.56,-1.89l-0.12,-1.99l-0.52,-1.75l-1.16,-1.81l-0.77,-2.22l-0.46,-4.06l0.61,-2.8l0.75,-1.67l1.19,-1.72l3.33,-3.35l3.35,-2.37l5.88,-3.09l3.38,-0.03l1.53,-0.36l2.92,-2.23l0.96,-0.07l1.67,0.54l4.66,-0.15l1.97,0.59l2.53,1.4l3.11,0.86l4.34,1.86l0.47,2.44l-0.31,1.88l0.15,0.34l2.64,1.97l6.89,0.88l1.27,0.47l1.97,1.47l1.35,0.47l4.75,0.2l2.77,-0.31l2.53,0.48l0.86,0.43l0.92,1.02l1.54,3.33l-2.81,3.48l-1.12,1.72l0.34,4.36l1.3,4.49l-0.16,1.44l-1.1,3.38l-2.03,3.22l-0.37,1.03l0.13,1.17l1.23,3.8l0.85,4.94l1.54,5.99l0.0,17.82l-204.27,0.0l-0.64,-8.23l0.36,-6.34l-0.51,-3.29l-0.81,-3.02l-1.45,-4.2l-1.31,-2.57l-3.0,-4.65l2.49,-1.57l3.87,-1.75l1.34,-0.82l4.42,-6.34l0.54,-1.29l0.04,-1.4l-0.2,-1.5l-1.71,-6.7l0.53,-1.14l1.51,-2.15l0.3,-0.22l2.44,-0.61l0.97,-1.14l0.88,-1.98l2.06,-1.36l0.81,-0.99l9.3,-5.48l0.42,-0.96l0.0,-1.0l-1.08,-1.99l0.07,-3.98l0.56,-4.02Z"
                        data-code="LY"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M479.6,662.65l1.17,0.96l-0.19,1.24l-1.08,2.37l-0.61,2.01l0.03,2.38l0.41,0.34l1.73,0.1l1.62,0.39l1.18,0.51l0.53,1.42l1.7,1.08l1.85,0.67l1.05,-0.32l2.1,-2.22l0.49,0.22l0.44,1.06l-0.64,3.09l-0.12,1.45l0.55,1.07l-0.03,0.85l-0.56,0.04l-1.06,-0.3l-0.97,-1.03l-0.36,-0.12l-0.87,0.16l-0.91,0.53l-0.68,2.49l0.1,0.69l0.54,0.69l0.34,1.03l0.4,2.0l-0.66,0.02l-0.89,-1.65l-0.71,-0.85l-0.93,-0.1l-3.29,1.39l-1.17,-0.15l-0.53,-0.68l-0.69,-2.5l-0.43,-0.33l-1.86,-0.19l-0.78,0.73l-0.12,3.6l-0.59,1.21l-2.45,3.28l-0.3,0.8l-0.07,0.86l0.6,1.97l-0.15,0.28l-0.57,0.18l-0.41,-0.38l-0.33,-1.17l-1.25,-1.31l0.53,-1.01l-0.09,-0.63l-0.27,-0.25l-2.3,-0.63l-2.34,-2.49l-0.22,-0.59l-0.03,-2.92l-0.26,-0.45l-0.34,-0.17l-0.95,0.11l-1.04,0.89l-0.87,1.18l-1.9,1.44l-0.22,0.68l0.56,1.56l-1.72,2.71l-2.49,1.66l-3.28,-1.05l-3.04,1.3l-2.54,0.59l-0.81,-0.37l-0.35,-0.32l-0.91,-1.76l-0.81,-0.74l-1.56,-2.02l0.56,-1.98l-0.65,-1.96l0.11,-0.66l-0.16,-0.38l-0.41,-0.25l-2.44,-0.43l-2.12,0.13l-1.6,0.77l-1.5,1.62l0.04,0.54l0.49,0.92l-0.78,0.9l-1.39,0.82l-1.04,0.03l-0.01,-0.72l0.78,-0.42l0.92,-1.0l0.38,-1.99l-0.82,-1.14l1.26,-3.23l3.32,-2.8l0.66,-3.83l2.81,-1.54l0.38,-0.73l3.54,-4.13l0.68,-1.13l0.08,-0.58l-0.32,-0.52l-0.87,-0.26l-0.11,-0.25l0.73,-0.94l1.0,-0.63l0.87,-0.01l0.29,0.63l0.48,0.42l1.17,0.23l1.15,-0.18l1.04,-0.44l1.17,-1.93l1.36,-0.75l1.08,0.42l3.11,0.12l2.32,-0.25l1.46,-0.62l1.62,0.0l1.12,0.33l0.74,-0.13l0.42,-0.35l0.99,-0.2l0.42,-0.48l-0.0,-0.54l-0.36,-0.4l-1.54,0.06l-0.29,-0.27l0.33,-0.65l0.85,-0.61l0.67,-0.14l0.43,0.14l1.65,1.37l0.36,0.04l0.55,-0.33l0.26,0.13l0.63,0.88l0.35,0.16l3.94,-0.29l4.53,2.88Z"
                        data-code="CH"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M728.07,873.66l-0.82,0.28l-0.24,-0.45l0.52,-1.72l-0.53,-1.67l0.73,-0.69l0.52,-0.99l1.24,-1.06l3.69,-1.37l-0.01,0.51l-1.12,2.58l-1.01,1.31l0.1,1.01l-1.47,0.36l-1.6,1.9ZM728.22,863.13l-0.27,-0.34l0.32,-0.21l-0.01,0.38l-0.04,0.17ZM717.36,859.42l2.55,-1.38l0.5,-0.08l0.34,0.18l-1.43,0.67l-0.57,0.51l-1.39,0.1ZM718.65,878.87l0.91,2.37l-0.41,0.12l-0.44,0.55l0.1,-1.09l-0.54,-1.27l0.37,-0.69ZM711.83,843.42l0.38,-0.48l1.25,-0.44l0.97,-0.02l1.6,0.54l1.04,0.09l0.08,0.38l-0.76,0.13l-1.67,0.88l-0.52,-0.14l-1.09,-0.87l-1.27,-0.08ZM716.42,855.63l0.55,0.52l-0.06,0.11l-0.63,0.11l0.13,-0.74ZM708.44,815.85l-0.19,0.84l0.12,0.38l1.83,1.68l0.67,1.39l-0.81,-0.33l-0.51,0.48l0.48,1.13l-0.42,0.15l-0.94,-0.02l-2.93,-0.85l-0.4,-0.54l1.64,-1.31l0.38,-0.59l-0.35,-0.62l-1.61,0.2l-1.23,1.51l-1.9,-0.64l-0.62,-0.69l0.67,-1.16l1.35,0.04l1.0,-0.37l1.05,-0.49l0.23,-0.72l1.91,-0.13l0.58,0.64ZM623.81,810.32l1.16,0.04l0.95,-0.9l0.37,-1.51l0.52,0.06l0.54,-0.27l0.14,-1.02l-0.95,-2.19l0.82,-0.58l0.37,-0.58l2.5,-0.51l0.87,-0.71l0.92,-3.24l1.12,-2.57l1.85,-0.83l0.87,-1.39l0.42,-1.11l0.03,-0.78l-1.01,-2.15l0.08,-0.89l4.52,-0.29l1.18,-0.71l2.08,0.65l0.38,-0.04l2.86,-1.56l1.98,-2.74l0.71,-0.35l1.9,-0.17l0.67,-0.32l2.75,0.61l1.46,0.09l3.19,-1.1l0.24,-0.3l0.39,-2.28l0.19,-0.17l1.59,-0.06l3.27,0.26l1.33,-1.14l2.46,-0.23l1.39,0.22l1.45,-0.03l1.72,-0.47l1.58,-0.76l1.15,0.06l0.73,-0.19l0.48,-0.4l0.23,-0.78l4.18,0.07l1.52,-0.56l1.02,1.87l2.49,1.64l0.51,-0.05l0.76,-0.54l1.8,0.48l1.82,0.85l1.56,1.27l0.34,0.08l3.75,-1.02l2.61,-0.27l0.83,-0.27l1.98,0.3l1.94,-0.7l1.02,-0.68l0.44,-1.26l-0.17,-1.64l-0.44,-1.57l-0.58,-1.03l0.37,-0.64l1.02,-0.27l2.66,0.81l1.11,1.11l1.07,0.59l0.51,3.23l-0.2,0.57l-0.82,0.21l-2.79,1.88l-0.18,0.32l-0.07,1.76l0.1,1.44l0.29,0.57l0.0,0.53l-0.25,0.62l-2.03,2.26l-0.89,1.29l-0.53,0.19l-0.33,-0.54l-2.26,-1.4l-4.82,-0.78l-2.28,-0.97l-1.11,0.13l-2.18,-1.07l-1.44,0.53l-2.74,1.89l-1.3,-0.18l-1.73,-1.2l-1.34,-0.18l-1.39,0.72l-1.98,2.22l-1.87,1.01l-1.79,-0.41l-2.49,0.01l-0.39,0.32l-0.22,1.54l0.54,0.95l1.16,1.28l-0.51,1.22l0.47,1.12l1.15,0.46l1.34,-0.05l2.29,1.35l1.09,1.62l-1.43,-1.46l-1.36,-0.41l-2.03,-1.01l-1.46,-0.12l-1.3,0.68l-0.21,0.3l0.01,1.1l1.4,1.44l1.88,1.53l0.38,1.36l-0.36,0.56l-1.16,-0.77l-2.27,-3.51l-3.48,-0.89l-0.41,0.16l-0.54,0.75l-0.06,0.36l0.64,1.89l0.6,0.93l2.53,1.83l-2.98,-0.99l-0.81,-1.57l-0.21,-2.17l-0.21,-0.31l-5.5,-3.18l-0.48,-1.26l0.48,-0.56l0.4,-1.19l-0.44,-0.52l-1.69,0.3l-0.91,0.72l-1.48,0.71l-0.23,0.34l-0.06,1.19l0.23,1.11l-0.49,1.55l-0.49,2.79l0.31,1.61l3.34,4.3l1.11,2.97l0.86,1.24l1.73,1.32l1.72,2.29l0.71,1.15l0.45,1.69l-1.19,0.99l-0.54,0.03l-0.17,-0.2l0.59,-1.34l-0.3,-1.13l-2.29,-1.28l-0.36,-0.02l-1.05,0.48l-1.12,0.84l-0.13,0.47l0.64,1.55l0.72,1.04l0.34,1.34l0.54,0.29l-0.85,0.72l-1.61,0.75l-2.75,0.19l-0.62,0.53l0.17,0.65l1.6,0.33l1.19,0.84l3.27,1.0l1.75,1.32l1.37,0.1l1.46,2.19l2.81,0.76l1.71,2.41l2.02,0.46l1.63,0.8l0.42,0.67l0.24,1.4l0.11,3.15l0.38,2.38l-0.07,1.66l-0.28,0.32l-0.27,0.01l-1.2,-1.62l-4.01,-3.98l-0.66,-0.44l-0.67,-0.1l-1.29,0.76l-3.11,0.6l-1.91,0.94l-0.4,0.66l0.16,0.47l0.62,0.4l0.7,0.83l0.03,1.37l0.68,1.65l1.08,0.63l1.24,0.01l0.4,0.19l0.21,0.63l0.99,1.18l-2.94,0.98l-1.08,0.67l-0.47,-0.29l-0.04,-1.1l-0.18,-0.32l-2.13,-1.31l-1.23,-0.28l-0.95,-0.84l-0.56,0.03l-0.67,0.74l-0.1,0.35l0.54,2.54l1.2,1.86l1.93,4.63l0.87,2.71l0.17,1.23l-0.38,2.42l1.32,2.58l-1.49,-1.12l-1.97,-2.59l-0.69,-1.63l-0.31,-0.24l-0.85,-0.13l-1.6,0.24l-0.3,0.23l-1.62,3.58l-0.03,1.51l-0.2,-0.12l-0.55,-0.49l-0.05,-3.23l-1.96,-3.06l-0.93,-0.44l-1.11,-2.05l-0.42,-0.17l-1.05,0.26l-0.96,0.74l-0.29,3.11l-0.28,0.55l-1.67,-1.7l-2.03,-3.56l-0.05,-1.78l1.53,-2.05l-0.23,-1.47l-1.56,-2.75l-2.1,-1.69l-1.1,-0.49l-0.63,-1.82l-1.13,-0.93l-0.83,-0.41l-0.09,-0.31l2.42,-2.23l1.21,-2.73l0.3,-0.07l1.43,0.67l1.49,-0.18l1.47,-1.84l0.88,-0.79l1.48,0.1l3.86,2.24l4.28,1.33l2.03,1.1l1.29,1.18l1.71,0.41l0.46,-0.42l-0.25,-1.38l0.41,-0.2l2.17,0.02l0.75,-0.58l0.42,-0.64l0.0,-0.44l-0.47,-0.73l-1.04,-0.53l-1.48,-0.32l-0.72,0.2l-1.17,-0.5l-1.13,-0.96l-2.27,-0.94l-2.15,-1.59l-0.59,0.13l-0.44,0.81l-0.7,0.39l-1.1,0.06l-3.73,-1.0l-2.15,0.78l-2.11,0.23l-2.11,0.51l-0.94,-1.26l-0.45,-1.11l-0.48,-0.4l-0.62,0.33l-0.02,1.01l-0.26,0.63l-1.27,0.38l-0.68,-0.49l-1.66,-4.66l-1.61,-2.12l-1.25,-0.59l-0.09,-0.88l0.08,-0.59l1.16,-0.17l2.36,0.94l0.91,-0.26l0.7,-0.8l-0.11,-1.0l-0.38,-0.99l-0.35,-0.25l-2.63,-0.12l-1.94,0.46l-0.65,-0.34l-0.33,-0.57l-1.59,-1.37l-1.38,-1.85l-2.27,-1.3l-1.43,-3.71l-1.08,-1.48ZM707.95,863.4l-0.21,0.27l-0.36,-0.35l0.4,0.11l0.17,-0.03ZM708.78,862.82l0.04,-0.14l0.08,0.09l-0.12,0.04ZM703.63,846.52l1.02,-1.02l1.54,-0.05l0.67,-0.23l-0.95,0.66l-2.28,0.64ZM672.76,879.36l0.46,1.24l0.9,0.38l0.93,0.12l1.72,-0.14l0.86,-0.96l0.54,-0.01l0.16,0.35l-0.78,0.39l-0.2,0.25l0.02,0.53l1.05,0.68l0.85,-0.04l0.27,1.06l0.84,0.62l1.92,-0.04l3.7,-0.97l3.65,0.24l1.5,1.05l2.58,0.12l2.39,0.54l3.39,-0.67l-0.18,2.26l0.14,0.81l0.83,0.61l0.91,-0.13l0.88,-0.81l1.67,-0.55l1.83,0.0l1.36,-1.17l-0.22,1.61l-0.46,1.7l-0.8,0.32l-4.51,-0.11l-8.47,1.09l-5.41,0.4l-0.4,-0.14l-0.14,-1.56l-0.42,-0.67l-1.9,-0.58l-1.59,-0.73l-6.45,-1.05l-1.48,-0.4l-2.55,0.2l-0.77,-0.02l-0.45,-0.27l-0.32,-0.47l-0.18,-1.85l0.28,-1.81l0.86,0.52l0.45,-0.09l0.69,-0.88l0.04,-0.97ZM704.26,834.82l-0.94,0.71l-1.18,-1.17l0.87,-0.53l0.55,-1.23l-0.5,-1.21l-1.38,-1.5l-0.04,-0.65l1.74,-0.37l1.18,0.88l0.4,0.1l-0.13,0.49l0.19,3.06l-0.62,0.56l-0.15,0.86ZM698.5,796.09l-0.89,0.27l-1.01,-0.88l0.82,-0.3l1.08,0.9ZM696.84,856.2l-0.81,0.43l-0.56,-0.63l-0.36,-1.14l1.86,-1.8l0.35,0.39l-0.04,1.74l-0.44,1.02ZM695.75,865.79l0.1,0.34l-0.34,0.48l0.2,-0.44l0.05,-0.39ZM695.07,848.41l-0.74,0.06l0.04,-0.65l0.14,-0.1l0.99,0.41l-0.43,0.28ZM695.31,804.04l-0.51,0.64l-0.56,2.25l-0.58,-0.14l-0.13,-1.02l-0.43,-0.38l-0.69,0.29l-0.37,0.86l-0.49,0.04l-0.55,-0.29l-0.13,-1.99l1.87,-0.08l0.57,0.71l0.52,0.09l0.85,-0.5l0.4,-0.55l0.26,-0.09l-0.02,0.15ZM694.65,861.11l-0.67,-0.7l-0.18,-0.35l0.97,0.79l-0.12,0.26ZM693.07,854.7l-0.79,0.95l-0.49,-0.08l-0.17,-0.26l0.42,-0.92l0.93,-0.54l0.09,0.85ZM690.78,845.21l1.8,0.33l0.17,0.22l-0.27,0.6l-0.44,-0.09l-1.26,-1.06ZM689.22,842.95l-0.12,0.35l-0.67,-0.83l-1.1,-0.87l-0.4,-0.73l-0.69,-0.53l-0.11,-0.63l0.58,-0.28l0.74,1.11l1.26,0.28l-0.03,0.61l0.54,1.51ZM686.25,792.71l-1.26,0.46l-1.42,-0.97l0.01,-0.39l1.18,-1.6l0.95,0.09l0.6,0.81l-0.06,1.6ZM685.69,856.02l0.34,0.68l-0.14,0.11l-0.15,-0.29l-0.06,-0.5ZM682.97,822.45l0.5,0.31l0.3,1.12l-0.91,-0.63l0.11,-0.81ZM684.17,824.27l0.39,0.37l-0.34,0.1l-0.05,-0.47ZM661.56,823.86l3.22,-2.04l1.94,-0.51l1.2,1.15l0.73,1.81l0.91,0.84l1.51,0.75l0.76,0.12l2.51,1.33l3.0,0.3l1.18,2.04l0.1,0.42l-0.29,0.83l0.44,2.16l0.77,2.11l1.43,1.25l1.41,0.3l1.25,-0.03l-0.0,1.63l-0.63,0.59l-1.0,-0.73l-0.75,-0.07l-0.54,-0.66l-1.34,-0.92l-0.33,-1.5l-0.57,-0.62l-0.53,-1.21l-0.58,-0.46l-0.24,-0.68l-0.36,-0.36l-3.76,-0.2l-1.21,-0.6l-0.6,-1.97l-1.43,-0.98l-1.93,-2.13l-1.56,-1.19l-1.53,-0.8l-1.62,-0.52l-1.58,0.53ZM681.22,860.85l0.53,0.3l0.2,-0.02l-0.82,0.14l0.1,-0.43ZM682.24,861.08l0.48,-0.53l0.35,-0.09l-0.0,0.48l-0.82,0.14ZM682.93,853.54l-0.53,-0.08l0.11,-0.46l0.26,-0.18l0.23,0.11l-0.07,0.6ZM681.96,849.49l-0.3,-0.69l0.24,-0.33l0.33,0.53l-0.28,0.49ZM680.68,845.86l-0.28,0.26l-0.05,-0.37l0.44,-1.0l0.29,-0.03l0.08,0.15l-0.49,0.99ZM674.97,817.83l0.0,-0.01l0.01,-0.01l-0.02,0.02ZM672.56,819.57l-0.63,-0.07l-0.25,-0.51l0.88,0.57ZM668.89,840.07l0.31,-0.62l0.21,-0.0l0.22,0.52l-0.21,0.17l-0.53,-0.06ZM661.94,867.06l1.49,1.67l-0.54,1.1l-0.82,-0.29l-0.27,-0.53l-0.06,-1.49l0.2,-0.45ZM633.68,842.46l0.54,0.64l-1.22,0.96l-1.24,-1.08l-0.99,-1.58l0.51,-0.67l0.6,0.86l1.24,0.35l0.56,0.51ZM627.1,835.16l0.71,-1.9l0.36,0.37l0.46,0.09l0.52,-0.24l0.61,-1.36l0.25,2.14l0.25,0.34l0.84,0.33l1.11,1.57l-0.08,0.65l-1.84,-0.74l-0.97,0.26l-0.29,-1.2l-0.71,-0.95l-0.55,0.0l-0.68,0.65ZM630.94,831.07l0.1,0.11l-0.0,0.23l-0.09,-0.35ZM629.87,828.02l0.46,-2.19l0.49,-0.86l0.33,-0.19l0.13,0.3l-0.06,2.58l-0.22,0.3l-1.13,0.06ZM620.87,813.3l-0.2,-0.14l-1.04,-2.17l-2.08,-2.38l-0.02,-0.36l0.57,-0.38l1.56,-0.34l0.9,0.62l-1.09,1.46l0.06,0.44l0.67,0.74l0.33,1.93l0.33,0.58ZM622.63,814.25l0.03,0.01l0.0,0.0l-0.04,-0.01Z"
                        data-code="GR"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M726.1,454.64l0.8,-2.72l0.1,-1.95l0.58,-1.88l0.65,-0.73l0.29,-0.84l0.13,-1.42l-0.13,-1.22l-0.58,-0.87l-3.38,-2.73l-0.51,-2.09l-0.77,-0.47l-1.2,-0.08l0.01,-0.15l0.58,-2.8l1.19,-1.41l0.68,-1.84l2.7,-1.0l0.5,-0.52l0.11,-0.59l-0.27,-0.67l-1.18,-1.17l-0.39,-1.96l-0.99,-3.19l-0.93,-2.14l-0.18,-1.14l0.56,-2.79l0.03,-1.48l-1.41,-7.78l0.09,-1.33l0.39,-1.33l0.61,-1.1l1.48,-1.56l1.84,-2.82l1.92,-5.97l0.37,-0.35l1.23,-0.31l0.55,-0.99l0.77,-0.32l0.48,-0.59l-0.24,-1.22l-1.51,-2.02l0.64,-1.82l-0.24,-2.5l-0.42,-2.01l0.47,-1.2l0.51,-0.07l1.11,1.59l1.66,0.87l0.46,-0.06l1.21,-1.12l0.51,-2.27l0.55,-0.6l1.05,0.71l1.95,0.31l1.71,-0.14l1.21,-0.48l0.64,-0.85l0.47,-1.32l0.85,-1.54l0.75,-0.85l6.83,1.15l6.11,2.21l0.48,-0.18l0.47,-0.83l0.26,-1.57l-0.14,-0.37l-2.61,-1.86l-1.43,-2.56l-2.05,-2.03l-2.31,-0.29l-2.76,0.7l-3.86,-0.4l-3.38,-3.72l-2.3,-1.23l-1.66,-3.22l0.85,0.64l0.63,-0.25l0.39,-3.33l-1.08,-1.44l-0.94,-0.74l-0.46,-0.02l-4.46,2.9l-4.01,0.75l7.55,-9.14l3.44,-2.94l1.07,-1.6l6.97,-6.47l3.26,-4.42l2.7,-2.91l8.36,-12.0l3.51,-4.7l5.03,-5.72l3.41,-4.62l1.37,-2.59l2.08,-6.21l1.3,-3.23l0.06,-1.22l-0.43,-1.23l-2.34,-3.38l-2.17,-4.27l-2.82,-2.81l-7.52,-6.14l-4.88,-5.59l-0.74,-1.2l2.85,-1.85l2.78,-4.44l1.22,-2.28l0.35,-1.94l-0.17,-3.86l-0.37,-1.22l-1.48,-1.65l-3.73,-2.55l-1.58,-4.78l-0.01,-0.88l1.82,-2.84l0.08,-1.46l-0.25,-1.53l-0.75,-1.24l-3.82,-1.22l-0.99,-1.19l-0.84,-2.02l-0.43,-1.75l-0.04,-0.98l0.25,-1.04l1.22,-1.21l1.21,-0.87l0.38,-1.53l-0.01,-1.3l-0.23,-0.75l-0.28,-0.26l-2.3,-0.58l-0.14,-0.43l1.44,-2.87l0.18,-4.38l1.21,-3.06l-0.05,-0.39l-1.25,-1.63l1.9,-0.85l1.92,-0.23l1.0,-0.39l0.25,-0.34l0.1,-1.47l-0.21,-2.06l-2.53,-10.26l-3.15,-6.21l-1.07,-2.68l-0.63,-2.82l-1.1,-3.17l-2.33,-5.61l-2.69,-5.25l-0.34,-1.37l0.26,-2.58l2.09,-4.31l4.44,-7.95l5.01,-7.89l0.69,-4.57l-0.22,-0.93l-2.12,-2.32l-4.01,-6.25l-2.44,-4.79l-8.95,-4.75l-2.84,-10.73l0.11,-1.7l3.7,-8.72l0.35,-1.59l-0.06,-1.1l-0.44,-0.8l-0.65,-0.47l-3.37,-0.3l-0.27,-0.62l1.77,-0.79l4.48,-3.06l3.08,-1.61l0.76,-0.89l0.56,-1.05l2.33,-7.48l5.88,-2.34l2.35,-1.35l1.31,-1.63l0.63,-1.28l0.43,-1.45l0.46,-3.14l-0.43,-1.76l0.28,0.03l2.03,1.87l3.2,2.03l2.54,0.22l1.15,-0.41l0.73,-1.18l0.36,-1.81l0.02,-1.85l-0.65,-4.58l1.81,0.41l5.42,3.09l1.68,-0.29l1.78,-1.12l1.6,-3.59l0.92,-0.48l1.42,0.77l0.56,-0.19l0.46,-1.26l-0.81,-3.02l0.12,-0.88l4.95,3.01l2.46,2.5l5.01,2.1l0.75,0.98l0.06,1.85l-0.22,1.55l-0.84,0.74l-1.96,-0.14l-7.79,-2.65l-0.45,0.15l-1.16,1.62l-0.01,0.46l1.05,1.5l2.17,1.56l0.61,2.76l0.44,0.31l3.43,-0.39l3.27,1.08l1.42,-0.27l0.14,0.45l-1.02,2.26l0.06,0.42l0.51,0.62l0.52,0.09l3.72,-2.31l1.52,-0.56l0.61,0.4l0.11,1.67l-0.61,2.36l-0.08,1.88l-1.11,4.24l-1.8,1.42l-0.75,1.83l0.09,0.44l0.44,0.08l2.61,-1.12l1.49,-1.29l2.67,-6.14l0.61,-0.64l7.18,-0.11l1.59,0.37l6.9,2.86l2.08,0.29l2.37,-0.37l1.0,-1.42l0.5,-0.24l7.5,3.12l10.27,7.13l15.04,11.67l8.44,10.2l1.18,2.35l3.08,1.24l0.46,-0.12l0.47,-0.6l1.36,0.58l10.17,9.3l3.45,0.48l0.44,-0.49l-0.75,-2.85l1.0,1.14l1.93,3.63l2.3,2.63l2.34,3.93l1.56,1.24l0.0,47.02l-5.21,4.56l-10.96,5.6l-8.53,2.09l-3.4,0.15l-6.67,-1.03l-3.61,-1.11l-4.47,-3.17l-4.31,-1.65l-3.02,-0.73l-5.34,-0.29l-11.58,-3.14l-1.95,-1.07l-7.29,-6.19l-0.47,-0.04l-2.84,1.72l-1.38,0.25l-0.9,-1.65l0.64,-1.2l-0.22,-0.51l-4.14,-1.78l-3.43,-0.15l-1.79,-1.48l-2.23,-1.16l-0.42,0.03l-0.88,0.62l-0.32,-0.0l-4.36,-2.65l-1.94,-2.14l-1.99,-3.72l0.43,-1.16l0.58,-0.85l-0.21,-0.61l-7.3,-2.32l-6.84,-0.31l-0.39,0.25l0.1,0.45l1.19,1.1l3.06,0.66l1.79,1.5l2.02,2.07l-0.47,2.83l0.11,0.35l3.01,2.98l2.23,2.73l0.24,1.05l1.02,0.65l3.18,0.77l0.51,2.21l-0.52,1.21l0.63,1.65l2.55,1.61l1.59,0.47l1.51,0.79l-0.66,1.54l-1.45,1.17l-1.52,0.56l-0.07,0.71l1.0,0.53l1.95,-0.17l7.26,3.16l3.81,3.18l3.91,5.82l1.24,2.8l0.09,1.49l-0.21,1.51l-0.56,1.68l-0.27,1.77l-1.34,4.99l-0.92,1.65l-1.83,1.95l-0.07,0.44l3.58,7.37l1.78,5.8l0.31,2.29l0.07,3.57l1.41,1.4l-1.06,1.58l0.21,4.84l2.25,3.77l3.48,2.56l2.37,0.55l2.74,-0.93l1.91,1.22l4.59,4.49l2.08,4.73l1.08,1.19l4.73,1.78l3.53,1.09l5.36,2.84l1.09,0.15l0.32,-0.11l2.56,-2.41l4.44,-1.69l1.65,-2.77l-0.12,-2.02l-1.16,-3.67l-0.43,-3.74l-1.49,-1.45l-1.45,-1.0l-4.47,0.66l-1.75,-0.13l-1.29,-0.86l-1.89,-2.47l-3.67,-6.18l-1.98,-2.1l-0.58,-1.21l-0.65,-1.71l0.07,-2.42l1.49,-0.03l1.8,-1.66l1.39,-5.95l1.98,-0.67l1.07,0.05l5.11,2.7l6.59,7.4l1.6,0.82l1.58,0.11l2.21,-0.17l0.4,0.84l1.34,1.14l1.14,0.23l5.89,2.28l6.94,4.52l2.84,-0.14l0.34,-0.25l1.02,-2.51l0.21,-1.02l2.66,-2.39l1.77,-0.38l2.67,0.89l0.46,-0.16l0.52,-0.84l0.0,506.22l-4.48,-0.89l-1.09,0.47l-1.25,2.12l-1.01,-0.71l-4.8,-4.74l-2.57,-3.21l-8.3,-7.38l-1.28,-0.66l-4.35,-1.06l-1.66,-0.8l-4.42,-5.25l-0.44,-0.12l-1.9,0.68l-1.64,-0.17l-0.96,-0.43l-1.06,-0.71l-0.73,-0.92l-0.91,-2.18l-1.26,-1.48l-3.53,-1.87l-3.92,-1.08l-0.23,-0.53l3.13,-1.16l1.03,-0.79l-0.06,-0.66l-2.53,-1.22l1.28,-0.65l1.32,0.73l1.67,1.53l1.62,0.67l0.44,-0.1l0.61,-0.66l5.08,-1.25l0.28,-0.26l0.35,-1.01l0.01,-1.27l-0.43,-0.39l-0.4,-0.01l0.03,-0.98l0.72,-1.61l2.37,-2.92l1.21,-3.83l0.77,-0.63l0.38,0.28l0.1,1.49l0.33,0.32l0.41,-0.2l1.34,-2.92l1.41,-0.01l1.31,0.29l1.25,-0.21l0.25,-0.65l-2.4,-2.97l-3.26,-3.03l-0.34,-0.1l-1.22,0.2l-0.64,-0.35l-1.33,-2.33l-0.42,-1.48l2.39,0.29l2.55,-1.41l0.8,-0.18l1.5,0.44l2.14,0.29l0.45,-0.45l-0.18,-1.36l-0.55,-1.35l2.23,-1.02l2.36,-0.68l4.37,-2.31l1.9,-0.4l0.28,-0.22l0.28,-0.67l0.04,-0.86l-1.34,-3.29l-0.35,-0.23l-2.33,-0.07l-0.34,0.18l-1.2,1.79l-3.31,0.59l-0.65,-0.05l0.57,-0.56l1.35,-0.59l0.35,-0.52l-0.4,-0.62l-2.51,0.45l-1.42,1.33l-3.11,1.42l-0.1,-1.03l0.2,-0.56l0.62,-0.55l0.25,-0.96l-0.25,-0.37l-0.79,-0.32l-0.03,-0.16l0.72,-1.7l0.04,-1.46l0.35,-1.44l0.92,-0.85l1.93,-0.27l1.85,-0.94l1.14,-1.07l1.33,-2.35l0.84,-0.29l3.44,0.35l3.15,0.07l4.72,-0.22l0.88,-1.04l0.03,-1.72l1.44,-4.02l1.0,-1.37l0.03,-0.89l-0.22,-0.33l-1.27,-0.47l0.56,-1.07l-0.11,-1.26l-0.64,-2.53l-1.13,-0.84l-1.37,-0.35l0.69,-2.56l0.98,-1.16l1.29,0.25l1.26,-0.29l0.46,-0.43l0.08,-0.38l-0.45,-0.86l-1.67,-0.54l-1.38,-0.69l-0.55,-0.79l-0.17,-0.64l2.6,-1.09l2.44,-2.82l0.58,-1.15l0.3,-1.25l-0.02,-1.38l-0.93,-1.43l0.0,-1.14l0.49,-1.16l-0.19,-0.71l-1.11,-0.71l-1.09,0.16l-1.02,0.44l-1.09,-0.08l-4.23,-3.2l-2.19,-0.33l-0.65,-0.7l-0.53,-1.15l-0.5,-0.48l-0.41,-0.09l-1.92,0.76l-1.29,-0.11l-1.82,-1.19l-1.73,-1.43l-2.77,-0.31l-2.78,-1.88l-0.98,0.18l-0.5,0.74l-0.3,1.56l-0.99,0.29l-1.15,-0.82l-3.28,-3.0l-1.28,-2.13l-0.41,-1.78l-2.39,-2.65l-1.28,-0.1l-2.82,1.39l-1.96,0.26l-3.11,1.01l-1.78,1.64l-1.53,-1.41l-1.78,-0.35l-0.86,0.28l-0.61,-0.48l-0.77,-1.22l-1.19,-0.96l-3.32,-0.57l-1.33,0.7l-1.47,1.13l-0.76,-0.33l-0.56,-1.36l-0.86,-0.57l-0.95,-1.55l-0.24,-1.33l0.61,-1.4l0.04,-1.14l-0.33,-0.99l-0.47,-0.7l-0.48,-2.19l-0.42,-1.0l-0.06,-0.63l0.3,-0.64l-0.02,-0.38l-0.61,-0.68l-1.48,-0.01l-0.33,-0.23l-0.82,-2.41l-0.46,-0.65l-0.33,-0.15l-1.05,0.04l-3.09,0.69l-0.5,-0.05l-2.96,-1.38l-3.42,-0.17l0.7,-0.81l0.03,-0.94l-0.65,-0.68l-0.27,-1.05l-0.08,-2.9l-1.15,-2.04l0.03,-0.33l3.24,-0.77l0.56,-0.73l-0.01,-1.08l-3.91,-4.55l-1.3,-3.82l-1.3,-2.19l-1.46,-1.5l-1.22,-0.71l-1.88,0.22l-2.12,-0.03l-2.34,-0.43l-1.88,0.29l-3.43,1.87l-1.11,0.07l-3.96,-1.21l-1.13,0.01l-0.75,0.31l-0.54,0.62l-1.11,3.5l-1.96,1.25l-1.8,0.08l-2.58,-1.15l-1.01,-2.51l-0.55,-0.92l-0.69,-0.56l-0.24,-0.45l0.1,-4.59l0.26,-0.19l0.1,-0.53l-1.16,-1.85l-0.08,-1.21l0.59,-0.85l-0.02,-0.8l-0.47,-0.97l-1.24,-1.42l-2.32,-3.27l1.8,-3.63l3.19,-0.1l0.86,0.3l0.42,0.81l1.2,1.02l2.79,0.38l1.43,-0.09l1.52,-0.87l2.38,-1.86l0.66,-1.4l1.34,-0.87l1.61,-0.51l0.32,-0.35l0.03,-1.95l-0.44,-0.95l-2.86,-2.2l-0.5,-1.32l0.33,-0.86l-0.01,-0.91l-0.19,-0.34l-3.54,-2.08l-2.83,-0.36l-2.29,0.11l-0.48,-0.22l0.86,-2.62l0.17,-1.52l-0.24,-0.98l-0.57,-0.68l-5.18,-3.18l-1.34,-2.1l-0.71,-2.27l-0.86,-1.51l-1.4,-0.91l1.01,-2.42l-0.09,-0.75l-0.53,-0.64l-1.83,-1.1l-2.38,-1.94l0.1,-1.53l0.32,-1.17l2.04,-3.39l-0.3,-2.26l-1.92,-3.3l0.06,-0.92l1.11,-1.77l0.04,-4.33l-0.33,-0.63l-0.47,-0.4l-0.94,0.06l-0.89,-0.42l-1.26,-1.03l-2.41,-2.96l-3.02,-1.41l-2.75,0.17l-1.6,-0.18l-0.75,0.31l-0.88,0.95l-0.93,0.51l-0.91,0.07l-0.74,0.45l-1.76,1.41l-0.65,-0.67l-0.71,-1.26l0.56,-2.16l-0.04,-1.03l-0.45,-0.83l-1.25,-0.71l-2.68,-1.3l-0.92,-0.06l-1.38,0.55l-1.89,1.32l-0.41,-0.17l-1.33,-2.45l-1.11,-0.87l-2.47,0.01l-1.35,0.82l-1.61,-1.85l0.69,-2.81l-0.45,-3.12l-0.89,-3.88l-1.32,-1.48l-0.22,-1.1l-1.32,-2.34l-0.14,-1.94l-0.5,-0.91l-1.03,-0.51l-1.6,0.46ZM899.6,232.85l-0.9,-3.59l-1.29,-3.31l-1.92,-2.18l-3.31,-6.13l-1.31,-3.03l-0.64,-3.09l0.86,-4.66l6.82,-4.98l1.7,-2.04l0.0,33.01ZM836.14,220.47l0.36,1.05l0.13,1.96l-0.4,1.26l0.15,1.1l-0.31,0.29l-1.1,-2.13l-0.34,-0.22l-0.61,-0.03l-0.69,-0.9l-0.33,-1.5l0.27,-0.18l0.62,0.12l1.45,-1.16l0.8,0.34ZM617.24,512.38l1.73,-1.68l1.39,-2.15l1.19,-2.86l0.38,-3.79l1.52,-0.7l4.05,0.06l1.77,-1.11l4.11,-5.21l-3.73,5.01l0.12,0.59l1.12,0.63l1.37,0.24l1.63,0.9l1.62,0.15l2.62,-0.77l0.29,-0.34l0.62,-7.45l1.54,-0.23l0.73,0.87l1.5,0.95l4.31,2.24l2.76,0.91l6.56,0.12l0.72,1.85l1.59,1.15l1.08,1.22l0.06,0.56l-1.62,4.75l-0.36,1.75l-0.05,1.76l0.98,2.81l-7.52,-0.22l-26.58,-1.42l-7.53,-0.6Z"
                        data-code="RU"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M899.6,939.49l-1.3,-0.62l-15.83,-2.83l1.43,-1.36l0.1,-0.42l-0.61,-1.72l-0.46,-0.26l-2.44,0.62l-0.58,-1.92l0.66,-0.21l0.26,-0.49l-3.78,-13.91l22.55,-13.6l0.0,36.73Z"
                        data-code="IQ"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M52.03,247.38l1.77,-1.74l-0.23,-0.69l-0.78,-0.08l-0.21,-0.33l-0.04,-1.04l0.66,-1.8l3.22,-2.5l1.3,-0.52l0.35,-0.52l-0.05,-0.51l-0.44,-0.42l-0.84,-0.34l-0.38,0.06l-3.34,2.65l-2.29,0.87l-0.52,-0.13l-1.18,-0.97l-0.83,-1.44l0.05,-0.53l1.13,-2.04l-0.18,-0.77l-0.97,-0.4l-2.1,-1.89l-3.69,0.09l-8.62,-1.12l-1.85,0.52l-2.86,1.66l-1.56,0.49l-0.58,-0.26l-0.65,-0.79l-1.18,-2.51l0.19,-0.76l0.94,-0.5l0.7,-0.24l2.42,0.33l2.78,-1.04l1.83,-0.23l0.69,-0.27l1.3,-1.24l0.51,0.25l0.33,0.65l0.51,0.19l2.89,-1.22l0.97,-0.6l0.42,-0.66l1.16,0.53l1.3,0.06l1.51,-0.45l8.1,-0.29l0.29,-0.14l0.85,-0.97l0.49,-1.04l0.5,-2.19l-0.25,-0.72l-0.56,-0.17l-3.43,1.96l-4.6,-1.06l-1.16,-0.95l0.31,-0.63l2.1,-2.03l2.19,-1.66l3.26,-1.81l0.85,-0.77l0.21,-1.1l-0.17,-0.37l-2.19,-1.51l-4.16,0.32l-1.16,-1.75l-3.44,-1.06l-2.31,0.6l-1.05,-0.94l-0.45,-0.06l-2.95,1.49l-6.52,2.15l-2.65,1.51l-1.17,0.41l-1.51,-1.13l-2.78,-1.38l-3.01,-0.43l-0.13,-0.38l1.63,-2.22l1.03,-0.37l1.06,0.19l2.44,1.74l1.66,0.54l0.45,-0.15l-0.02,-0.48l-1.98,-2.43l-0.11,-2.37l-0.7,-0.82l-0.54,-1.4l0.11,-0.22l0.52,-0.12l1.51,0.5l3.93,2.8l0.33,0.06l1.95,-0.5l1.21,-1.11l1.41,-0.75l0.09,-0.64l-0.69,-0.52l-3.38,-0.05l-1.7,-0.53l-0.82,-0.73l-0.68,-1.19l0.15,-0.34l0.74,-0.4l2.82,0.15l0.34,-0.65l-3.22,-3.84l-0.11,-0.52l0.24,-1.23l3.11,1.34l0.86,0.09l0.36,-0.63l-2.12,-2.4l0.57,-0.47l0.35,-1.34l0.74,-0.4l0.84,-0.02l0.91,0.44l3.13,2.62l0.39,0.63l0.13,2.69l0.51,0.27l1.1,-0.37l0.85,0.44l0.79,-0.11l1.27,-1.72l0.44,0.22l0.42,0.71l0.14,0.69l-0.08,3.64l0.72,0.16l0.76,-1.1l1.3,-0.08l0.36,-0.28l0.21,-0.74l0.05,-2.36l-0.12,-2.02l-0.19,-0.54l-5.05,-2.95l-0.79,-0.61l-0.91,-1.16l0.11,-0.35l0.76,-0.49l1.32,-0.23l3.3,0.03l0.6,-0.38l0.04,-0.57l-0.83,-0.84l-1.44,-0.43l-0.38,-0.96l-0.48,-0.3l-1.79,0.43l-1.95,0.02l-1.63,-0.41l0.65,-0.95l1.55,-1.47l0.59,-0.3l2.25,0.25l2.14,-0.41l1.61,0.46l1.34,1.42l2.02,2.63l2.76,1.73l0.29,0.54l1.44,1.36l2.9,3.68l2.92,2.13l0.05,0.22l-0.33,0.43l-1.08,0.71l-0.12,0.55l0.46,0.58l1.38,0.5l0.94,1.26l0.05,0.45l-0.94,4.33l-0.82,1.13l-2.53,-0.77l-0.48,0.55l0.77,1.56l1.89,1.45l0.32,0.6l-0.23,0.66l0.11,0.43l0.69,0.23l0.39,-0.22l-0.11,1.2l-0.77,2.24l0.14,0.39l0.44,0.26l0.67,-0.11l0.53,0.17l0.98,1.09l0.9,3.73l0.45,1.22l0.39,0.26l0.37,-0.28l0.32,-1.08l0.73,-3.94l0.68,-0.66l0.31,-0.98l0.52,-3.02l1.75,-2.23l0.76,-0.63l0.55,-0.11l1.69,2.68l1.13,0.44l0.69,-0.38l0.6,-1.71l0.75,-3.28l0.17,-3.65l-0.4,-3.95l0.23,-2.74l0.78,-1.52l0.85,-0.39l1.19,0.55l0.95,0.95l2.02,3.92l1.69,2.12l1.47,2.27l0.92,0.82l1.65,0.35l0.6,-0.34l0.29,-0.63l0.13,-0.96l-0.3,-5.61l0.37,-1.67l0.5,-1.06l2.46,-0.73l1.46,-0.85l1.32,-1.27l1.0,-0.63l0.67,-0.07l0.76,0.41l0.91,1.04l1.48,2.12l1.89,3.54l2.41,2.67l1.52,4.85l0.56,0.32l0.45,-0.18l0.36,-0.64l0.22,-0.86l0.04,-1.98l-0.69,-2.51l-2.24,-6.21l-0.04,-1.07l0.19,-0.63l1.27,-0.08l3.55,0.56l1.05,0.87l3.21,4.74l0.56,0.34l0.57,-0.23l0.11,-0.34l0.95,-0.71l0.68,-0.86l1.16,-2.16l2.36,-3.67l0.78,0.18l1.18,0.93l0.7,0.88l1.44,0.65l1.4,-0.3l1.64,-1.31l1.85,-0.8l0.87,-2.14l0.14,-0.94l-1.5,-5.7l0.5,-0.91l3.12,-1.34l2.71,-0.1l0.5,0.29l3.57,5.11l0.23,2.6l0.83,0.98l1.62,1.09l1.75,0.09l2.54,-1.16l1.18,-0.84l2.56,-2.59l1.39,-0.66l2.36,0.17l-0.53,0.39l-1.27,0.44l-1.68,1.59l-1.67,3.68l-1.23,1.95l0.14,1.06l1.54,1.45l1.58,0.78l0.35,0.0l1.28,-0.63l0.34,0.15l0.49,0.87l0.36,1.84l-0.25,2.0l-0.84,2.01l-1.16,1.72l0.11,0.89l0.27,0.27l1.16,0.29l4.59,-1.08l0.45,2.3l0.41,0.81l-0.1,0.64l-1.91,2.65l0.04,0.52l0.52,0.04l2.26,-1.67l1.66,-0.44l2.96,0.81l1.14,0.88l0.71,1.64l0.55,0.19l1.16,-0.51l0.53,0.73l0.02,0.86l-0.5,1.43l-0.18,1.33l-0.39,0.41l-1.13,0.54l-0.32,0.83l1.14,2.13l0.99,0.22l0.06,0.16l-0.09,1.0l-1.36,1.33l0.08,0.6l2.28,1.54l0.21,0.42l0.03,0.74l-0.17,0.87l-0.35,0.91l-0.53,0.46l-1.57,0.09l-1.23,0.73l-0.17,0.46l0.33,1.06l-0.03,1.31l-0.3,1.56l-1.28,2.4l-1.19,1.26l-1.07,0.75l-1.97,-0.27l-1.13,-0.63l-0.59,0.37l0.12,1.98l-1.11,1.2l-0.1,0.35l0.23,1.1l0.4,0.59l-0.18,1.2l-0.55,1.32l-0.92,1.43l-1.02,0.87l-2.15,1.11l-1.93,1.92l-1.14,0.66l-3.21,-0.0l-3.3,1.23l-4.61,2.56l-3.14,2.08l-2.41,2.33l-3.11,3.69l-2.24,1.51l-1.26,0.39l-2.7,0.36l-2.17,0.99l-7.27,1.88l-2.53,1.05l-0.52,1.12l-1.06,1.54l-0.06,0.51l0.51,0.88l-0.79,1.45l-1.62,1.07l-0.57,-0.01l-1.23,-1.03l-0.68,0.14l-0.32,0.77l0.47,1.07l-0.72,0.38l-4.64,1.41l-7.97,-1.05l-3.15,-1.09l-4.03,-1.79l-2.42,-0.48l-3.19,-0.11l-2.61,-2.36l-1.18,-1.43l-0.07,-0.46l0.32,-0.95l1.05,-0.18l0.46,-0.43l-0.0,-0.39l-0.69,-1.24l-0.56,-0.15l-0.73,0.46l-1.64,1.61l-0.48,-0.04l-0.8,-0.67l-0.03,-0.67l-0.34,-0.38l-1.94,-0.31l-1.66,-1.0l-1.65,-1.45l-0.11,-0.25l0.65,-0.66l0.0,-0.56l-0.99,-0.42l-1.65,0.39l-1.88,1.89l-0.69,0.37l-12.45,0.45l-3.57,0.35l-0.37,-0.83l-0.66,-4.53l0.4,-1.51l0.75,0.77l0.67,1.31l0.68,0.58l0.39,0.08l4.37,-1.48l1.84,-1.03l0.91,-1.1l0.86,-1.55l0.97,-0.88l1.93,-4.39l0.66,-0.78l0.74,-0.48l1.86,-0.38l0.32,-0.35l-0.23,-0.41l-1.27,-0.59l-1.38,-0.04l-4.25,2.63l-0.71,0.0Z"
                        data-code="IS"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M613.44,797.24l0.71,0.37l0.54,-0.18l0.25,-0.53l-0.24,-1.42l-1.29,-2.73l-0.08,-0.6l0.6,-2.17l1.07,-2.7l-0.07,-3.07l0.32,-2.32l-0.53,-3.42l0.72,-2.32l0.66,-0.66l0.41,-0.79l0.07,-2.85l-0.14,-0.31l-1.48,-1.25l-1.55,-0.28l0.22,-3.44l-0.41,-1.1l-0.58,-0.72l1.48,-2.83l1.94,-2.72l1.45,-2.45l0.35,-0.19l0.14,1.95l0.34,0.67l0.46,0.38l1.36,-0.12l2.47,-1.12l0.4,0.31l1.07,1.73l0.73,1.58l1.63,0.74l0.75,0.58l0.98,0.89l0.45,0.84l0.69,2.81l0.08,1.65l-1.02,3.79l0.14,2.27l-0.49,0.38l-0.41,0.9l0.58,2.29l-0.01,2.26l1.13,2.71l1.17,1.19l0.79,2.43l0.76,0.52l1.67,-0.22l0.63,0.19l0.28,0.64l-0.08,1.47l0.99,2.03l-0.0,0.47l-0.98,2.06l-2.02,0.99l-1.22,2.77l-0.81,3.04l-0.51,0.45l-1.87,0.27l-0.79,0.32l-0.48,0.67l-0.87,0.59l-0.21,0.35l0.03,0.66l0.92,1.88l0.01,0.35l-0.59,-0.07l-0.38,0.18l-0.49,1.71l-0.64,0.61l-0.77,-0.11l-1.53,-0.86l-0.08,-1.34l-0.42,-1.26l-1.55,-3.09l-5.08,-3.08l-1.09,-1.24l-0.66,-1.41Z"
                        data-code="AL"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M469.9,691.31l-0.56,1.08l0.07,0.46l1.38,1.43l0.35,1.2l0.67,0.62l0.39,0.09l0.95,-0.3l0.54,-0.78l0.02,-0.33l-0.62,-1.99l0.05,-0.5l0.85,-1.57l1.79,-2.27l0.69,-1.4l0.16,-3.67l0.28,-0.19l1.26,0.26l0.68,2.33l0.91,1.09l1.61,0.22l2.16,-1.01l1.19,-0.39l0.47,0.07l1.26,2.25l1.01,0.39l0.85,-0.34l0.29,-0.66l-0.48,-2.15l-0.38,-1.14l-0.49,-0.59l-0.07,-0.49l0.58,-2.02l1.01,-0.29l0.89,0.95l1.41,0.46l1.05,-0.04l0.36,-0.3l0.11,-1.49l-0.54,-0.98l0.1,-1.22l0.51,-2.07l2.74,0.18l0.85,0.94l1.2,0.49l1.33,0.11l0.99,-0.15l0.73,-0.64l1.39,-2.61l1.33,-0.69l2.47,-0.14l1.3,-0.28l3.33,0.22l5.25,-1.87l-0.79,1.3l0.29,1.3l3.38,4.85l1.32,0.63l3.0,0.5l6.35,1.47l4.39,0.35l2.42,0.59l-0.14,0.56l-1.48,0.9l-2.25,1.94l-0.4,1.29l0.31,0.97l0.4,0.4l1.07,-0.01l1.68,0.7l-1.91,2.13l-0.18,0.8l0.11,0.58l0.42,0.47l1.26,0.01l-0.56,2.32l0.21,0.68l0.32,0.25l-0.57,0.11l-1.09,1.02l-3.28,-1.12l-0.36,0.05l-0.67,0.48l-0.59,1.03l-1.1,1.06l-1.74,0.54l-1.9,1.27l-3.44,1.54l0.87,-0.92l-0.27,-0.67l-0.81,0.02l-1.93,1.09l-1.21,1.11l-0.67,3.99l0.15,0.36l0.75,0.59l1.4,3.14l1.69,1.37l-0.68,1.95l-0.76,0.63l-0.89,-0.55l-0.55,0.02l-0.38,0.32l-0.41,2.1l0.76,5.71l1.31,4.08l1.28,1.75l2.77,2.63l2.99,1.43l5.23,4.39l2.91,1.42l0.67,0.66l1.71,3.32l1.5,3.86l1.62,6.08l1.22,3.12l2.38,3.43l4.86,4.81l4.45,3.54l4.31,2.25l3.28,0.38l7.54,-0.47l1.23,0.19l1.16,0.48l0.26,1.15l-0.4,0.79l-1.55,1.03l-1.76,1.71l-0.18,1.97l0.13,0.33l1.61,1.45l7.32,3.67l7.47,3.06l2.27,1.52l2.76,2.46l6.43,3.27l1.11,1.6l3.92,3.43l1.72,2.55l0.31,1.86l-1.73,4.57l-1.28,-0.42l-1.79,-1.39l-2.85,-6.0l-0.31,-0.23l-5.22,-0.61l-1.02,-0.42l-1.68,-0.94l-0.59,-1.49l-0.79,-0.5l-2.02,-0.19l-1.76,1.16l-1.67,2.38l-1.89,3.41l-1.89,4.91l-0.14,2.1l1.3,2.31l3.02,1.05l2.29,1.64l1.44,1.63l0.11,4.13l0.66,2.33l-0.76,1.02l-1.95,-0.3l-2.66,0.87l-2.01,1.63l-0.93,1.81l0.2,3.78l-0.34,1.27l-3.55,2.77l-1.88,2.82l-1.09,2.31l-4.05,0.04l-0.89,-1.36l-0.03,-2.22l0.66,-1.28l1.74,-0.88l1.12,-3.12l-0.31,-2.31l1.08,-1.46l2.9,-0.77l0.31,-0.37l0.18,-3.17l-1.43,-1.67l-1.14,-5.74l-2.28,-4.77l-1.22,-4.27l-0.98,-2.18l-1.83,-1.35l-2.59,0.01l-1.2,-0.29l-4.54,-2.92l-0.2,-0.28l0.02,-0.55l0.76,-1.45l-1.08,-3.2l-0.96,-1.41l-1.41,-0.85l-2.82,0.74l-1.22,-0.1l-0.67,0.3l0.98,-1.38l-0.02,-0.48l-0.44,-0.55l-1.9,-1.1l-2.75,-0.25l-0.44,0.23l-0.02,-0.8l-2.55,-4.67l-1.77,-1.98l-1.26,-0.46l-1.45,0.37l-2.51,-0.8l-1.63,-0.2l-1.0,0.21l-1.17,0.54l-0.34,-0.21l-0.3,-0.67l-2.37,-1.95l-2.99,-1.13l-5.69,-6.14l-1.76,-2.32l-3.66,-2.61l-2.36,-3.81l-1.97,-1.43l-2.74,-1.11l-0.87,0.12l-0.85,0.41l-0.47,-0.04l0.67,-0.36l0.25,-0.43l-0.32,-1.64l-3.12,-3.75l-1.85,-1.25l-1.22,-2.35l-1.05,-0.55l-1.52,-0.14l0.23,-2.84l-0.17,-1.36l-0.99,-3.12l-1.72,-2.68l-1.0,-6.27l-0.95,-2.06l-2.0,-1.42l-4.25,-1.52l-5.95,-4.1l-1.4,-0.14l-3.65,-1.61l-2.23,-0.28l-3.25,1.58l-3.52,3.97l-2.85,4.09l-0.94,0.72l-3.6,1.36l-2.76,0.56l-0.12,-1.26l2.22,-3.05l0.39,-1.01l-0.55,-1.83l-0.32,-0.25l-0.66,-0.06l-3.0,0.75l-0.57,-0.16l-4.65,-2.62l-0.81,-0.95l-0.28,-0.86l0.22,-0.82l-0.63,-1.47l1.44,-2.83l0.69,-0.34l0.31,-0.53l-0.47,-2.41l-0.34,-0.49l-0.56,-0.36l-1.88,-0.47l-0.69,-0.59l-0.19,-0.95l-0.45,-0.95l-0.74,-0.87l-0.06,-0.57l0.56,-0.33l2.18,0.08l1.81,-1.47l1.33,-0.49l1.22,-3.36l-0.45,-0.8l-1.5,-1.46l-0.69,-1.53l-1.1,-1.74l-1.02,-0.8l-0.17,-1.06l0.14,-0.46l1.71,-0.97l0.91,-0.91l1.54,0.72l2.75,-0.64l2.79,-1.24l3.17,1.06l1.21,-0.53l1.94,-1.36l1.89,-2.93l0.06,-0.92l-0.5,-1.19l1.79,-1.34l0.96,-1.27l0.83,-0.7l0.36,0.01l0.0,2.77l0.37,1.0l2.52,2.68l2.33,0.69ZM518.45,731.88l-0.02,0.41l0.4,0.76l0.42,0.21l0.8,-0.14l0.3,-0.24l0.4,-0.97l-0.13,-0.93l-0.46,-0.31l-0.85,0.14l-0.87,1.08ZM536.18,697.22l1.72,1.73l0.45,0.97l-0.13,0.14l-0.49,0.11l0.18,-0.65l-1.73,-2.29ZM561.63,834.76l-1.42,2.78l-3.31,4.87l-0.94,3.33l-0.89,2.26l0.22,2.33l1.37,1.38l-0.45,0.36l-0.08,0.54l1.5,1.87l0.07,0.54l-0.01,0.51l-1.35,1.22l-0.68,0.88l-0.54,1.89l0.13,1.29l-1.04,-0.07l-1.48,-0.49l-1.61,0.19l-3.49,-1.39l-1.85,-2.95l-1.47,-1.25l-1.62,-1.01l-3.36,-0.01l-1.3,-0.55l-2.86,-1.99l-3.08,-1.62l-2.59,-2.23l-1.81,-0.5l-1.7,-1.12l-2.3,0.05l-0.68,-0.07l-0.69,-0.33l-1.44,-1.21l-1.13,-2.32l1.43,-3.76l1.56,-0.94l0.69,-0.85l1.22,1.59l1.08,0.65l0.86,-0.16l1.27,-0.74l0.28,-0.93l1.16,-0.85l1.6,-0.02l0.58,0.13l0.56,0.95l1.47,0.42l2.51,1.71l0.8,0.33l0.85,0.08l2.14,-0.75l1.44,-0.26l3.16,0.4l1.85,-0.44l1.18,-0.05l1.9,-0.71l1.43,-1.16l0.6,-0.24l2.48,-0.0l2.02,0.24l0.95,-0.38l0.59,-0.68l0.54,-0.24l1.0,0.15l2.07,-1.22l0.73,-0.07l0.33,0.18l-0.42,0.44ZM539.48,791.01l-0.33,0.08l-0.16,-0.12l0.04,-0.11l0.45,0.15ZM512.96,859.12l0.47,0.17l0.21,0.48l-0.66,-0.33l-0.02,-0.32ZM491.6,752.91l0.12,0.33l-0.27,0.73l-0.73,-0.37l-1.65,0.43l-0.73,-0.07l-0.14,-0.39l2.01,-0.41l0.89,0.1l0.51,-0.35ZM462.39,788.24l0.85,0.78l2.2,0.43l1.63,-0.32l1.72,-0.81l1.8,-1.09l2.33,-2.81l1.52,-0.64l0.76,-0.76l0.47,-1.09l0.55,0.75l1.11,0.25l1.28,0.74l1.05,1.62l0.78,0.63l-0.6,1.2l0.07,0.43l1.06,0.91l0.62,1.04l1.5,4.61l0.13,0.89l-0.27,0.91l-1.92,3.28l0.22,1.94l0.56,1.25l0.07,1.2l-1.21,11.63l-0.7,3.09l-0.69,0.31l-3.03,-1.32l-1.53,0.32l-1.02,-0.62l-0.64,0.26l-0.45,3.35l-0.68,1.25l-0.99,0.76l-0.9,0.05l-1.96,-0.29l-0.55,-0.5l-2.34,-4.09l-0.25,-4.66l0.64,-1.44l0.19,-1.49l-0.11,-1.16l0.54,0.17l0.4,-0.17l0.24,-0.38l0.1,-1.85l-0.77,-1.29l-1.16,-0.43l0.02,-1.65l0.64,-0.79l0.21,-0.94l0.02,-2.96l-0.87,-1.24l-0.3,-1.51l-0.51,-1.19l-2.14,-2.59l-0.11,-1.98l0.39,-1.97ZM464.41,820.05l0.73,0.4l-0.35,0.78l-0.36,-0.53l-0.02,-0.65ZM462.91,784.93l0.16,-0.34l0.17,-0.1l-0.11,0.23l-0.23,0.21Z"
                        data-code="IT"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M315.33,622.63l0.7,-0.4l-0.2,0.58l-0.5,-0.19Z"
                        data-code="GG"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M515.02,605.17l1.18,1.22l0.6,1.3l0.68,0.07l1.12,-1.97l1.22,-1.55l1.17,-0.83l2.1,-0.34l0.78,-0.44l2.54,0.45l0.47,-0.37l0.61,-1.4l2.01,-0.39l0.93,-1.4l0.85,-0.24l0.73,-0.66l0.74,0.35l0.86,-0.38l0.82,-1.68l0.23,-0.14l1.96,-0.26l2.67,-0.96l1.4,-0.87l1.36,-0.48l1.4,-0.81l2.23,-0.79l0.35,-0.58l-0.13,-0.44l-1.0,-0.79l-0.44,-0.75l0.19,-0.3l2.62,0.47l0.32,0.21l0.2,0.81l0.77,0.97l-0.1,0.91l0.14,0.35l0.7,0.55l1.1,0.41l0.84,-0.22l0.54,-0.74l1.07,-0.08l1.18,-0.54l0.23,-0.32l0.1,-0.87l-0.06,-1.43l2.95,1.0l0.27,1.55l1.18,1.67l0.73,0.39l0.88,0.05l2.38,0.94l1.19,0.21l2.13,1.29l0.69,0.16l0.77,1.17l0.47,0.09l0.75,-0.37l2.71,-0.51l0.88,0.61l0.63,0.69l-0.46,1.03l-1.25,0.65l-1.03,1.32l-0.03,0.37l0.44,0.82l1.33,0.59l2.03,2.39l1.46,2.64l0.85,0.62l0.83,0.04l0.72,-0.48l0.69,-0.83l2.79,-1.64l0.2,-0.3l-0.0,-0.73l-1.51,-2.89l3.13,0.93l3.76,2.67l2.01,-0.22l1.78,-0.72l0.14,0.98l-0.25,0.55l-1.49,0.7l-0.22,0.46l0.6,1.03l0.8,0.4l2.0,2.44l0.71,0.31l1.77,-0.56l0.62,-0.62l0.65,0.75l1.38,0.57l1.35,1.06l0.41,0.01l0.45,-0.25l2.04,0.52l0.45,0.35l0.06,1.17l0.35,1.26l2.89,3.11l0.29,1.61l-0.8,0.31l-2.2,0.11l-0.84,0.56l-1.7,1.62l-0.69,1.11l-2.65,1.57l-0.53,0.83l-0.34,1.0l-0.32,2.33l-0.34,0.42l-1.86,0.8l-0.38,0.66l-1.71,1.61l-1.71,0.9l-1.82,0.27l-4.18,-0.63l-0.83,0.51l-0.98,1.24l-1.31,2.93l-0.44,-1.23l-0.26,-0.25l-2.26,-0.61l-2.33,-1.29l-1.26,-0.04l-1.45,1.19l-1.81,-0.01l-2.07,-0.3l-3.07,-2.2l-1.87,-0.0l-1.26,-0.49l-2.64,-1.45l-1.33,-0.38l-1.92,0.54l-0.3,-0.4l-0.99,-0.59l-1.17,-0.12l-0.34,0.15l-0.38,0.57l-0.57,4.01l-1.37,0.09l-1.59,2.14l-0.22,1.26l-2.5,-0.47l-0.96,0.29l-0.74,0.71l-2.2,-0.04l-1.68,-0.43l-0.85,-1.81l-0.93,-0.77l-1.42,-0.78l-0.59,-0.96l-3.04,-2.99l-1.58,-0.03l-0.34,-0.28l-0.83,-1.68l-0.74,-0.83l-0.92,-0.38l-1.09,-0.89l-1.55,-2.07l-1.49,-1.51l-1.54,-0.1l-1.63,-1.62l-0.63,-0.92l-1.79,-3.73l-1.39,-1.87l1.37,-2.27l0.23,-0.67l-0.06,-0.58l-0.81,-1.35l-1.05,-0.95l-1.4,-0.89l-0.84,-1.06l-0.41,-1.53l-0.69,-0.94l-0.46,-1.04l0.0,-0.42Z"
                        data-code="CZ"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M794.03,886.97l0.24,0.44l0.92,0.52l1.16,0.44l0.81,0.05l3.69,-1.39l0.77,0.25l1.77,-0.07l0.67,0.72l0.1,1.49l0.39,0.41l0.44,-0.07l0.52,-0.49l2.08,0.27l1.62,-0.52l0.92,-0.65l1.04,0.51l0.57,-0.04l0.22,0.51l-2.53,0.28l-1.71,-0.06l-2.74,2.8l-1.27,0.86l-1.53,0.52l-2.52,0.39l-0.72,0.34l-0.65,0.73l-0.17,0.93l-0.36,-0.04l-0.29,-0.76l-0.79,-0.61l-2.51,0.13l-3.1,-1.23l-1.68,-3.5l-0.14,-1.39l0.95,0.25l1.22,-0.73l1.03,-1.03l1.11,-0.38l0.47,0.11Z"
                        data-code="CY"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M267.99,458.3l0.95,-0.81l2.22,-0.47l1.99,-1.82l-0.04,-0.62l-1.51,-1.05l1.55,-1.1l1.97,-3.53l0.45,-3.41l-1.47,-2.94l-1.73,-1.04l-0.26,-1.18l0.17,-0.63l0.52,-0.67l0.84,-0.56l1.41,-0.57l0.02,-0.73l-1.22,-0.58l-0.4,-0.61l-0.37,-1.49l0.66,-2.72l1.03,-2.33l3.27,0.08l0.76,-0.67l1.73,0.57l0.49,-0.53l-0.33,-0.74l-2.9,-3.46l-0.18,-0.45l0.8,-1.88l-0.05,-1.74l0.15,-0.42l0.68,-0.24l2.94,-0.0l0.7,-0.32l0.21,-0.49l-0.97,-2.12l-0.11,-0.88l0.3,-3.39l0.59,-1.06l0.96,-0.44l1.37,0.35l0.47,0.39l0.65,1.09l0.42,0.19l0.65,-0.15l2.12,-1.29l0.64,1.16l0.48,0.18l3.28,-1.14l4.42,-0.51l2.71,-0.76l2.79,-0.27l2.63,-0.85l2.42,0.34l-0.8,2.61l0.09,2.22l-0.14,0.56l-1.26,2.11l-2.68,2.1l-4.93,4.81l-3.03,2.55l-0.42,1.22l-0.22,1.59l0.33,0.45l1.65,0.3l0.34,0.27l-0.24,0.47l-2.55,2.75l-0.85,2.67l0.4,0.52l2.08,-0.11l1.69,-0.51l3.24,-1.56l2.98,-1.14l1.33,-0.04l2.79,0.91l0.76,0.05l1.31,-0.43l1.15,-0.07l8.28,0.29l2.28,-0.53l1.31,0.56l1.18,1.5l1.16,2.86l-0.02,0.32l-0.68,1.26l-1.38,1.75l-1.17,2.34l-0.96,3.96l-2.29,5.9l-2.23,3.25l-1.03,2.36l-1.2,1.78l-1.14,1.1l-1.18,0.72l-3.74,0.85l-2.27,1.6l-1.24,0.48l-0.25,0.45l0.41,0.32l1.52,-0.06l1.58,-0.57l2.55,-0.19l2.81,1.73l-0.22,1.19l-1.07,1.06l-2.99,0.31l-2.67,2.75l-1.14,0.8l-1.15,0.38l-1.49,-0.12l-2.82,-0.72l-1.22,-0.74l-0.52,0.09l0.01,0.52l1.15,1.27l1.42,0.75l7.68,1.59l0.76,-0.22l2.32,-1.57l3.01,-0.02l5.97,2.93l4.24,5.51l2.34,2.39l0.58,1.64l2.55,11.24l1.78,5.96l0.83,1.71l1.24,1.34l5.33,2.63l1.12,0.83l4.06,5.21l1.87,2.07l1.7,1.41l-0.72,0.68l-0.7,1.64l0.52,1.91l3.27,6.38l-1.46,-0.08l-2.56,-2.05l-0.34,-0.1l-2.53,0.46l-2.7,-0.17l-0.39,0.35l0.29,0.44l2.37,0.68l2.55,0.06l5.57,4.98l1.87,2.93l1.09,3.78l-0.69,1.58l-2.33,2.44l-1.09,1.51l0.1,0.56l3.44,2.25l0.81,-0.1l0.84,-0.4l2.3,-3.08l1.79,-0.21l1.59,0.13l1.62,0.39l1.51,-0.11l2.82,0.75l1.42,0.66l3.62,3.05l0.74,1.58l0.36,2.12l0.04,2.35l-1.32,4.15l-0.75,3.48l-0.39,0.65l-1.91,1.96l-1.05,0.67l-0.59,-0.29l-0.59,0.05l-0.36,0.35l-0.01,0.74l0.57,0.94l0.01,0.94l-0.96,0.76l-1.01,0.33l-2.18,-0.41l-2.75,1.71l0.05,0.71l1.83,0.82l0.28,0.66l-0.41,1.35l-1.06,0.62l-2.77,0.4l-1.17,0.4l-1.22,0.82l-0.13,0.5l0.47,0.21l1.28,-0.37l0.69,0.26l0.54,1.22l0.69,0.56l2.9,0.65l5.09,-0.33l1.72,0.12l-0.23,3.52l-0.31,0.41l-4.28,2.3l-1.05,1.79l-0.2,0.76l-2.5,-0.05l-1.13,0.99l-2.03,0.68l-3.14,1.65l-1.14,0.25l-5.55,-1.09l-3.42,0.1l-4.47,0.95l-1.03,-0.14l-1.69,-0.89l-1.85,-0.65l-2.08,-0.28l-1.72,-0.82l-0.48,0.1l-0.03,0.49l0.88,1.29l-2.07,1.32l-1.02,0.28l-1.2,-0.04l-2.36,0.42l-2.18,-0.21l-0.42,0.51l0.34,1.12l0.46,0.78l-0.49,0.2l-4.19,-0.72l-0.76,0.14l-0.59,0.62l-1.22,-0.29l-1.51,-1.13l-1.69,-0.8l-1.68,-0.36l-1.46,0.12l-5.8,1.99l-1.15,1.93l-0.54,2.53l-0.76,2.18l-1.16,1.56l-1.2,0.18l-1.39,-1.14l-2.7,-1.3l-0.89,-0.86l-0.51,-0.16l-1.53,0.72l-1.12,0.03l-1.73,0.36l-3.13,1.13l-3.9,2.82l-0.6,0.67l-0.87,1.86l-1.05,0.26l-1.16,-1.14l-1.67,-0.55l-1.81,0.44l-0.78,0.53l-0.13,-0.16l-0.01,-0.87l0.99,-1.18l3.15,-1.1l2.75,-2.74l1.87,-2.59l0.53,-0.49l1.02,-0.43l0.41,-0.97l3.81,-4.26l0.33,-1.04l0.45,-3.11l3.09,-1.22l1.42,-3.38l4.39,-0.78l3.11,0.05l3.19,0.68l1.69,0.06l1.81,-0.31l1.37,-1.05l2.17,-3.39l3.93,-4.4l2.15,-2.91l-0.03,-0.52l-0.51,-0.05l-1.48,1.03l-2.68,2.43l-3.23,0.95l-4.09,3.15l-3.42,-0.48l-2.62,-2.65l-1.95,-1.24l-0.95,-0.1l-2.2,0.64l-0.86,-0.03l0.39,-0.61l1.05,-0.66l0.18,-0.41l-0.32,-0.32l-2.45,-0.48l-1.6,-1.3l-1.97,-0.15l-1.06,0.24l-1.7,1.23l-2.28,1.14l-2.76,-1.59l-0.46,-0.59l-0.01,-1.49l-0.45,-1.17l-0.61,-0.42l0.77,-1.1l1.19,-0.94l2.84,-1.02l4.29,-2.4l2.39,-1.02l2.34,-1.83l1.04,-1.23l1.34,-3.3l0.93,-1.45l-0.19,-0.59l-0.75,-0.29l-0.32,-0.87l0.1,-0.99l0.42,-1.23l-0.41,-1.34l-0.63,-1.24l0.21,-1.99l-0.41,-0.46l-1.8,0.07l-1.73,0.35l-1.67,0.82l-1.49,1.04l-0.78,0.11l0.52,-1.2l3.18,-2.8l1.04,-2.05l0.74,-0.81l2.07,-1.64l4.01,-1.86l2.17,0.12l1.58,-0.29l1.42,-0.69l1.17,-0.12l2.98,1.9l0.46,-0.02l0.14,-0.43l-0.83,-2.74l0.77,-0.41l1.96,2.62l0.98,0.31l1.56,-0.4l0.15,-0.7l-0.6,-0.47l-0.85,-0.11l-0.77,-0.35l-0.68,-0.78l-1.22,-2.68l0.06,-1.5l1.77,-3.25l-0.2,-0.58l-0.73,-0.29l-0.48,-0.46l-0.16,-1.41l0.21,-1.21l1.74,-1.39l0.52,-1.98l0.2,-2.27l-0.29,-0.97l-0.42,-0.29l-1.84,0.19l-1.54,0.98l-0.44,-0.02l-1.98,-2.2l-3.29,-5.43l-0.28,-2.09l1.67,-4.74l2.55,-3.01l3.04,-1.06l0.27,-0.38l-0.27,-0.38l-0.74,-0.23l-4.79,-0.04l-1.68,0.4l-1.59,1.34l-1.72,0.57l-2.23,1.99l-1.45,-0.13l-0.7,0.15l-1.0,-1.3l-0.89,-0.22l-0.79,0.32l-1.4,1.11l-1.26,0.58l-1.58,-0.64l-2.29,-1.33l-0.49,0.07l-0.53,0.61l-0.51,1.25l-0.2,1.24l-1.05,-1.08l-1.35,-2.19l-0.44,-1.32l-0.03,-1.35l0.38,-0.31l0.58,0.4l0.61,-0.21l1.22,-3.8l3.28,-6.41l0.66,-2.16l-0.1,-1.26l-0.58,-1.21l-2.23,-2.4l0.26,-3.95l0.65,-1.31l2.85,0.03l0.39,-0.29l-0.18,-0.45l-1.15,-0.68l-2.17,-1.88l0.57,-2.32l-0.16,-0.44l-0.47,0.01l-0.36,0.31l-1.44,2.93l-0.45,0.38l-1.58,0.48l-0.27,0.27l-0.27,0.94l-1.02,0.4l-0.02,-1.5l0.31,-1.49l0.59,-1.15l2.4,-2.8l-0.01,-0.53l-0.53,-0.05l-1.23,0.91l-2.72,2.65l-1.82,2.46l-0.11,1.22l0.6,2.94l-0.16,1.3l-2.3,9.07l-0.69,1.17l-1.07,-0.08l-0.33,-0.44l0.0,-0.6l1.16,-5.42l0.4,-1.15l2.0,-3.35l-0.58,-0.4l-0.77,0.33l-0.24,-0.21l0.17,-5.66l0.74,-1.98l0.27,-2.79l1.91,-6.35l0.79,-0.94l0.31,-1.67l1.67,-3.42l-0.09,-0.44l-0.44,-0.08l-0.51,0.25l-4.68,4.55l-1.04,0.72l-1.43,-0.19l-1.12,-0.46l-0.84,-0.93l-0.41,-1.97l-0.37,-0.32l-1.69,-0.24ZM338.49,351.38l0.71,0.05l0.38,-0.49l0.14,0.2l-0.7,3.0l-0.53,-0.08l-0.19,-1.21l0.19,-1.46ZM336.19,358.76l-0.95,-2.02l0.84,-2.76l0.57,0.05l0.11,0.49l-0.06,0.4l-0.3,0.03l-0.4,0.54l0.19,3.27ZM332.48,358.59l0.28,2.02l0.63,0.27l0.34,-0.24l0.84,1.47l0.35,0.2l0.93,-0.2l-1.62,8.07l-0.26,2.82l-0.62,1.0l-0.43,1.89l-0.24,-0.28l1.04,-5.35l-0.23,-1.28l-0.43,-0.95l-0.35,-0.23l-1.17,-0.03l-0.77,0.3l-0.07,-0.8l-0.35,-0.51l-1.5,-0.08l-0.36,-0.79l0.8,-0.29l1.3,0.08l1.63,-1.11l0.16,-0.44l-1.02,-3.72l-0.28,-0.28l-1.3,-0.4l0.11,-0.26l0.77,-0.43l1.07,-1.79l0.48,-0.21l0.36,0.02l-0.07,1.54ZM330.27,596.78l1.69,-0.65l0.94,-0.78l1.99,0.72l0.62,0.55l-0.85,0.64l-0.5,1.01l-0.58,0.17l-0.57,0.0l-2.74,-1.68ZM315.92,393.53l-0.76,0.02l0.43,-0.84l0.69,-0.3l1.09,0.11l-1.46,1.02ZM309.71,391.5l0.45,-0.18l1.48,1.66l-1.6,-0.93l-0.34,-0.55ZM312.25,394.0l1.06,0.38l-0.07,0.48l-0.72,0.4l-0.19,-0.21l-0.08,-1.06ZM305.69,400.44l-0.16,-0.9l0.09,-1.14l0.43,-1.51l0.55,-0.23l1.05,0.17l1.3,0.89l0.31,0.44l-0.68,1.64l0.39,0.51l0.96,-0.01l1.42,0.53l0.88,0.08l0.46,0.42l-0.3,0.93l-0.51,0.25l-1.97,-1.25l-2.22,0.51l-0.25,-0.09l-0.26,-0.51l-0.17,-1.28l-0.65,-0.11l-0.67,0.67ZM310.58,406.16l-0.56,-1.19l0.7,-0.19l0.13,0.04l-0.26,1.33ZM306.96,405.33l-0.62,0.04l-1.05,-1.33l-0.4,-0.96l0.05,-0.41l1.01,0.18l0.49,1.04l0.1,0.87l0.41,0.56ZM293.37,538.91l0.65,0.51l1.0,0.04l-3.61,2.89l-0.4,-0.64l-0.84,-0.16l-0.93,-1.61l-0.17,-2.51l1.12,-0.58l1.69,0.04l1.49,2.02ZM281.02,488.71l-1.3,0.01l-1.06,-0.62l-0.77,-3.06l0.26,-1.01l0.56,-0.81l0.6,-0.12l0.68,0.48l0.27,0.47l0.72,2.14l0.04,2.52ZM264.08,494.45l1.85,0.57l1.34,0.01l1.1,1.5l0.7,2.75l1.58,2.68l2.02,2.29l0.06,1.11l-0.58,0.6l-1.5,0.92l-0.19,0.34l0.01,1.01l0.58,0.36l1.75,-0.7l1.87,0.2l0.6,0.83l0.74,2.62l-0.07,0.56l-0.49,-1.03l-0.74,-0.69l-0.86,-0.37l-0.54,0.45l0.33,1.63l-0.13,2.19l0.51,0.57l0.7,0.08l-0.47,1.62l-1.15,0.52l-1.55,0.22l-0.3,0.22l-0.69,1.87l-0.78,1.44l-0.91,0.72l-1.13,-0.14l-1.41,-0.7l-1.16,-0.14l-1.49,0.77l-2.96,0.07l0.14,-1.98l-0.37,-0.76l-1.47,-0.41l-0.36,-0.32l-0.69,-1.16l-0.31,-1.49l-0.87,-1.13l-1.19,-0.84l-0.89,0.09l-2.1,2.51l-0.03,0.43l0.53,1.18l-1.86,1.72l-0.42,0.64l-0.73,-0.31l-1.77,0.08l-0.68,-0.19l-1.08,-1.02l-2.17,-0.6l-0.51,-1.6l-3.05,-2.92l-0.26,-0.65l1.12,-1.07l3.34,-1.35l0.67,-0.65l0.21,-0.68l-0.19,-0.44l-1.81,-1.12l-0.2,-0.3l0.26,-0.23l1.89,0.12l2.55,-1.36l1.47,-2.7l0.7,-3.02l0.26,-0.45l1.74,-1.23l0.57,0.66l1.39,0.12l1.06,-0.91l1.05,-2.23l0.51,-0.1l0.95,0.18l1.71,-0.3l3.04,-1.13l1.22,-0.02ZM261.35,437.4l2.87,-0.91l0.27,-0.31l0.23,-1.34l0.27,-0.05l0.6,0.39l1.0,1.53l0.27,1.91l-0.25,2.49l0.37,2.32l0.21,0.32l1.04,0.81l2.54,0.51l2.3,-0.13l0.21,0.19l0.03,0.37l-0.29,0.55l-1.34,1.3l-1.93,2.38l-0.35,-0.03l-0.25,-3.5l-0.5,-0.36l-1.68,0.46l-1.24,-0.05l-0.6,-0.35l-1.55,-3.02l-0.25,-0.21l-3.03,-0.85l-0.78,-1.09l-0.21,-0.58l0.5,-0.84l0.83,0.21l0.51,-0.2l0.48,-0.55l0.07,-0.59l-0.37,-0.79ZM269.32,480.07l-0.42,0.05l-0.11,-0.17l-0.13,-1.44l0.32,-0.61l1.67,-1.13l-0.04,-0.68l-0.6,-0.32l0.36,-0.79l1.99,-1.57l-0.76,2.12l-2.3,4.54ZM271.87,467.13l-5.06,1.27l-1.51,-0.1l0.11,-0.38l1.42,-0.4l0.28,-0.31l0.62,-3.28l-0.18,-0.41l-2.2,-1.43l0.24,-0.9l1.31,-0.71l0.74,-0.07l0.87,0.77l1.09,1.8l1.67,0.46l0.78,0.6l-0.2,3.09ZM263.02,482.49l0.34,-1.93l0.56,-0.92l0.52,-0.33l0.31,0.29l0.54,0.01l1.9,-1.47l0.88,4.47l0.02,0.51l-0.35,0.7l-2.19,1.1l0.41,-1.24l-0.4,-1.3l0.19,-0.96l-0.33,-0.57l-0.4,-0.09l-0.6,0.25l-1.4,1.48ZM255.6,420.58l0.54,0.18l0.79,0.83l0.42,0.1l0.91,-0.32l1.07,0.16l0.48,-0.56l-0.83,-2.28l0.08,-0.24l0.37,-0.41l2.68,-1.59l3.78,-2.89l0.32,1.28l-0.06,1.74l-1.62,4.22l-0.74,0.28l-0.55,1.03l-1.75,1.18l-0.16,0.45l0.38,0.29l1.45,0.02l0.21,0.19l0.01,0.6l-2.22,2.34l-1.51,0.87l-1.42,1.97l-0.91,0.22l-0.74,1.3l-0.47,0.44l-1.0,-1.14l1.42,-1.07l0.28,-0.81l1.05,-0.67l0.15,-0.49l-0.27,-0.43l-1.83,-1.05l-0.55,-0.54l0.81,-0.78l-0.17,-0.68l-1.1,-0.85l0.03,-1.95l0.71,-0.94ZM265.13,451.87l-0.43,0.13l-0.79,-1.05l0.9,-0.49l0.47,0.63l-0.16,0.77ZM260.83,461.13l0.91,-1.13l0.2,-0.06l-0.21,0.32l-0.9,0.88ZM252.85,434.6l1.07,1.0l-0.97,1.87l-1.51,-0.01l-2.36,-1.55l0.42,-0.7l1.04,0.18l0.79,-0.39l0.91,0.05l0.62,-0.45ZM251.91,448.05l-0.78,-0.05l-0.29,-0.24l-0.42,-1.39l0.09,-4.28l1.15,0.06l0.25,5.9ZM249.74,451.78l-0.89,0.26l-0.13,-0.08l0.18,-0.56l0.53,-0.18l0.37,0.26l-0.06,0.29Z"
                        data-code="GB"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M286.39,521.0l0.85,-2.84l1.13,-1.0l1.39,-2.46l1.04,-0.53l0.56,2.66l-0.64,0.88l-0.3,0.96l-2.48,2.65l-0.85,-0.4l-0.7,0.1Z"
                        data-code="IM"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M480.85,662.6l0.88,0.03l1.25,-0.87l2.7,1.28l1.06,0.99l0.21,1.25l0.58,0.34l1.0,0.18l-0.17,1.42l0.45,0.42l0.93,-0.16l0.98,-0.59l0.88,-1.16l0.54,-1.2l0.32,-2.26l2.66,-0.01l1.18,0.46l1.37,0.06l0.36,0.8l1.2,1.49l1.26,0.26l1.86,-0.57l0.42,0.16l1.17,-0.23l1.18,-0.77l0.32,-0.55l0.96,-0.36l1.37,-0.85l1.86,-0.65l6.31,-0.72l0.57,-0.78l-0.03,-1.08l1.7,0.46l1.74,1.04l0.77,-0.01l1.94,-0.61l0.92,0.48l0.17,0.34l-0.12,0.9l0.52,0.74l2.21,1.37l0.84,-0.01l0.34,-0.25l0.26,-0.68l0.29,-3.14l-0.53,-1.14l-1.48,-0.31l0.68,-1.51l-0.01,-1.67l-2.62,-3.87l0.0,-0.39l0.63,-0.94l3.51,-2.24l3.24,-1.14l0.81,-0.68l0.6,-0.89l0.74,-3.44l2.3,1.08l1.13,-0.49l0.92,-1.09l0.2,-0.81l0.05,-2.46l1.8,1.26l0.78,1.76l0.27,0.23l2.0,0.5l2.41,0.05l1.07,-0.86l0.58,-0.14l2.69,0.52l0.46,-0.34l0.2,-1.4l1.35,-1.84l1.18,0.05l0.4,-0.29l0.35,-1.23l0.41,-3.21l0.69,0.05l1.44,1.07l1.99,-0.56l1.1,0.3l2.62,1.44l1.42,0.56l1.7,-0.06l3.22,2.26l2.2,0.32l2.06,0.01l1.61,-1.25l1.38,0.32l1.56,1.0l2.14,0.57l0.82,1.91l-0.09,0.78l-1.07,2.2l0.03,1.42l1.48,3.9l1.27,2.29l0.23,0.84l0.64,0.62l-0.61,0.77l-0.14,1.14l-0.52,0.67l-0.13,0.72l0.4,2.38l-2.86,0.19l-0.51,0.27l-1.57,-1.1l-1.06,-0.32l-0.8,0.2l-1.67,1.4l-0.16,0.49l0.15,0.37l0.24,0.23l2.63,0.89l0.38,1.13l-0.64,1.55l-1.24,0.72l-0.9,0.09l-0.35,0.33l-0.11,0.79l0.35,1.71l-0.59,1.17l0.29,1.55l0.72,0.43l-0.39,1.83l-0.2,0.22l-1.37,-0.05l-1.08,0.6l-2.2,2.18l-0.81,0.42l-0.93,1.15l-0.07,1.97l-2.42,-0.6l-1.83,0.26l-1.32,0.9l-1.3,0.45l-3.01,-0.25l-2.94,0.34l-1.49,0.4l-0.87,0.57l-1.18,1.63l-2.07,1.18l-0.49,0.61l-1.69,-0.48l-4.29,-0.66l-3.67,-0.98l-1.21,-0.07l-3.4,-0.8l-4.39,-0.34l-6.31,-1.46l-2.97,-0.49l-1.1,-0.53l-1.59,-2.57l-1.5,-1.92l-0.24,-0.75l0.92,-1.63l-0.31,-0.58l-0.38,-0.14l-2.97,0.84l-2.59,1.05l-3.28,-0.23l-1.34,0.29l-2.69,0.19l-1.65,0.93l-1.47,2.74l-0.28,0.26l-0.73,0.12l-1.23,-0.1l-0.8,-0.3l-1.15,-1.11l-2.84,-0.2l-0.02,-0.6l-0.54,-1.29l-1.09,-0.62l-0.46,0.09l-2.23,2.36l-0.4,0.14l-1.68,-0.61l-1.44,-0.93l-0.63,-1.5l-1.43,-0.61l-1.69,-0.4l0.16,-0.7l-0.74,-1.56l-0.34,-1.59l1.04,-2.27l0.26,-1.61l-0.13,-0.36l-0.62,-0.56Z"
                        data-code="AT"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M408.13,581.3l-1.22,-0.35l-1.76,-0.89l-2.65,0.66l-1.6,-0.81l-1.48,-0.12l-1.5,-1.49l0.4,-0.46l0.52,-0.21l2.52,-0.14l1.79,0.44l3.4,2.53l1.12,0.06l1.05,-0.35l0.2,-0.6l-0.47,-0.7l-2.25,-1.13l-0.38,-0.36l1.58,-0.21l0.28,-0.62l-0.68,-1.41l-2.37,-2.81l1.69,-3.7l1.7,-1.48l2.27,-3.05l1.5,-2.59l1.09,-3.03l1.57,-8.18l1.05,-2.57l1.59,0.62l2.35,-1.18l4.09,-3.1l1.28,-2.75l1.07,-1.14l4.54,-2.37l2.47,-0.7l9.99,-0.76l2.06,2.54l1.31,0.64l1.56,0.34l-0.08,6.04l-0.12,0.66l-0.85,1.8l-0.9,3.19l-0.24,2.06l-0.1,0.14l-3.38,-0.01l-0.91,0.7l0.09,1.09l-0.35,1.02l0.23,0.85l0.62,0.78l1.43,0.64l1.69,-0.01l0.67,1.09l-0.2,2.34l-0.52,1.21l-1.58,1.47l-1.49,0.88l-0.41,0.54l-0.14,1.12l1.16,1.37l-0.66,1.03l-2.85,1.17l-1.16,-0.09l-0.95,0.66l-0.68,-0.47l-2.04,-0.66l-2.29,1.1l-0.94,0.99l0.06,1.1l1.41,2.28l0.44,0.42l0.08,0.88l1.33,2.3l0.07,0.73l-0.42,1.93l-1.25,2.96l0.1,1.06l0.66,0.4l-2.38,2.09l-0.75,-0.08l-0.4,0.23l-0.15,0.33l0.11,0.79l0.45,0.62l1.53,0.76l0.44,0.76l-0.63,2.84l-2.92,-0.17l-0.55,-0.24l-0.61,-1.22l1.26,-1.68l0.2,-1.27l0.91,-2.07l0.15,-0.95l-0.48,-0.88l-0.8,-0.51l-1.86,-0.6l-0.82,-0.78l-0.4,-0.72l-0.6,-0.38l-2.4,0.5l-1.13,-0.36l-1.4,-1.33l-0.51,-2.18l-0.51,-0.57l-0.55,0.01l-1.1,1.23l-1.02,0.08l-0.26,-0.89l-0.83,-0.93l-0.51,0.02l-1.53,1.4l-0.32,-0.0l-0.96,-0.97l-0.47,-0.15l-0.98,0.4l-0.76,0.7l-0.12,0.37l0.16,1.07l-0.73,-0.09l-1.0,-0.51ZM416.5,544.21l-1.04,1.24l-0.52,-0.36l0.33,-0.98l1.24,-1.29l-0.0,1.4ZM407.39,582.29l-0.46,0.82l-1.7,1.23l-1.73,0.79l-0.76,-0.08l-1.0,-0.89l-1.0,-0.45l-1.48,-0.26l-1.64,0.93l-0.24,-0.03l-0.52,-0.74l-0.32,-1.48l0.64,-0.21l2.08,-0.12l1.73,0.65l2.26,0.32l1.78,-0.84l1.17,0.66l1.19,-0.28ZM404.03,574.35l1.37,1.32l-1.09,0.31l-1.63,-1.33l-0.37,-0.07l-0.9,0.26l-0.22,-0.35l0.87,-0.28l1.96,0.14Z"
                        data-code="NL"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M373.43,758.44l-1.46,0.82l-1.46,0.33l-0.28,-1.68l0.14,-0.67l0.71,-0.63l2.5,0.63l0.25,0.42l-0.39,0.78Z"
                        data-code="AD"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M249.88,499.5l-0.72,3.05l-1.27,2.43l-2.29,1.19l-1.78,-0.14l-0.76,0.56l-0.11,0.68l0.39,0.62l1.74,1.23l-0.4,0.41l-3.42,1.4l-1.1,0.92l-0.39,0.91l0.45,1.05l3.11,3.01l0.36,1.44l0.28,0.29l2.29,0.63l1.08,1.02l0.97,0.25l1.73,-0.08l0.64,0.32l0.82,-0.31l0.34,-0.61l2.03,-1.92l0.07,-0.4l-0.54,-1.27l1.77,-2.1l0.26,0.02l0.83,0.65l0.7,0.93l0.25,1.34l0.88,1.46l0.49,0.44l1.34,0.31l0.14,0.22l-0.2,1.85l0.2,0.6l0.37,0.28l3.31,-0.05l1.47,-0.78l0.87,0.11l0.43,0.62l0.12,0.4l-0.53,0.17l-0.95,-0.16l-0.36,0.12l-0.62,0.81l-0.03,1.06l0.37,1.48l0.72,1.04l1.0,4.48l0.72,1.48l0.16,4.06l-0.29,0.7l1.44,6.23l0.23,3.57l-1.37,2.64l-0.52,1.55l-0.42,1.76l-0.24,2.6l-1.67,3.02l-0.66,0.7l-0.8,0.45l-0.11,0.61l1.57,1.84l-1.08,0.69l-1.5,0.28l-1.76,-0.52l-1.29,0.05l-1.47,0.99l-0.62,-1.6l-0.39,-0.26l-0.37,0.29l-0.46,1.69l-0.81,0.45l-1.8,-0.11l-3.05,0.49l-1.27,0.56l-1.42,2.38l-3.3,1.25l-1.16,1.57l-1.3,0.81l-0.92,0.21l-1.88,-1.61l-1.82,-0.01l-0.38,0.31l0.84,1.12l0.14,1.07l-0.15,0.96l-0.58,0.43l-1.05,0.18l-1.42,1.15l-1.88,0.31l-1.22,1.16l-6.41,1.85l-2.25,-0.67l-1.06,0.17l-2.65,1.02l-0.62,-0.1l1.31,-2.03l2.33,-1.41l0.24,-0.36l-0.24,-0.61l-0.92,-0.18l-4.33,0.92l-1.55,0.79l-0.61,0.09l0.24,-0.42l1.88,-1.59l1.75,-1.16l0.67,-0.9l1.97,-1.06l0.18,-0.51l-0.5,-0.22l-6.49,2.24l-1.45,-0.23l-0.31,-0.48l-0.42,-0.17l-1.0,0.22l-0.33,-0.98l1.83,-2.13l1.09,-0.94l2.7,-1.32l0.65,-1.11l-0.18,-0.54l-0.82,-0.34l-3.95,0.24l-1.47,-0.16l0.33,-0.98l1.82,-1.32l0.92,-0.2l0.84,0.12l1.84,0.86l2.24,-0.28l0.23,-0.68l-0.83,-0.81l-0.15,-1.72l-0.52,-0.6l0.55,-0.52l1.1,-0.58l1.69,-1.74l0.5,-0.22l3.45,-0.44l3.73,-0.95l3.73,-1.32l0.27,-0.37l-0.26,-0.38l-1.81,-0.7l-0.85,-0.9l-0.61,0.03l-1.42,1.9l-0.92,0.65l-2.8,0.38l-2.48,-0.77l-0.85,0.73l-1.82,0.89l-0.5,0.06l1.23,-0.9l3.05,-2.98l0.72,-0.99l0.99,-1.67l-0.27,-1.09l-0.45,-0.38l1.96,-3.0l0.63,-0.5l1.29,-0.09l2.05,-0.78l1.03,-1.11l-0.13,-0.63l-1.4,-0.65l-1.53,-0.36l-5.03,0.28l-0.68,-0.56l-0.25,-1.07l-0.47,-0.48l-1.26,-0.09l-1.06,0.35l-0.73,-0.2l0.79,-0.86l-0.22,-0.66l-1.41,-0.28l-1.47,0.22l-0.83,-0.25l-0.02,-0.32l0.46,-0.63l-0.04,-0.52l-0.61,-0.62l-0.08,-0.5l0.39,-0.23l0.89,0.1l1.63,-0.65l2.09,-0.31l0.34,-0.36l-0.26,-0.42l-1.78,-0.63l-0.53,-0.41l0.08,-1.14l1.92,-1.12l2.21,-0.53l0.3,-0.47l-0.15,-0.75l0.15,-0.81l-0.35,-0.47l-2.29,-0.26l-1.82,0.48l0.15,-1.06l0.55,-1.59l-0.0,-2.19l-0.56,-0.33l-0.54,0.24l-0.11,-1.1l-0.45,-1.05l-0.54,-0.2l-0.98,0.45l0.02,-0.66l0.36,-0.78l0.57,-0.29l2.28,0.14l1.56,-0.74l1.99,-0.18l3.18,0.22l2.2,1.97l0.48,0.04l0.59,-0.37l1.17,-1.38l3.34,0.55l2.12,0.74l0.86,-0.24l0.24,-0.45l-0.31,-1.45l-0.64,-0.93l0.73,-1.04l1.07,-0.84l0.69,-0.41l1.7,-0.54l0.87,-0.58l0.65,-1.88l0.78,-1.38l-0.41,-0.59l-4.27,0.72l-3.65,-1.47l0.4,-0.73l0.76,-0.59l1.46,-0.5l0.37,-0.76l0.71,-0.49l1.27,-1.37l0.09,-0.37l-0.44,-1.7l0.21,-1.09l0.94,-0.97l0.58,-1.86l1.75,-0.32l1.68,-0.79l2.62,-0.12l0.61,0.29l0.57,-0.4l-0.12,-1.11l0.77,-0.12l0.23,0.14l0.28,1.06l0.51,0.59l0.15,0.94l-0.32,0.73l-0.61,0.64l-0.01,0.54l0.4,0.47l-0.75,1.02l0.02,0.5l0.49,0.09l1.08,-0.59l1.44,-1.25l0.14,-0.33l-0.08,-1.07l-0.63,-2.42l0.15,-1.06l0.63,-0.62l2.0,-0.38l0.27,-0.6l-0.48,-0.98l0.67,0.24l1.22,1.12l2.21,1.39l-0.9,0.99l-1.53,0.95l-0.71,1.13l-2.08,1.47l-0.45,0.7ZM215.27,524.99l-1.08,-1.32l-1.84,-0.28l0.23,-0.18l0.5,0.2l1.82,0.03l0.29,0.2l0.08,1.34Z"
                        data-code="IE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M408.54,806.45l-3.92,-1.92l-1.35,-0.24l-0.05,-1.1l2.42,-0.19l2.04,0.68l1.11,1.86l-0.24,0.9ZM392.9,807.55l0.23,0.45l1.3,0.59l1.57,-0.48l0.58,0.13l0.48,0.19l0.12,0.76l-2.23,3.76l-0.63,1.53l-2.0,1.3l-2.16,-1.09l-1.33,-0.3l-0.24,-0.26l-0.3,-1.64l-0.9,-0.87l-1.21,-0.21l-1.53,1.1l-0.3,-0.51l-0.96,-0.33l-0.18,-0.31l0.01,-0.41l5.44,-4.13l1.57,-0.91l3.11,-0.99l-0.12,0.68l0.38,0.44l-0.49,0.68l-0.18,0.82ZM246.2,735.75l1.22,0.61l1.34,-0.17l1.24,0.73l2.0,1.96l2.73,0.76l2.34,-0.58l3.76,-0.12l1.99,0.25l3.37,-0.46l1.91,0.16l3.17,-0.91l2.44,1.14l4.71,0.54l2.86,0.96l7.98,1.62l2.94,0.01l4.03,-0.9l1.65,-0.65l1.67,0.36l2.21,-0.75l0.9,0.13l1.48,1.11l5.05,1.5l0.39,-0.09l1.26,-1.2l0.79,-0.22l3.5,0.75l3.76,1.6l1.99,0.11l2.79,-0.43l2.23,-1.03l0.6,1.22l0.69,0.47l1.22,0.49l2.11,0.28l0.59,0.36l-0.15,1.31l-0.77,1.44l0.31,0.76l0.54,0.38l1.12,0.03l0.58,-0.81l0.29,0.38l4.79,2.05l2.22,0.17l0.28,0.48l2.09,2.05l1.77,0.1l2.27,-0.49l1.21,0.7l1.6,1.44l0.66,0.35l3.38,-0.5l0.83,0.47l1.65,-0.13l1.85,0.25l1.62,-0.06l0.52,-0.57l0.13,-1.79l0.28,-0.5l4.03,1.18l2.69,1.21l1.2,0.08l0.58,0.27l0.92,1.51l-0.15,0.72l0.17,1.67l0.34,0.67l0.29,0.18l1.34,-0.1l2.18,-1.08l2.72,1.27l1.04,1.36l0.91,0.03l2.09,-1.15l4.83,1.34l1.22,0.11l0.43,-0.36l0.18,-0.75l0.24,-0.16l1.53,-0.39l1.03,-0.49l0.91,-0.18l3.01,0.65l0.29,0.89l0.68,0.56l0.13,0.53l-1.47,0.43l-0.36,0.35l-0.22,1.72l0.4,0.76l0.66,0.48l0.12,0.35l0.12,2.3l-3.12,3.04l-9.38,5.44l-2.31,2.68l-0.75,0.53l-6.92,1.64l-4.92,1.77l-2.33,0.63l-4.48,4.38l0.15,0.68l1.0,0.31l1.01,1.14l-0.21,0.31l-1.77,0.94l-0.66,0.25l-0.57,-0.11l-0.64,0.31l-3.14,5.25l-2.76,3.74l-1.59,1.68l-1.6,2.44l-3.43,6.31l-0.06,2.1l1.72,6.31l1.03,1.7l1.35,1.36l2.56,1.19l0.44,0.79l-0.68,0.84l-2.51,1.89l-4.44,2.59l-1.99,2.12l-0.47,2.0l-1.34,1.05l-0.49,2.71l-0.93,2.4l-0.86,1.49l-0.11,1.0l0.11,0.33l1.08,1.08l-0.31,0.27l-2.07,0.37l-5.27,0.17l-4.47,3.05l-2.27,2.81l-1.9,4.82l-2.24,2.75l-0.73,0.37l-1.61,-1.19l-2.0,-0.19l-2.06,0.42l-1.15,1.04l-1.38,0.48l-1.51,-0.46l-3.4,-0.26l-1.61,0.07l-2.22,0.77l-1.95,-0.52l-3.38,-0.28l-7.47,0.66l-1.12,0.44l-0.89,1.17l-2.19,1.95l-3.54,0.1l-3.34,1.42l-0.86,0.92l-1.35,2.32l-0.34,1.3l-0.47,-0.2l-0.49,0.14l-0.28,0.31l-0.22,1.1l-1.82,0.66l-2.32,-0.98l-2.03,-1.54l-1.11,-0.17l-1.64,-2.27l-0.73,-1.5l-0.5,-1.57l0.09,-0.73l-0.15,-0.54l-1.61,-0.86l-0.3,-1.21l1.03,-1.83l0.84,-0.77l0.51,-0.22l0.23,-0.46l-0.41,-0.31l-1.41,0.09l-0.96,1.01l-1.1,-1.71l-5.09,-3.89l0.24,-0.66l-0.04,-0.69l-0.71,-0.21l-0.83,1.02l-0.44,0.2l-2.71,-0.17l-2.75,0.44l-1.23,-6.43l0.76,-2.29l0.88,-1.0l1.16,-2.03l1.34,-1.59l1.45,-0.39l0.9,-0.47l0.9,-2.52l-0.45,-0.58l-1.76,0.16l-2.99,-4.45l0.48,-1.73l0.33,-2.48l0.72,-0.84l1.32,-1.03l1.08,-1.4l0.62,-1.57l0.04,-1.51l-0.83,-1.04l-1.59,-0.44l-1.7,-3.34l-0.39,-2.17l-1.56,-1.43l-0.96,-1.71l0.58,-0.18l4.66,-0.05l1.22,-0.66l0.9,-1.57l0.9,-2.51l0.22,-1.58l-0.39,-0.96l-1.42,-1.43l-0.03,-0.22l0.18,-0.52l2.07,-1.61l0.66,-0.75l0.09,-0.37l-0.55,-1.64l0.22,-0.74l0.23,-3.11l-0.24,-2.21l-0.32,-1.92l-0.9,-2.21l0.44,-0.62l1.55,-0.93l1.13,-1.88l1.61,-1.54l2.17,-1.27l1.61,-1.49l1.16,-1.78l-0.43,-1.32l-1.0,-0.9l-1.25,-0.49l-1.89,-0.11l-0.12,-3.44l-0.35,-0.88l-0.9,-0.64l-1.05,0.13l-1.76,-0.53l-0.62,0.34l-2.05,-0.09l-1.8,-0.53l-0.82,0.6l-0.23,1.1l-0.62,0.44l-1.71,0.52l-1.36,-0.04l-2.56,-0.95l-2.6,0.31l-0.65,-0.16l-2.25,1.21l-0.6,0.03l-0.64,-1.17l1.24,-2.3l-1.13,-2.11l-0.35,-0.28l-0.72,-0.07l-4.59,1.58l-1.38,0.89l-1.2,1.16l-0.69,0.18l-0.19,-2.68l2.55,-2.95l-0.12,-0.64l-0.7,-0.27l-0.73,0.02l0.02,-0.28l0.52,-0.45l0.53,-0.98l-0.13,-0.52l-0.94,-0.87l0.16,-2.18l-0.16,-0.91l-0.55,-0.29l-2.46,0.91l-0.02,-0.83l1.25,-1.82l0.2,-0.73l-0.32,-0.48l-1.45,-0.27l-1.05,-0.86l-1.35,-1.9l-0.01,-0.92l0.72,-2.37l2.0,-1.16l1.91,-1.66l2.78,0.31l1.74,-0.38l1.63,-0.93l0.94,-0.23l1.45,-0.8l0.21,-0.37l-0.05,-1.07l-0.43,-0.79l0.26,-0.45l3.27,-2.05l2.1,-0.27l1.92,-0.99ZM370.09,822.55l-0.59,1.0l-1.82,-0.47l0.28,-0.77l0.38,-0.09l0.3,-0.37l0.03,-0.74l0.47,-0.65l2.58,-0.62l0.4,0.36l0.09,0.51l-1.55,1.64l-0.58,0.21ZM370.19,826.26l0.43,0.52l0.1,0.05l-0.66,0.0l0.12,-0.57ZM164.44,986.52l-0.91,0.93l-0.45,-0.16l0.4,-1.81l0.38,-0.52l1.75,-0.91l1.51,-0.38l0.82,-1.29l0.11,0.12l-0.32,0.61l-0.3,2.07l-0.85,0.59l-2.14,0.74ZM155.36,999.51l0.78,-0.22l1.68,-1.33l1.2,-3.09l1.67,-3.23l0.34,-1.34l0.46,-0.37l0.9,0.0l0.27,0.48l-0.01,1.5l-0.47,2.65l-0.81,2.19l-3.47,1.23l-1.83,1.68l-0.72,-0.16ZM141.28,999.14l0.12,1.42l-4.09,0.0l0.43,-0.45l0.41,-1.1l2.82,0.24l0.31,-0.11ZM128.8,994.8l-1.25,3.65l-0.98,1.28l-0.52,0.38l-1.25,0.3l-1.66,-1.95l-1.27,-2.62l0.38,-0.25l1.2,0.08l2.71,-0.49l0.66,-0.26l2.6,-2.17l2.12,-0.22l-2.74,2.27ZM117.33,1000.26l-0.31,0.07l-0.43,-0.25l-0.53,-0.94l0.59,-0.89l1.3,0.6l0.26,0.51l-0.89,0.89ZM108.62,992.86l-0.21,-0.78l-1.49,-2.77l0.71,-0.97l1.38,-0.03l0.55,0.71l0.18,0.72l-0.31,0.65l0.09,1.05l-0.14,0.57l-0.76,0.86Z"
                        data-code="ES"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M601.12,757.98l1.21,-1.1l0.26,-0.7l-0.08,-0.77l-1.01,-1.83l-0.28,-3.35l0.35,-0.49l1.74,-0.27l0.34,-0.4l-0.02,-1.76l0.66,-1.79l2.21,-1.98l0.71,0.07l0.52,0.87l0.42,0.19l0.65,-0.13l0.32,-0.35l0.09,-1.44l-1.24,-2.45l0.15,-0.38l1.18,0.39l1.27,-0.29l0.39,1.35l2.73,2.11l1.83,2.4l0.91,0.78l0.86,0.24l1.56,1.02l2.14,0.5l5.16,3.34l0.06,0.69l-1.5,0.46l-0.45,0.77l-1.61,-0.07l-0.34,0.18l-0.34,0.52l-0.01,0.42l0.75,1.68l-0.21,1.1l-1.58,0.8l-1.77,0.5l-0.39,-0.55l0.04,-1.42l-0.34,-0.84l-0.76,-0.28l-0.81,0.49l-1.49,2.52l-1.98,2.78l-1.63,3.13l0.06,0.43l0.63,0.74l0.35,0.94l-0.21,2.87l-1.43,-0.98l-0.89,-2.04l-3.09,-3.46l-3.53,-2.37l0.23,-0.74l-0.35,-0.57l-0.74,-0.03l-0.78,0.24l-0.92,-1.42l-0.01,-0.28Z"
                        data-code="ME"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M712.32,647.0l2.52,-1.71l0.66,0.26l4.48,0.01l1.54,-1.19l0.68,0.26l0.38,-0.05l1.69,-1.1l2.16,0.48l1.31,0.62l0.9,0.99l1.06,0.71l1.04,0.28l0.39,0.35l0.09,0.65l0.25,0.31l1.11,0.42l1.67,-0.01l0.43,0.29l-0.2,0.78l0.22,0.63l0.55,0.16l0.43,-0.24l0.16,0.1l0.56,1.13l0.64,-0.0l0.78,-1.03l2.85,0.55l1.16,2.34l0.83,0.99l0.79,0.46l0.36,0.01l1.48,-0.77l0.97,1.55l0.21,2.88l-1.17,3.96l0.18,1.13l0.34,0.68l2.43,1.71l0.73,1.0l0.98,0.71l0.8,0.11l0.21,0.21l-0.0,1.41l-0.4,1.1l0.03,0.9l0.67,0.99l0.18,1.74l0.45,0.6l1.66,1.11l2.08,1.04l0.46,0.78l0.3,1.05l-0.24,3.57l0.15,0.34l2.5,2.04l-0.39,0.44l-2.87,0.44l-0.99,-1.46l-0.81,-0.37l-0.43,0.11l-1.01,0.83l-0.6,-0.13l-1.41,-0.93l-0.63,0.02l-0.4,0.28l-0.45,-0.1l-0.39,-0.35l-0.63,0.13l-0.61,1.3l-0.09,-2.08l-0.51,-0.58l-0.54,-0.06l-1.51,0.62l-1.29,0.78l-0.61,1.03l0.04,1.22l0.2,1.58l0.79,2.03l-0.42,0.89l-0.3,1.41l-1.21,1.27l-1.45,0.78l-0.21,0.32l-0.12,1.55l-0.74,1.0l-1.47,1.18l-0.96,1.36l0.22,2.0l-0.29,0.91l-2.1,0.16l-1.19,0.69l-1.43,-2.23l0.89,-0.65l0.13,-0.31l-0.05,-1.34l-0.55,-2.19l-0.21,-2.8l0.26,-3.17l1.69,-6.31l-0.28,-1.05l0.2,-2.72l-1.21,-2.99l-1.05,-3.67l-3.04,-2.86l-1.16,-2.25l-2.07,-2.24l-2.23,-4.24l-1.53,-1.75l-0.76,-1.5l-0.65,-2.51l-1.07,-2.38l-2.4,-4.08l-1.17,-1.21l-1.54,-0.91l-1.87,-0.17Z"
                        data-code="MD"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M844.04,897.4l1.11,-1.3l-0.02,-0.52l-0.85,-0.85l-1.19,-0.34l-0.46,0.18l-0.33,0.57l-3.36,0.05l-0.95,-3.36l-0.15,-1.54l0.03,-1.78l0.71,-2.66l-0.54,-3.44l-1.84,-2.54l0.97,-4.39l0.55,-0.86l0.68,0.07l2.09,1.27l0.61,0.02l0.33,-0.26l0.62,-1.65l0.51,-0.47l1.27,-0.49l0.25,-0.32l0.36,-2.67l1.09,-0.64l2.15,-0.23l0.33,-0.34l0.03,-0.71l-1.37,-3.16l0.78,-3.96l0.6,-1.4l1.38,0.14l2.06,0.53l0.6,0.92l1.35,0.92l4.99,0.16l4.0,-1.72l2.55,-0.87l3.79,-1.77l1.41,0.13l1.75,0.49l3.25,2.44l1.18,0.44l8.14,0.22l4.57,-0.98l4.51,-1.49l6.03,-3.16l0.0,45.72l-23.23,14.01l-26.4,16.95l-4.43,-0.68l-1.33,-0.38l-2.04,-1.71l-2.15,-0.64l-1.38,-2.09l-0.84,-0.76l-1.24,-0.34l1.58,-2.98l-0.0,-0.38l-0.4,-0.73l-0.16,-1.21l0.5,-0.98l-0.93,-2.32l0.0,-0.67l0.39,-1.49l0.52,-0.46l0.25,-0.66l1.15,-0.88l0.32,-0.54l-0.11,-0.55l-0.81,-0.52l-0.26,-0.47l0.28,-0.83l1.49,-1.43l1.28,-0.11l1.97,0.2l0.55,-0.3l0.1,-0.6l-1.12,-0.84l-0.02,-0.19l0.9,-1.18l1.43,-0.79l1.05,-1.27l0.73,-1.51l-1.07,-3.76l-0.88,-0.8l-1.26,-0.52Z"
                        data-code="SY"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M482.99,852.14l-0.01,0.38l0.63,1.3l0.62,0.13l0.9,-0.79l0.1,-0.46l-0.22,-0.69l2.33,0.06l1.18,0.62l-0.09,2.67l1.92,2.93l-0.48,1.22l0.19,0.5l1.62,0.84l0.41,-0.03l1.44,-1.01l0.78,-1.49l2.48,-0.81l2.57,-2.19l0.89,-0.14l0.25,1.41l0.56,1.33l-0.77,0.49l-1.21,1.67l-2.27,4.17l-2.02,1.18l-1.67,1.69l-0.59,1.27l-0.18,1.57l0.43,2.5l1.22,2.53l1.33,1.47l1.39,0.55l2.78,2.15l-0.03,1.28l0.41,1.6l0.16,1.94l0.96,1.55l-2.08,3.21l-1.23,2.49l-2.34,3.35l-2.07,2.16l-4.51,3.25l-1.16,1.12l-0.83,1.3l-0.35,1.31l0.15,1.5l1.49,3.37l2.07,2.11l2.35,1.19l3.02,-0.37l-0.07,0.9l0.25,1.55l0.42,0.34l2.46,-0.33l0.86,-1.34l1.22,0.73l0.85,3.0l1.42,1.07l-0.59,0.47l0.06,0.64l1.93,0.69l0.92,-0.21l1.03,0.51l-0.6,4.33l-0.07,4.15l1.09,2.01l0.02,0.64l-0.33,0.75l-9.1,5.28l-0.81,0.99l-2.17,1.45l-0.98,2.12l-0.8,0.93l-2.17,0.47l-0.67,0.48l-1.59,2.27l-0.64,1.56l1.74,6.84l0.17,2.48l-0.49,1.18l-4.27,6.12l-4.56,2.2l-6.38,-28.84l-0.44,-0.64l-4.55,-3.28l-4.61,-3.64l-0.39,-2.37l-1.27,-3.72l-1.38,-2.17l-0.66,-0.69l-2.67,-1.34l-1.47,-0.94l-0.33,-0.44l-0.3,-1.49l-1.11,-3.03l-1.26,-2.75l-0.44,-1.79l-0.06,-2.28l0.23,-1.57l0.46,-0.61l2.59,-2.09l1.28,-2.6l2.69,-1.61l1.11,-0.88l1.02,-1.44l0.79,-1.64l0.42,-4.01l0.46,-1.67l1.09,-1.94l-1.0,-3.56l0.17,-2.91l-0.15,-1.28l-0.96,-2.48l-0.02,-1.05l1.39,-8.47l-0.2,-0.85l-0.48,-0.76l-1.22,-0.73l2.15,-1.87l0.96,-2.05l2.03,-1.19l0.19,-0.36l-0.23,-1.46l3.11,-0.98l3.17,-2.67l1.06,-0.62l7.27,-2.44l1.5,0.38l-0.58,1.21ZM502.47,893.73l0.76,-0.69l-0.01,0.26l-0.75,0.42ZM499.08,910.1l-1.11,0.53l-1.49,-0.62l0.2,-1.86l1.95,-0.06l1.28,1.19l-0.83,0.83Z"
                        data-code="TN"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M183.87,1000.56l4.34,-1.23l5.88,-2.78l1.71,-1.14l1.85,-2.29l2.91,-2.85l5.49,-3.47l2.64,-2.04l3.88,-4.9l2.59,-4.08l2.15,-2.64l1.48,-2.33l1.06,-2.42l0.62,-3.92l-0.46,-1.78l-1.63,-2.45l-1.08,-0.69l-0.23,-0.89l0.57,-2.05l-0.01,-3.5l0.33,-5.56l1.77,-4.45l4.47,-6.07l0.84,-2.55l0.55,-5.21l5.45,-5.5l3.27,-4.33l1.08,-1.01l2.81,-1.94l10.02,-4.33l5.67,-3.1l3.44,-2.38l2.0,-2.74l5.46,-10.58l5.39,-15.08l0.39,-1.54l3.92,-0.69l1.44,-0.59l1.54,-1.03l0.77,0.22l-0.43,0.58l0.05,2.05l1.2,2.24l2.05,2.5l3.74,3.16l2.92,1.27l4.05,0.75l4.85,-1.35l2.58,-0.02l1.25,-0.53l1.38,0.8l2.66,0.27l2.67,-0.46l2.09,-1.36l0.81,-0.96l0.14,0.91l1.5,3.05l0.38,0.21l1.4,-0.12l1.35,0.37l2.86,-0.18l2.48,0.29l0.39,1.12l0.8,0.98l4.49,3.57l-0.7,2.37l0.45,0.83l1.07,1.24l-0.75,1.82l1.13,3.1l0.19,2.94l-0.29,3.48l0.18,1.15l0.93,2.34l-0.62,4.11l0.73,2.19l1.01,1.79l0.54,3.1l0.86,1.62l1.4,1.41l3.22,2.4l0.45,1.0l-2.27,2.1l-0.29,1.28l0.48,1.65l0.0,0.6l-0.35,0.15l-15.86,-0.65l-5.67,0.89l-0.48,0.16l-0.74,0.62l-0.77,2.66l-0.29,0.47l-5.56,2.01l-2.13,0.27l-1.38,-0.2l-0.92,0.17l-0.92,0.48l-0.45,0.87l-0.07,0.98l0.21,1.05l0.52,1.13l0.08,1.03l-0.34,0.87l-0.19,2.01l0.29,0.49l1.99,1.0l0.49,0.55l-0.02,0.72l-0.41,0.44l-0.36,0.23l-3.94,0.55l-4.54,3.36l-6.13,2.29l-2.62,1.39l-3.0,4.81l-1.49,1.63l-2.02,1.53l-4.34,1.35l-3.07,0.58l-2.84,0.32l-3.76,-0.09l-0.47,0.42l-0.26,2.28l-0.86,1.05l-0.34,0.11l-6.16,-0.87l-0.74,0.09l-1.45,0.78l-3.3,2.77l-1.8,0.25l-1.01,0.48l-4.25,3.37l-3.61,2.36l-3.96,3.28l-1.5,0.9l-0.3,0.62l-0.07,1.06l-0.0,9.19l-48.57,0.0Z"
                        data-code="MA"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M607.43,694.23l1.43,-0.66l0.67,-0.9l0.79,0.49l0.84,0.05l1.11,-0.39l2.07,-1.28l1.45,-1.72l0.89,-0.22l3.1,0.44l1.27,-0.3l2.95,0.37l0.56,0.26l1.11,1.34l0.9,1.6l2.92,1.98l0.94,1.69l0.82,0.93l0.36,0.13l0.44,-0.13l-0.13,2.35l0.28,1.51l-0.19,0.47l0.38,0.85l1.07,0.81l1.0,1.23l1.11,0.85l1.09,0.58l0.67,0.07l1.1,0.96l2.7,0.91l0.61,0.65l-0.69,1.03l-0.21,0.78l-0.6,0.19l-0.36,0.59l0.15,0.54l0.36,0.4l1.93,0.97l-2.13,0.47l-0.24,0.38l0.03,0.67l0.28,0.36l2.16,0.68l0.88,0.58l0.67,0.94l1.51,0.59l2.22,0.27l1.43,0.79l0.84,1.39l0.44,0.18l1.66,-0.47l1.96,-2.12l1.73,-0.5l1.78,0.96l0.94,0.76l-0.01,0.31l-1.17,-0.08l-0.9,0.42l-0.93,1.29l-0.07,1.23l0.49,1.09l0.77,0.86l0.94,0.47l0.34,0.4l0.09,0.67l-0.85,0.78l-0.34,0.97l-0.07,1.18l-2.38,1.36l-0.77,2.8l0.05,1.62l0.35,1.45l1.09,2.01l0.33,1.52l0.8,1.33l2.94,1.95l1.3,1.93l1.4,1.06l-0.38,1.29l-1.11,1.4l-0.82,0.66l-1.16,1.72l-1.91,0.11l-0.58,0.2l-0.91,0.7l-0.37,0.94l0.33,0.99l-0.38,2.28l0.49,1.58l0.79,1.05l-0.09,0.56l-1.26,1.87l-0.77,0.2l-0.82,-0.62l-0.8,-0.13l-2.37,0.93l-0.99,-0.27l-1.15,-0.01l-1.29,0.39l-0.97,0.62l-1.51,0.43l-0.46,-0.06l-0.44,-1.11l1.2,-1.01l0.12,-0.61l1.51,-3.19l0.32,-1.47l-0.6,-0.58l-0.96,-0.04l-3.32,-1.16l0.13,-1.16l-0.16,-0.37l-2.14,-1.45l-0.23,-0.79l-2.28,-2.55l-1.31,-0.52l-1.52,-0.97l-0.29,-1.17l-0.31,-0.43l-0.36,-0.16l-0.7,0.12l-2.03,1.27l-0.19,0.71l0.6,1.35l-0.08,0.36l-0.27,0.55l-2.07,1.61l-0.22,0.85l0.24,0.73l-0.99,0.33l-0.24,-0.95l-0.97,-0.79l-1.42,-0.65l-3.01,-2.08l-2.27,-0.57l-1.43,-0.97l-0.81,-0.21l-0.75,-0.63l-1.89,-2.46l-2.6,-1.97l-0.27,-1.11l0.66,-0.77l1.07,-0.13l0.62,0.47l0.7,0.1l0.4,-0.18l0.39,-0.62l0.26,-1.14l-0.15,-1.32l-3.17,-4.62l0.37,-0.2l1.9,0.27l1.45,-0.17l0.69,-0.56l0.12,-0.9l-0.6,-0.83l-2.83,-2.89l-1.52,-1.09l-1.04,-0.41l-0.22,-0.36l0.08,-2.69l0.23,-0.73l1.92,-3.26l0.59,-1.66l0.3,-1.67l-0.28,-0.66l-1.62,-0.68l-1.86,0.37l0.29,-1.19l-0.45,-2.79l0.57,-0.18l0.29,-0.6l0.62,0.3l2.51,-0.1l0.49,-0.51l0.04,-0.66l-1.02,-1.28l-3.31,-1.43l-1.03,-1.04l0.03,-1.02l0.26,-0.52l0.32,-0.19l0.15,-0.53l-0.32,-0.42l-1.26,-0.54l-0.32,-0.55l0.34,-1.15l-0.72,-2.16l-0.61,-1.11l0.62,-0.63l0.12,-0.95ZM608.92,713.89l-0.15,0.05l-0.03,-0.11l0.03,0.0l0.15,0.06Z"
                        data-code="RS"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M623.27,757.81l0.24,-1.54l-0.64,-1.85l1.62,0.1l0.42,-0.26l0.24,-0.63l3.48,-1.21l0.27,-0.77l-0.31,-0.68l0.11,-0.27l1.93,-1.44l0.48,-0.91l0.09,-0.8l-0.53,-1.37l1.92,-1.04l0.57,1.55l1.67,1.07l1.21,0.46l2.1,2.35l0.35,0.96l2.04,1.36l-0.14,1.25l0.27,0.42l3.69,1.29l0.95,0.07l-1.89,4.72l-1.1,0.79l-0.15,0.67l0.39,1.06l-2.01,0.48l-0.91,0.75l-0.55,1.34l-1.37,-1.24l-1.43,-0.05l-3.97,1.87l-0.58,1.18l-0.11,2.13l-0.4,0.59l-1.15,-0.16l0.13,-0.59l-0.09,-1.82l-0.71,-2.9l-0.54,-1.04l-1.97,-1.7l-1.41,-0.55l-0.7,-1.49l-1.12,-1.82l-0.39,-0.34Z"
                        data-code="_2"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M629.76,770.81l1.85,0.12l0.77,-1.05l0.12,-2.17l0.29,-0.75l3.61,-1.73l0.87,-0.05l1.45,1.28l0.68,0.07l0.37,-0.29l0.55,-1.44l0.63,-0.48l2.17,-0.48l0.87,0.08l1.64,-0.47l1.06,-0.65l1.13,-0.32l2.05,0.3l2.47,-0.94l1.13,0.71l2.02,2.64l1.19,1.15l1.42,0.89l1.52,0.61l0.43,0.46l1.44,3.93l0.78,0.59l-0.71,2.3l-0.29,4.43l-1.85,0.25l-0.52,0.58l-0.37,2.2l-1.41,0.59l-1.4,0.37l-4.12,-0.72l-0.77,0.33l-2.03,0.2l-1.01,0.55l-1.97,2.74l-2.55,1.33l-1.37,-0.54l-0.87,-0.09l-1.25,0.72l-4.43,0.29l-0.62,-0.92l-1.03,-0.28l-1.56,0.2l-0.21,-0.21l-0.69,-2.3l-1.23,-1.28l-1.02,-2.49l0.04,-2.16l-0.55,-2.19l0.89,-1.03l-0.15,-2.37l0.58,-2.53Z"
                        data-code="MK"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M627.93,372.06l0.7,-0.37l0.79,0.11l0.34,0.7l-0.59,0.08l-0.66,-0.55l-0.58,0.04ZM621.67,364.12l1.24,-0.08l0.95,0.92l0.19,0.49l0.83,0.46l0.12,0.28l-0.69,1.47l-0.79,-0.2l-0.71,0.2l-0.56,0.43l-0.28,1.0l0.01,1.31l-2.67,0.27l-0.48,-0.31l-0.93,-3.41l0.14,-0.68l0.51,-0.28l0.07,1.53l0.49,0.37l0.85,-0.2l0.3,-0.31l0.33,-2.27l-0.27,-0.67l-0.82,-0.81l0.33,-0.68l0.43,-0.21l0.58,1.0l0.85,0.36ZM616.95,368.3l-0.64,0.24l-0.32,0.56l-0.17,-0.79l0.34,-1.25l0.44,-0.03l0.36,1.27Z"
                        data-code="_0"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M655.87,631.05l-1.9,3.64l-1.26,3.82l-2.03,2.36l-0.31,3.48l-4.47,1.08l-0.41,-0.12l-0.87,-0.99l-1.18,-1.95l-1.82,-1.3l-1.08,-0.0l-2.47,0.86l-1.64,0.09l-2.75,-0.81l-3.03,-0.08l-2.18,0.48l-0.29,0.27l-2.04,4.56l-5.08,2.97l-0.52,0.23l-1.01,-0.4l-1.4,-0.92l-1.39,-0.49l-1.03,0.33l-0.9,1.03l-0.41,0.98l-2.51,0.7l-4.73,0.45l-1.83,1.08l-0.76,1.56l-0.02,0.95l0.35,0.81l-0.52,0.95l-7.62,0.47l-5.1,-0.13l-1.6,-0.75l-2.05,-1.53l-2.2,-2.08l-0.77,-0.38l-1.72,-0.08l-0.56,-0.46l-0.25,-0.85l-1.28,-2.31l-1.42,-3.76l-0.03,-0.96l1.04,-2.13l0.59,-2.63l1.02,-2.06l0.91,-1.15l0.51,-0.29l3.99,0.65l2.07,-0.33l1.88,-1.0l1.85,-1.74l0.31,-0.58l1.68,-0.67l0.66,-0.72l0.41,-2.54l0.59,-1.41l2.67,-1.59l0.77,-1.2l2.28,-1.98l2.01,-0.06l1.06,-0.34l1.13,0.21l0.34,1.84l0.41,0.34l2.46,-0.08l0.33,-0.2l1.3,-2.21l0.67,-0.28l1.67,-1.31l2.37,3.81l1.76,0.6l0.16,1.81l-0.41,1.35l0.24,0.46l0.62,0.25l1.16,-0.23l0.56,-0.3l1.74,0.75l0.53,-0.23l0.66,-1.8l0.66,-0.82l2.54,-1.36l0.84,-0.14l1.48,0.22l1.01,-0.2l1.35,0.4l1.04,0.88l1.07,0.31l1.07,-0.05l1.05,-0.65l0.94,-1.45l3.44,-0.23l3.81,0.34l0.99,0.62l2.34,0.78l0.92,0.81l0.87,1.98l2.5,1.18l4.23,1.61Z"
                        data-code="SK"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M547.71,875.26l-0.13,0.16l-0.99,-0.02l-0.88,-0.65l-0.01,-1.05l0.71,0.19l1.3,1.37ZM543.79,872.02l0.28,-0.06l0.27,0.11l-0.31,0.1l-0.24,-0.15Z"
                        data-code="MT"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M558.46,699.25l-0.66,0.46l-0.26,0.91l0.1,0.85l0.58,1.14l-0.9,0.34l-1.63,-0.17l-2.29,-0.95l-0.74,0.14l-0.71,0.45l-0.48,-0.14l-1.82,-1.7l-0.5,-0.67l-0.21,-0.73l-0.56,-0.38l-0.98,0.46l-1.37,2.56l-0.58,0.35l-3.7,0.07l-1.47,-0.57l-0.3,0.12l-0.6,1.1l-0.55,0.3l-3.27,-0.86l-0.17,-0.26l1.46,-1.12l0.72,0.08l1.14,-0.32l0.41,-0.43l0.07,-0.44l-0.66,-1.38l-1.49,-1.57l-0.84,-0.64l-1.03,-0.4l0.47,-2.78l-0.18,-0.35l-0.39,-0.21l-1.07,0.1l-0.12,-0.3l0.06,-0.4l1.74,-1.82l0.25,-0.48l0.01,-0.6l-0.28,-0.35l-1.94,-0.78l-0.57,-0.14l-0.43,0.12l-0.21,-0.51l0.23,-0.86l2.1,-1.8l1.52,-0.91l0.4,-1.02l2.72,0.36l2.33,0.72l6.41,1.16l0.69,-0.73l2.11,-1.22l1.22,-1.66l0.57,-0.4l1.39,-0.38l2.85,-0.33l3.14,0.24l1.44,-0.49l1.21,-0.86l1.64,-0.23l2.52,0.65l0.46,-0.21l0.29,-0.52l0.02,-1.95l0.65,-0.69l0.6,-0.29l2.27,0.1l0.55,2.37l0.65,0.82l0.05,1.0l1.27,1.7l-1.71,-0.3l-0.33,0.11l-0.91,0.6l-0.29,0.47l0.08,1.98l-1.46,-0.16l-0.73,0.24l-1.03,1.37l-0.8,0.48l-4.2,1.66l-0.65,1.45l0.14,0.81l0.87,1.1l0.11,1.12l-0.29,2.2l-0.25,0.37l-2.25,0.7l-2.4,1.26l-0.26,0.57l0.11,0.35l0.95,0.97Z"
                        data-code="SI"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M519.7,732.37l-0.29,0.05l-0.15,-0.29l0.37,-0.56l0.3,-0.05l-0.22,0.85Z"
                        data-code="SM"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M828.43,1000.56l-0.39,-0.48l-1.55,-0.85l-3.37,-0.33l-1.4,-0.33l-1.08,0.64l-0.04,-0.45l0.88,-1.73l1.31,-3.75l0.28,-3.37l1.97,-9.42l14.06,2.47l0.87,-0.16l5.7,-4.67l3.14,-5.29l0.56,-0.43l9.78,-2.09l0.4,-0.41l2.09,-4.89l4.38,-2.58l0.11,-0.61l-6.8,-8.01l-6.64,-7.21l26.57,-7.85l0.63,-0.29l1.87,-1.74l16.35,2.92l1.5,0.75l0.0,60.17l-71.17,0.0Z"
                        data-code="SA"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M658.32,650.19l-1.08,-0.51l-0.92,-1.49l-1.31,-0.77l-0.96,-0.27l-0.96,-1.94l-0.2,-0.88l-0.27,-0.29l-0.53,-0.14l-0.82,0.11l0.12,-2.73l2.04,-2.41l1.28,-3.88l1.8,-3.21l0.18,-0.7l3.24,1.11l0.78,-0.47l0.27,-0.66l-0.17,-0.8l-1.81,-1.76l0.38,-2.45l-1.11,-4.95l0.69,-1.27l4.45,-6.12l5.02,-5.77l1.33,-1.2l2.72,-3.04l3.39,-0.67l0.29,-0.23l1.03,-2.0l0.59,-0.71l0.05,-1.97l-0.66,-2.26l-0.84,-1.27l0.93,-0.4l0.6,-0.55l0.12,-0.38l-0.13,-0.6l-1.56,-1.62l-0.6,-1.04l-1.05,-2.94l-2.64,-3.89l-0.07,-0.74l0.28,-1.06l-0.31,-1.26l-0.63,-1.31l-0.0,-1.85l0.97,-0.46l1.03,0.08l0.88,0.26l1.12,0.81l0.37,0.05l2.55,-1.85l2.08,-2.41l1.03,-1.93l1.64,-0.31l5.05,-0.36l2.72,-0.69l2.64,-0.16l8.85,0.53l4.61,1.28l1.66,0.23l0.91,0.69l4.31,0.93l2.47,0.37l1.68,-0.14l0.69,0.14l1.65,2.87l0.42,0.44l0.94,0.19l1.49,-0.26l1.89,0.09l0.88,0.47l-0.15,1.53l0.14,0.35l0.64,0.35l0.83,-0.28l1.33,-2.16l2.03,0.66l0.94,-0.12l1.33,-0.91l1.4,0.54l1.8,0.4l1.45,0.03l0.68,0.32l0.76,1.92l1.27,0.56l0.44,-0.21l0.8,-1.6l0.66,-0.56l1.64,-0.65l1.18,-1.17l0.32,-0.03l0.7,0.8l1.69,3.64l0.72,0.76l0.41,0.1l2.78,-1.12l4.78,-0.51l2.08,-0.52l1.14,0.08l1.79,1.52l0.47,1.73l1.58,1.11l1.46,0.27l0.44,-0.25l0.41,-1.08l0.7,-0.75l0.1,-0.37l-0.43,-2.58l-0.89,-2.56l0.65,-1.9l1.11,-2.7l1.15,-1.72l2.99,-3.25l1.14,-0.58l1.68,0.53l0.38,-0.04l1.64,-1.15l2.95,-0.06l2.72,0.18l2.7,1.18l2.07,-0.09l2.38,-1.48l1.21,-3.63l0.71,-0.57l0.83,-0.02l4.14,1.24l1.43,-0.13l3.31,-1.83l1.74,-0.27l2.24,0.43l2.19,0.03l1.58,-0.25l0.96,0.55l1.33,1.35l1.22,2.04l1.39,3.99l3.77,4.28l0.05,0.6l-0.17,0.3l-3.31,0.76l-0.33,0.35l-0.03,0.98l1.12,1.93l0.07,2.78l0.33,1.34l0.62,0.61l0.03,0.27l-0.85,1.2l0.1,0.45l0.53,0.35l3.41,0.14l3.05,1.41l0.8,0.05l1.44,-0.42l2.37,-0.29l1.24,3.0l0.79,0.44l0.93,-0.06l0.44,0.18l-0.29,0.75l0.08,0.8l0.44,1.07l0.49,2.23l0.76,1.51l0.0,0.82l-0.65,1.68l0.27,1.52l1.1,1.84l0.8,0.5l0.78,1.6l1.12,0.48l0.4,-0.05l1.63,-1.25l1.11,-0.58l2.84,0.56l0.86,0.75l0.79,1.25l0.85,0.66l0.4,0.06l0.74,-0.3l1.52,0.3l0.8,0.93l0.81,0.54l0.46,-0.01l1.04,-0.79l0.84,-0.94l2.97,-0.97l1.99,-0.27l2.79,-1.37l0.8,0.1l0.96,1.36l1.06,1.01l0.33,1.64l1.42,2.33l3.34,3.06l1.35,0.96l1.19,-0.1l0.72,-0.41l0.28,-0.49l0.19,-1.39l0.24,-0.32l0.35,-0.01l2.68,1.86l2.58,0.24l1.68,1.38l2.11,1.32l1.67,0.1l1.75,-0.7l0.77,1.37l0.77,0.84l1.08,0.35l1.25,0.06l4.2,3.19l1.53,0.18l1.24,-0.49l0.78,-0.1l0.42,0.26l0.11,0.41l-0.48,1.0l0.0,1.37l0.93,1.44l0.02,1.11l-0.24,1.06l-0.48,0.98l-2.34,2.7l-1.74,0.57l-0.99,0.59l-0.18,0.44l0.32,1.13l0.8,1.06l1.5,0.75l1.56,0.51l0.06,0.2l-0.91,0.26l-1.42,-0.27l-0.36,0.12l-1.29,1.57l-0.82,3.06l0.29,0.48l1.57,0.38l0.76,0.48l0.67,3.33l-0.42,0.45l-0.14,0.84l0.36,0.58l1.16,0.39l0.02,0.26l-1.0,1.4l-1.48,4.14l0.01,1.58l-0.4,0.6l-4.46,0.21l-3.11,-0.07l-3.51,-0.36l-1.21,0.39l-1.59,2.61l-0.97,0.89l-1.65,0.82l-2.08,0.34l-1.22,1.22l-0.39,1.6l-0.04,1.46l-0.73,1.69l0.08,0.69l0.25,0.3l0.73,0.29l-0.78,0.87l-0.27,0.75l0.12,1.57l-4.77,-0.25l-3.94,0.43l-2.9,3.13l-1.6,0.01l-2.4,0.86l-1.66,1.09l-1.63,1.92l-1.37,-0.85l-1.76,0.03l-1.94,0.67l-2.0,1.42l-0.99,0.22l-2.41,-0.39l-2.68,0.84l-5.93,4.86l-0.82,1.42l-0.05,-1.11l-0.84,-1.38l-0.68,-0.01l-2.19,3.3l-1.23,0.48l-1.63,1.02l-0.19,0.32l-0.08,2.33l0.2,1.76l0.69,2.16l1.61,3.51l3.22,4.92l1.57,1.84l1.22,0.8l1.55,0.17l2.79,-1.54l0.97,-0.2l2.35,0.56l0.4,-0.13l0.81,-0.94l1.12,-0.49l1.49,-0.06l1.78,0.43l1.58,0.6l-1.53,2.81l-0.71,2.98l-1.95,0.66l-2.39,-0.08l-2.33,0.46l-1.41,-1.18l-1.21,-0.64l-1.47,-0.33l-1.52,0.41l-1.72,2.39l-2.83,1.69l-0.78,1.54l-2.43,-0.36l-2.43,0.31l-3.47,1.67l-2.67,3.57l-2.71,2.1l-2.08,0.64l-1.94,-0.2l-1.25,-0.6l-2.56,-2.11l1.03,-2.16l1.11,-4.34l-0.15,-1.62l-0.76,-2.44l-2.21,-1.73l-1.97,0.23l-0.85,-0.39l-3.81,-3.01l-2.13,-0.2l-2.04,0.55l-0.57,-0.3l-0.37,-0.64l4.07,-3.44l4.17,-2.97l1.91,-0.34l2.58,-1.45l2.69,-2.13l0.14,-0.4l-0.38,-1.67l-0.61,-1.32l-0.46,-0.22l-2.1,0.69l-2.02,-1.19l-0.79,-0.93l-0.42,-0.13l-3.46,1.0l-2.01,-0.14l-4.21,0.91l-1.85,-0.85l-4.05,-2.59l-1.5,-0.52l-1.23,0.07l-0.24,-0.29l0.33,-0.16l1.0,-0.06l1.25,-0.47l0.35,-0.69l-0.06,-0.84l-0.28,-0.35l-2.07,-0.64l-1.91,-0.19l-1.28,-0.84l1.12,-0.01l2.23,0.66l3.41,0.24l3.09,0.67l0.38,-0.12l2.55,-2.27l0.42,-0.54l0.0,-0.47l-0.45,-0.15l-2.93,0.97l-2.88,-0.6l-1.01,-0.8l-0.87,-1.21l-0.36,-1.34l0.25,-1.43l-0.36,-2.64l-1.36,-3.44l-1.17,-1.28l-0.51,-0.06l-0.15,0.49l1.04,2.48l0.38,1.63l0.62,1.51l-0.15,3.92l-0.32,1.16l-0.97,0.27l-2.86,-0.54l0.35,-1.86l-0.19,-0.42l-0.46,0.04l-0.99,0.87l-1.19,2.03l-0.9,0.26l-2.57,-0.21l-4.62,1.43l-0.27,0.3l-0.99,3.58l-0.88,1.96l-1.92,3.08l-3.91,4.6l-2.77,1.27l-1.44,0.89l-0.94,0.34l-1.73,-0.41l-0.35,0.08l-0.88,0.77l-0.4,0.94l-0.01,1.6l0.96,1.33l0.73,3.64l-0.1,0.59l-1.49,-1.49l-2.43,-0.97l-2.6,0.38l-2.62,1.57l-1.62,0.53l-0.81,-0.35l-0.75,-0.01l-0.35,0.24l-0.2,0.46l0.07,0.7l-3.82,-1.02l-1.69,-0.99l-1.17,-1.64l0.9,-0.59l2.11,-0.16l0.54,-0.25l0.41,-1.44l-0.27,-1.71l0.82,-1.16l1.38,-1.09l0.91,-1.21l0.19,-1.65l1.41,-0.78l1.43,-1.58l0.78,-2.71l-0.83,-2.15l-0.21,-2.46l0.31,-0.49l1.14,-0.7l1.41,-0.51l0.1,2.48l0.33,0.39l0.57,-0.02l0.42,-0.31l0.58,-1.12l0.97,0.32l0.81,-0.34l1.27,0.86l0.94,0.23l0.94,-0.39l0.5,-0.52l0.24,0.08l1.09,1.61l0.46,0.15l3.15,-0.52l1.02,-1.05l-0.07,-0.55l-2.64,-2.15l0.22,-3.58l-0.33,-1.16l-0.59,-1.02l-2.29,-1.21l-1.57,-1.05l-0.24,-0.35l-0.11,-1.55l-0.67,-0.99l-0.04,-0.53l0.41,-1.17l0.1,-1.22l-0.25,-0.8l-0.39,-0.39l-0.89,-0.15l-0.83,-0.6l-0.72,-0.99l-2.31,-1.6l-0.25,-0.5l-0.13,-0.65l0.83,-2.52l0.34,-1.47l0.02,-0.96l-0.27,-2.37l-1.11,-1.82l-0.83,-0.2l-1.4,0.75l-0.44,-0.24l-0.7,-0.81l-1.23,-2.47l-0.27,-0.21l-3.34,-0.63l-0.37,0.16l-0.57,0.76l-0.35,-0.78l-0.48,-0.31l-0.55,0.07l0.17,-0.66l-0.16,-0.43l-0.76,-0.52l-1.94,-0.06l-0.67,-0.27l-0.21,-0.8l-0.57,-0.52l-1.13,-0.33l-0.89,-0.58l-1.05,-1.1l-1.54,-0.71l-2.5,-0.53l-1.84,1.16l-0.7,-0.27l-0.4,0.07l-1.36,1.16l-2.83,0.06l-2.42,-0.32l-2.8,1.9l-0.37,0.72l-4.06,1.07l-0.28,0.3l-0.38,1.78l-1.4,2.22l-9.4,1.66l-4.0,1.77l-1.37,1.58l-1.14,0.38l-0.91,0.1l-4.13,-4.15l-1.49,-0.45l-1.55,0.17l-1.38,0.55l-1.24,0.09l-1.5,-0.74l-0.95,0.13l-4.48,-1.13l-3.47,0.04l-2.68,-1.84l-1.06,-0.13l-0.33,0.14l-0.66,0.78l-0.47,0.81l-2.05,0.97l0.02,-1.29l-0.37,-0.74l-1.21,-1.11l-1.14,0.11ZM779.03,687.05l0.22,0.18l-0.17,-0.08l-0.05,-0.1ZM780.28,687.7l2.42,0.64l-1.93,-0.42l-0.48,-0.22Z"
                        data-code="UA"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M520.61,469.32l2.48,1.18l0.77,-0.25l0.66,-0.53l0.12,-0.46l-0.81,-2.03l-0.71,-0.96l-0.31,-0.9l1.09,-0.26l1.08,0.08l0.38,-0.21l0.88,-1.82l-0.49,-2.51l-1.41,-1.04l-0.95,-0.33l-1.89,-3.82l-2.08,-2.12l-3.61,-7.9l-1.33,-5.49l-0.54,-0.27l-0.81,0.34l-0.91,-4.21l-0.09,-1.66l-0.22,-0.34l-1.74,-0.87l-0.42,-6.28l-0.27,-0.35l-1.93,-0.66l-1.25,-2.78l-0.24,-5.63l-0.16,-0.3l-1.38,-1.04l-0.93,0.09l0.29,-2.28l-0.65,-5.3l-0.22,-4.86l-0.54,-1.56l-0.28,-1.63l0.53,-2.01l0.93,-0.16l1.05,1.11l1.09,3.26l1.21,0.67l0.38,-0.03l1.5,-1.06l0.94,-2.44l1.19,-7.4l-1.58,-7.87l2.06,-2.83l1.29,-4.38l0.6,-0.59l2.53,-0.66l1.72,-1.53l2.65,-3.82l0.45,-3.77l0.02,-1.78l0.5,-1.35l0.49,-2.64l-0.49,-2.83l-3.22,-9.55l-0.25,-2.82l0.57,-0.41l1.44,-0.48l2.87,-0.15l0.6,-0.5l1.02,-3.31l0.72,-1.41l0.72,-3.73l-1.73,-2.91l-2.22,-2.76l-1.56,-0.98l-2.6,-2.26l-1.71,-1.77l1.83,-12.69l0.16,-3.49l-2.56,-9.03l0.34,-3.81l-0.42,-5.76l1.41,-2.29l0.04,-0.37l-1.07,-2.63l-1.83,-5.93l2.81,-5.93l-0.44,-3.22l1.64,-2.2l4.88,-8.26l1.67,-1.74l2.56,-1.51l2.82,-0.74l1.21,0.01l8.93,1.88l0.41,-0.16l0.57,-0.83l0.86,-1.77l1.09,-2.57l0.09,-2.71l-0.38,-4.04l-0.58,-2.45l-5.66,-3.73l6.15,-11.32l3.22,-7.23l1.0,-3.02l0.76,-1.34l0.95,-11.25l1.16,-4.9l0.01,-1.76l-1.2,-9.1l4.7,-0.76l1.78,-0.5l1.58,-0.82l3.01,-2.05l1.56,-1.9l-0.71,-6.36l1.74,-2.04l4.43,-7.41l4.78,-7.14l2.32,-2.9l0.41,-3.67l-1.03,-3.46l-3.09,-5.97l0.79,-2.46l1.41,-0.51l2.03,-1.11l1.75,-2.58l2.84,-9.83l5.17,-4.81l1.91,-2.44l7.72,4.85l0.58,-0.17l2.83,-6.13l0.72,-2.5l-0.39,-9.91l0.19,-2.01l1.67,-0.88l0.85,-0.21l5.18,2.26l3.9,0.3l2.74,0.99l8.27,3.79l1.46,0.25l0.35,-0.12l3.69,-4.49l-0.1,-0.58l-3.26,-2.12l2.07,-2.08l1.33,-2.55l1.12,-3.16l0.39,-3.55l-0.2,-2.16l-2.62,-4.05l6.05,-0.53l3.47,2.02l0.39,2.79l3.55,2.9l1.04,1.56l2.16,2.31l0.68,1.36l2.01,1.46l1.44,1.55l1.74,1.31l1.98,1.96l2.76,1.64l2.34,0.55l5.61,2.65l0.91,0.82l3.22,3.93l1.13,4.34l0.34,0.3l1.59,0.2l0.46,1.36l1.61,2.59l2.16,2.21l-0.05,0.46l-1.79,2.23l-0.19,2.87l0.17,3.59l0.55,2.93l-0.05,0.73l-0.97,2.62l-0.15,2.12l0.22,0.51l0.35,0.22l2.48,0.33l0.77,0.47l0.52,3.05l-0.14,0.46l-1.35,1.43l-0.5,1.33l-0.06,1.87l0.25,1.97l0.52,2.26l3.58,6.58l0.58,2.1l-0.64,1.17l-0.61,2.36l-0.39,4.43l-1.25,2.29l-0.98,1.02l-0.26,1.27l-0.12,2.25l0.36,4.3l0.29,1.32l0.45,0.91l2.15,1.52l1.86,5.14l1.35,5.72l-3.05,0.65l-2.57,-1.46l-0.4,0.0l-1.26,0.72l-2.34,0.04l-2.67,0.6l-1.52,1.58l-2.21,-1.5l-2.31,-2.76l-0.62,0.01l-1.64,2.05l-0.67,0.24l-1.05,-1.81l-0.87,-0.32l-0.46,0.14l-0.54,0.79l-0.4,1.66l-0.67,1.4l-0.37,4.65l-1.89,-0.37l-0.47,0.45l0.14,0.89l0.62,0.84l-0.51,0.46l-2.1,-0.07l-0.4,0.29l-0.2,1.08l0.55,1.07l-0.71,1.14l-2.53,0.63l-1.49,-0.15l-0.38,0.18l-0.51,0.86l-0.11,1.09l0.29,0.89l0.74,0.61l0.12,1.25l-1.49,-1.89l-0.41,-0.15l-0.5,0.11l-0.29,0.52l0.37,1.12l0.96,1.3l0.51,1.18l0.44,1.4l-0.08,0.97l-1.96,3.54l-3.11,4.35l-0.82,2.26l0.07,0.39l1.85,2.57l1.55,5.67l1.66,2.52l-0.66,2.32l-2.8,2.49l-3.29,3.91l-3.44,9.53l-1.05,1.17l-2.98,1.58l-1.22,1.64l-2.17,1.78l-4.05,1.68l-1.79,2.21l-0.8,2.18l-0.46,0.08l-0.83,-0.81l-1.19,-0.66l-0.59,0.31l-0.15,1.71l-1.2,-1.02l-0.6,0.1l-0.94,1.58l-0.68,2.38l-2.53,3.06l-2.72,-0.55l-0.43,0.19l-0.33,0.58l0.16,0.55l0.64,0.39l-1.07,0.11l-1.15,0.6l-0.71,-0.04l-0.41,0.3l-0.96,3.25l-1.47,0.69l-0.81,0.15l-0.3,0.25l-0.42,1.07l0.34,0.55l2.11,0.18l-0.37,2.13l-2.75,1.31l-1.06,1.73l-0.69,-0.02l0.21,-0.84l-0.4,-0.51l-1.65,0.05l-0.5,-1.31l-0.67,-0.13l-0.37,0.4l-0.1,0.34l0.22,1.27l1.04,3.16l-0.39,1.03l-0.47,0.55l-0.03,0.48l0.37,0.56l1.08,0.52l0.15,0.28l-1.01,0.59l-1.41,2.06l-1.38,0.05l-0.32,0.18l-0.85,1.29l-0.63,-0.0l-0.82,-0.87l-1.34,-0.76l-0.58,0.23l-0.43,1.34l-0.09,1.16l0.77,2.82l1.5,2.19l0.93,0.65l-0.58,0.42l-0.75,1.45l-1.84,8.68l0.33,2.57l0.68,2.23l-1.03,-0.12l-1.81,-0.91l-0.58,0.41l0.24,1.83l-1.14,2.41l0.45,3.3l-0.34,2.1l0.57,0.92l0.24,1.06l-0.45,1.11l0.2,0.77l0.45,7.33l-0.12,1.06l1.01,3.81l-0.37,3.04l1.58,1.96l0.31,0.13l2.51,-0.05l0.32,0.26l0.87,2.42l0.42,0.28l1.27,-0.18l1.7,-1.09l0.72,-0.17l0.69,1.92l2.08,2.89l1.36,1.38l1.93,0.64l1.94,2.08l-0.28,2.57l0.11,0.32l1.02,1.01l2.4,1.03l1.89,3.57l0.74,2.96l-0.23,1.64l-3.3,2.62l-1.93,2.48l-2.31,1.96l-0.97,0.46l-0.79,0.99l-0.58,0.33l-0.92,-0.15l-2.55,1.78l-1.53,-0.44l-0.58,-0.7l0.45,-3.7l-0.31,-1.2l-0.39,-0.7l-0.55,-0.15l-1.2,0.69l-0.2,0.41l0.15,0.98l-1.5,0.04l-1.85,-1.14l-0.61,0.3l-0.19,1.82l-3.69,-1.73l-1.31,0.42l-1.68,-0.9l-0.47,0.07l-1.03,1.02l-1.07,-0.32l-0.91,-1.29l-0.68,0.04l-1.29,2.32l-2.81,0.65l-2.8,0.39l-0.34,0.32l0.18,0.42l1.58,0.88l6.25,-0.15l1.92,0.6l2.13,-0.37l1.91,1.8l1.52,0.52l1.68,2.13l0.54,0.08l0.78,-0.53l1.19,0.08l1.41,0.64l4.15,-0.08l1.55,-1.52l2.07,0.28l1.06,-0.41l0.89,-0.96l0.67,-0.17l1.07,0.07l1.26,-0.91l0.4,0.21l0.58,1.34l-1.22,0.7l-1.05,0.04l-0.38,0.32l-0.55,2.87l-1.06,1.68l-2.46,1.2l-1.75,1.61l-1.79,1.14l-0.68,-0.22l-0.4,0.1l-1.26,1.24l-2.84,1.49l-1.57,2.09l-3.24,1.78l-1.65,1.43l-4.43,0.08l-4.37,-0.32l-1.59,0.75l-0.21,0.42l0.33,0.33l1.32,0.2l0.91,0.64l1.43,-0.21l3.95,0.67l1.49,1.95l-0.93,0.59l-2.28,0.64l-0.28,0.49l1.55,5.52l-0.91,1.44l-0.07,5.87l-0.97,0.09l-0.35,0.31l-0.56,2.57l0.41,1.45l-0.03,2.96l0.28,1.92l0.64,1.69l-0.26,1.61l-2.12,4.28l0.05,1.94l0.65,2.95l-1.61,6.37l-0.78,2.4l-1.77,2.9l-0.92,2.25l-2.08,6.78l-0.96,1.25l-1.0,0.82l-1.24,-0.83l-1.46,-0.55l-1.69,0.08l-2.4,0.76l-3.73,-0.51l-3.86,0.33l-0.92,0.68l-0.15,0.41l0.47,2.07l-0.81,0.19l-1.18,-0.63l-0.42,0.03l-2.19,1.8l-1.9,2.16l-0.7,1.42l-0.17,2.83l1.8,4.61l-2.05,2.82l-1.03,0.09l-3.86,-0.85l-6.47,1.93l-5.35,-1.4l0.59,-1.42l-0.02,-1.2l0.53,-3.85l-0.07,-1.47l-0.5,-1.53l-1.43,-1.8l-3.25,-6.15l-1.19,-3.0ZM610.32,427.62l-0.53,1.48l-0.43,-0.78l1.02,-1.42l1.44,0.07l-1.51,0.65ZM608.73,430.1l-0.84,0.57l-0.59,1.61l-0.83,0.29l-1.05,0.9l-0.31,5.65l1.34,1.96l-1.36,0.93l-0.61,1.04l-0.54,1.86l-2.04,1.07l-0.98,0.99l-1.28,2.01l-0.61,2.61l-1.07,1.0l-0.58,0.11l0.56,-1.53l1.05,-1.79l-0.04,-0.46l-0.98,-1.19l-0.6,-1.89l-0.74,-1.42l0.6,-1.7l-0.31,-2.74l0.1,-2.57l0.85,-1.25l1.09,-1.16l1.63,-2.55l1.7,-1.78l2.22,-0.75l0.96,0.66l0.61,-0.22l0.44,-1.54l0.46,-0.22l0.52,0.27l1.21,1.21ZM602.77,387.0l0.15,-0.7l0.39,-0.35l0.38,0.13l-0.92,0.92ZM600.09,398.98l0.18,-0.61l0.36,-0.48l-0.5,1.07l-0.05,0.02ZM574.46,468.61l-0.62,0.94l-0.33,-1.34l-0.1,-4.16l0.24,-2.02l2.88,-7.41l1.38,-0.77l1.86,-4.7l0.51,-2.12l1.47,-3.91l0.49,0.18l-0.73,0.98l0.05,1.68l-2.28,5.51l-0.62,3.56l-0.83,0.96l-3.37,12.62Z"
                        data-code="SE"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                      <path
                        d="M818.81,944.87l2.6,-4.78l1.71,-4.85l1.6,-6.69l2.09,-5.65l0.38,-1.67l1.21,-0.11l2.78,0.2l1.28,-0.95l0.49,-1.95l0.95,0.09l0.28,-0.48l2.28,-1.66l-0.13,1.32l0.91,2.24l-0.49,0.86l0.05,0.8l0.51,1.43l-1.41,2.5l-0.17,0.61l-2.23,0.85l-0.69,0.81l-0.33,3.73l-0.39,-0.04l-0.92,-0.65l-0.18,-0.55l-0.49,-0.44l-2.75,-0.44l-1.89,1.38l-0.74,1.96l-0.75,2.87l0.44,4.06l-0.39,0.91l0.03,0.67l0.54,0.35l1.09,-0.29l1.52,0.74l-1.98,1.12l-1.21,1.19l-1.16,3.42l0.09,0.68l0.8,0.58l2.62,-0.24l2.49,-0.92l1.76,-0.92l-0.61,3.52l0.5,1.63l-0.72,2.24l-1.99,4.88l-1.31,4.01l-0.01,4.45l-0.98,2.55l-1.27,6.5l-0.43,0.55l-3.09,-10.46l-1.74,-4.0l-0.55,-2.38l-3.24,-9.44l1.22,-1.17l0.14,-1.24l2.28,-2.48l0.08,-0.56l-0.53,-0.7Z"
                        data-code="IL"
                        fill="white"
                        fillOpacity={1}
                        stroke="none"
                        strokeWidth={0}
                        strokeOpacity={1}
                        fillRule="evenodd"
                        className="jvectormap-region jvectormap-element"
                      />
                    </g>
                    <g />
                  </svg>
                  <div className="jvectormap-zoomin">+</div>
                  <div className="jvectormap-zoomout">−</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
