import React, { useState } from "react"; //useState gives state to our functional component
import ConvertedTextBox from "./ConvertedTextBox";

const InputBox = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="input-box">
        <form>
          <input
            placeholder="Enter c00l text here"
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <ConvertedTextBox input={input} />
      </div>
    </div>
  );
};

export default InputBox;
