import React from "react";
import PropTypes from "prop-types";

const InputBox = ({ input }) => {
  return (
    <div className="input-box">
      <form>
        Enter your text here: <input onChange={e => (input = e.target.value)} />
      </form>
    </div>
  );
};

InputBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default InputBox;
