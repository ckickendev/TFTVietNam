import React from "react";

export const DropdownItem = ({ linkHref, title, children }) => {
  const link = linkHref || "#"
  return (
    <>
      <a
        className="nav-link"
        href={link}
      >
        {children}
      </a>
    </>
  );
};
