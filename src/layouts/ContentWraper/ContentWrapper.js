import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="max-w-[1300px] mx-auto w-full flex content-start items-start px-10 py-7">
      {children}
    </div>
  );
};

export default ContentWrapper;
