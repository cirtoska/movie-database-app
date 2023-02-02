import React from "react";

const SectionPanel = ({ children }) => {
  return (
    <div className="w-full py-7 px-0 border-t-gray-200 border-t-2 block relative">
      {children}
    </div>
  );
};

export default SectionPanel;
