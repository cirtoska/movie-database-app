import React from "react";

const SubNav = () => {
  return (
    <ul className="flex gap-7 items-center justify-center py-3">
      <li className="border-b-4 border-tmdbLightBlue leading-6 cursor-pointer">
        Overview
      </li>
      <li>Media</li>
      <li>Fandom</li>
      <li>Share</li>
    </ul>
  );
};

export default SubNav;
