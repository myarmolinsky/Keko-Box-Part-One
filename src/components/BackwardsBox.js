import React from "react";
import PropTypes from "prop-types";

const BackwardsBox = ({ input }) => {
  return (
    <textarea
      rows="5"
      cols="40"
      disabled="disabled"
      className="box"
      placeholder={
        input !== ""
          ? input
              .split("")
              .reverse()
              .join("")
          : ""
      }
    />
  );
};

BackwardsBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default BackwardsBox;
