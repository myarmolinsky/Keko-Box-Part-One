import React from "react";
import PropTypes from "prop-types";

const CapsBox = ({ input }) => {
  return <div className="box">{input.toUpperCase()}</div>;
};

CapsBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default CapsBox;
