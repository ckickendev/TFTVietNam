import React from "react";

export const DropdownItem = ({ dataRR, linkHref, title, children }) => {
  return (
    <>
      <a
        {...dataRR}
        className="dropdown-item"
        role="button"
        tabIndex={0}
        href="https://www.metatft.com/#"
      />
      <a data-rr-ui-event-key="/units" className="nav-link" href={linkHref}>
        {children}
      </a>
    </>
  );
};
