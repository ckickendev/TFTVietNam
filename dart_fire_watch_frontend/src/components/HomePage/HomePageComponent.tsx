import React from "react";
import { FootContent } from "./FootContent";
import "./styles/HomePageComponent.scss";
import { HomepageContent } from "./HomepageContent";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";

export const HomePageComponent = () => {
  return (
    <div className="header-container">
      <div id="root">
        <div id="page-container">
          <NavBarComponent />
          <div id="content-wrap">
            <HomepageContent />
            <FootContent />
          </div>
        </div>
      </div>
      <img
        alt="icon"
        id="translator-icon"
        src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/icon-128.png"
        style={{ display: "none" }}
      />
      <div id="translator-container" style={{ display: "none" }}>
        <div className="rapid-header">
          <img alt="icon" src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/logo.svg" />
          <img
            alt="icon"
            id="rapid-copy"
            src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/copy.svg"
          />
        </div>
        <div id="rapid-text-wrapper">
          <span />
        </div>
        <div className="rapid-footer">
          <span id="rapid-first-language">ENG</span>
          <img
            alt="icon"
            id="rapid-arrow-icon"
            src="chrome-extension://lmcboojgmmaafdmgacncdpjnpnnhpmei/icons/r-arrow.svg"
          />
          <span id="rapid-second-language">FRN</span>
        </div>
      </div>
    </div>
  );
};
