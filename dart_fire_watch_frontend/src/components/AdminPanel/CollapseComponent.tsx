import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

interface ICollapseComponent {
  isOpen: boolean;
  title: string;
  idCollapse: string;
}

const CollapseComponent = (props: ICollapseComponent) => {

  return (
    <li id={props.idCollapse}>
      <Collapse in={props.isOpen}>
        <div>{props.title}</div>
      </Collapse>
    </li>
  );
};

export default CollapseComponent;
