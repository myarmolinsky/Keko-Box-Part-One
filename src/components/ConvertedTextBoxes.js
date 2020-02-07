import React from "react";
import BackwardsBox from "./BackwardsBox";
import CapsBox from "./CapsBox";
import LargerFontBox from "./LargerFontBox";

const ConvertedTextBox = ({ input }) => {
  return (
    <div className="converted-text-boxes">
      <h3>Your text reversed:</h3>
      <BackwardsBox input={input} />
      <h3>Your text in all caps:</h3>
      <CapsBox input={input} />
      <h3>Your text in a larger font:</h3>
      <LargerFontBox input={input} />
    </div>
  );
};

export default ConvertedTextBox;
