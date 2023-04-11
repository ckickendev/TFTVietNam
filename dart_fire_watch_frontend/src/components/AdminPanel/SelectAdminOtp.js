import React from "react";

export const SelectAdminOtp = (props) => {
    const {icon, title, change} = props;
  return (
    <li className="has-sub root-level" onClick={props.setOnStatus}>
      <a href="#">
        {icon}
        <span className="title title-option">{title}</span>
        <span className="badge badge-secondary">{change}</span>
      </a>
    </li>
  );
};
