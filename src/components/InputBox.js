import React, { Fragment, useState } from "react";
import ConvertedTextBoxes from "./ConvertedTextBoxes";

const InputBox = () => {
  const [input, setInput] = useState("");

  return (
    <Fragment>
      <div className="input-box">
        <form>
          Enter text here: <br />
          <textarea
            rows="20"
            cols="40"
            placeholder="Text Here"
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </div>
      <ConvertedTextBoxes input={input} />
    </Fragment>
  );
};

export default InputBox;
