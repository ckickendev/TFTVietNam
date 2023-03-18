import React from "react";

export const DropdownItem = (props) => {
    const {dataRR, linkHref, title } = props;
  return (
    <>
      <a
        {...dataRR}
        className="dropdown-item"
        role="button"
        tabIndex={0}
        href="https://www.metatft.com/#"
      />
      <a
        data-rr-ui-event-key="/units"
        className="nav-link"
        href={linkHref}
      >
        {title}
      </a>
      <hr className="dropdown-divider" role="separator" />
    </>
  );
};
