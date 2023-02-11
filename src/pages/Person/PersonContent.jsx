import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PersonContent = ({ name, biography }) => {
  const [showMore, toggleShowMore] = useState(false);
  const paragraphs = biography ? biography.split("\n") : [];

  const handleToggle = () => toggleShowMore(!showMore);

  return (
    <div className="ml-10 mt-2">
      <h2 className="text-4xl font-bold  mb-10">{name}</h2>
      <div className="mb-4">
        <h3 className="font-bold text-2xl">Biography</h3>
        <div>
          {paragraphs
            .slice(0, showMore ? paragraphs.length : 3)
            .map((paragraph, index) => {
              return (
                <p key={index} className="my-5">
                  {paragraph}
                </p>
              );
            })}
          {paragraphs.length > 3 && (
            <p onClick={handleToggle} className="font-semibold text-blue-500">
              {showMore ? "Read Less" : "Read More"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonContent;
