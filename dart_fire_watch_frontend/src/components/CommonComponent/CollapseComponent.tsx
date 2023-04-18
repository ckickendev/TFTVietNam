import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

interface ICollapseComponent {
  isOpen: boolean;
  title: string;
  idCollapse: string;
}

const CollapseComponent = (props: ICollapseComponent) => {
  console.log(props);
  
  return (
    <Collapse in={props.isOpen}>
      <div id={props.idCollapse}>{props.title}</div>
    </Collapse>
  );
};

export default CollapseComponent;
