import React from "react";

const WhiteColumn = ({ children }) => {
  return (
    <div className="bg-white flex flex-wrap flex-initial pr-7 overflow-hidden">
      {children}
    </div>
  );
};

export default WhiteColumn;
