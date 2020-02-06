import React from "react";
import BackwardsBox from "./BackwardsBox";
import CapsBox from "./CapsBox";
import LargerFontBox from "./LargerFontBox";

const ConvertedTextBox = ({ input }) => {
  return (
    <div className="converted-text-boxes">
      <BackwardsBox input={input} />
      <CapsBox input={input} />
      <LargerFontBox input={input} />
    </div>
  );
};

export default ConvertedTextBox;
