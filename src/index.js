import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click me!";
  return (
    <div>
      <label for="name" className="label">
        enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "cyan", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
