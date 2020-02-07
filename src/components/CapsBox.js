import React from "react";
import PropTypes from "prop-types";

const CapsBox = ({ input }) => {
  return (
    <textarea
      rows="5"
      cols="40"
      disabled="disabled"
      className="box"
      placeholder={input.toUpperCase()}
    />
  );
};

CapsBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default CapsBox;
