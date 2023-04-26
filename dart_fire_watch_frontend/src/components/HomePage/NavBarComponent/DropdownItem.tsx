import React from "react";

interface IDropdownItem {
  linkHref?: string;
  title?: string;
  children?: string | JSX.Element | JSX.Element[] |undefined | (string | Element);

}

export const DropdownItem = ({ linkHref, title, children }: IDropdownItem) => {
  return (
    <>
      <a className="nav-link" href={linkHref}>
        {children}
      </a>
    </>
  );
};
