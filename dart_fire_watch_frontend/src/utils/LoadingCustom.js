import React from "react";
import "./loading.scss";

export const LoadingCustom = (props) => {
  const opacity = props.opacity || 1;
  return (
    <div className="overlay_utils">
      <div className="overlay" style={{opacity: opacity}}>  
        <div className="overlay__inner">
          <div className="overlay__content">
            <span className="spinner"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
