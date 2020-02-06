import React, { useState } from "react";
import "./App.css";
import ConvertedTextBoxes from "./components/ConvertedTextBoxes";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="app">
      <div className="input-box">
        <form>
          Enter text here:{" "}
          <input
            placeholder="Text Here"
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <ConvertedTextBoxes input={input} />
      </div>
    </div>
  );
}

export default App;
