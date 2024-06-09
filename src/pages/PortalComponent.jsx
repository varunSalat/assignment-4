import React from "react";
import ReactDOM from "react-dom";

function PortalComponent() {
  return ReactDOM.createPortal(
    <div>
      <p>This is rendered using a React Portal.</p>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalComponent;
