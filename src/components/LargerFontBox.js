import React from "react";
import PropTypes from "prop-types";

const LargerFontBox = ({ input }) => {
  return <div className="box larger-font">{input}</div>;
};

LargerFontBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default LargerFontBox;
