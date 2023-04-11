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
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-3 col-xs-6">
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
        <div className="col-md-3 col-xs-6">
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
        <div className="col-md-3 col-xs-6">
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
