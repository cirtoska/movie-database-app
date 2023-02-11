import React from "react";

const SubNav = () => {
  return (
    <ul className="flex gap-7 items-center justify-center">
      <li className="border-b-4 border-tmdbLightBlue leading-6 cursor-pointer py-3">
        Overview
      </li>
      <li>Media</li>
      <li>Fandom</li>
      <li>Share</li>
    </ul>
  );
};

export default SubNav;
