import React from "react";
import PropTypes from "prop-types";

const LargerFontBox = ({ input }) => {
  return (
    <textarea
      rows="1.5"
      cols="40"
      disabled="disabled"
      className="box larger-font"
      placeholder={input}
    />
  );
};

LargerFontBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default LargerFontBox;
