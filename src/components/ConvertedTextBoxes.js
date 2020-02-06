import React from "react";
import PropTypes from "prop-types";
import BackwardsBox from "./BackwardsBox.js";
import CapsBox from "./CapsBox.js";
import LargerFontBox from "./LargerFontBox.js";

const ConvertedTextBoxes = ({ input }) => {
  return (
    <div className="converted-text-boxes">
      <BackwardsBox input={input} />
      <CapsBox input={input} />
      <LargerFontBox input={input} />
    </div>
  );
};

ConvertedTextBoxes.propTypes = {
  input: PropTypes.string.isRequired
};

export default ConvertedTextBoxes;
