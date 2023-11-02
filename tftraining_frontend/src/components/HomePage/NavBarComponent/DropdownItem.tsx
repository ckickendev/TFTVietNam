import React from "react";

interface IDropdownItem {
  linkHref?: string;
  title?: string;
  children?: string | JSX.Element | JSX.Element[] | undefined;
}

export const DropdownItem = ({ linkHref, title, children }: IDropdownItem) => {
  return (
    <a
      style={{ fontSize: "12px", fontWeight: 300 }}
      className="nav-link"
      href={linkHref}
    >
      {children}
    </a>
  );
};
