import React, { useState } from "react"; //useState gives state to our functional component
import PropTypes from "prop-types";
import BackwardsBox from "./BackwardsBox";
import CapsBox from "./CapsBox";
import LargerFontBox from "./LargerFontBox";

const InputBox = () => {
  const [input, setInput] = useState("");

  return (
    <div className="input-box">
      <form>
        <input
          placeholder="Enter c00l text here"
          onChange={e => setInput(e.target.value)}
        />
        <BackwardsBox input={input} />
        <CapsBox input={input} />
        <LargerFontBox input={input} />
      </form>
    </div>
  );
};

InputBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default InputBox;
