import React from "react";

const SplitColumn = ({ children }) => {
  return (
    <div className="pt-1 flex flex-wrap w-full max-w-[300px]">{children}</div>
  );
};

export default SplitColumn;
