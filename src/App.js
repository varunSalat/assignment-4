import React from "react";
import ConditionalRender from "./pages/ConditionalRender";
import FragmentComponent from "./pages/FragmentComponent";
import PortalComponent from "./pages/PortalComponent";
import AnimationComponent from "./pages/AnimationComponent";
import "./App.css";

function App() {
  return (
    <div className="main_container">
      <ConditionalRender />
      <div className="container">
        <FragmentComponent />
      </div>
      <AnimationComponent />
      <PortalComponent />
    </div>
  );
}

export default App;
