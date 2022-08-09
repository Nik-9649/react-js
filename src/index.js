import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const style = { backgroundColor: "cyan", color: "white" };
  return (
    <div>
      <label for="name" className="label">
        enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={style}>Submit</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
