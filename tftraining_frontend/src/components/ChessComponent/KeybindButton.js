import React from "react"
import "././css/index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

export function KeybindButton(props) {
  return (
    <FontAwesomeIcon icon={faKeyboard}
      className="keybind-button clickable"
      onClick={props.onClick}/>
  );
}
