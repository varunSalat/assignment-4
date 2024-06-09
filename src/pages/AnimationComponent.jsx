import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function AnimationComponent() {
  const [inProp, setInProp] = useState(false);

  return (
    <div className="container">
      <h1>Animated Container</h1>
      <p className="co_text">Click on button to see animation</p>
      <button
        onClick={() => setInProp(!inProp)}
        style={{
          background: inProp ? "red" : "green",
        }}
      >
        Click to {inProp ? "Hide" : "Show"}
      </button>
      <CSSTransition
        in={inProp}
        timeout={200}
        classNames="my-node"
        unmountOnExit
      >
        <div className="my-node">This is an animated component!</div>
      </CSSTransition>
    </div>
  );
}

export default AnimationComponent;
