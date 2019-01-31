import React from "react";
import ReactDOM from "react-dom";

const MobileSidebar = (props) => {
  return ReactDOM.createPortal(
    <ul id="nav-mobile" className="sidenav" style={{ textAlign: "center" }}>
      {props.children}
    </ul>,
    document.querySelector("#sidebar")
  );
};

export default MobileSidebar;
