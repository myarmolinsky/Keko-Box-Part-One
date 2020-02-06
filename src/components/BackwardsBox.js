import React from "react";
import PropTypes from "prop-types";

const BackwardsBox = ({ input }) => {
  return (
    <div className="box">
      {input !== ""
        ? input
            .split("")
            .reverse()
            .join()
        : ""}
    </div>
  );
};

BackwardsBox.propTypes = {
  input: PropTypes.string.isRequired
};

export default BackwardsBox;
