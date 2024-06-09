import React, { useState } from "react";

function ConditionalRender() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <h1>Conditional Render</h1>
      <p className="co_text">Click on Show button to see the text</p>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          background: showMessage ? "red" : "green",
        }}
      >
        {showMessage ? "Hide" : "Show"} Message
      </button>
      {showMessage && <p>This is a conditionally rendered message!</p>}
    </div>
  );
}

export default ConditionalRender;
