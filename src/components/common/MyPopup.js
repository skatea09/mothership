import React from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

const MyPopup = ({ children, position }) => (
  <Popup
    className="rounded-lg bg-black"
    contentStyle={{ backgroundColor: "#484B54", width: "auto", border: 0 }}
    arrowStyle={{ backgroundColor: "#484B54" }}
    trigger={
      <i className="fas fa-caret-down text-blue-darkest px-2 cursor-pointer" />
    }
    position={position || "bottom left"}
    on="hover"
    overlayStyle={{ border: 0 }}
  >
    {children}
  </Popup>
);

MyPopup.propTypes = {
  children: PropTypes.element.isRequired,
  position: PropTypes.string,
}

export default MyPopup;
