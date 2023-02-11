import React from "react";

const PersonSidebar = ({
  gender,
  profile_path,
  birthday,
  place_of_birth,
  known_for_department,
  also_known_as,
}) => {
  const profileImg = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`;

  const birthDate = new Date(birthday);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <>
      <img src={profileImg} className="rounded-lg" />
      <div className="flex-col mt-5">
        <div className="mb-4">
          <h3 className="font-bold text-xl">Personal Info</h3>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Known For</h4>
          <p>{known_for_department}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Gender</h4>
          <p>{gender === 1 ? "Female" : "Male"}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Birthday</h4>
          <p>{`${birthday} (${ageInYears} years old)`}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Place of Birth</h4>
          <p>{place_of_birth}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Also Known As</h4>
          <ul>
            {also_known_as?.map((nameVariant) => {
              // let index = new Date().getTime().toString();
              return <li key={Math.random().toString()}>{nameVariant}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PersonSidebar;
