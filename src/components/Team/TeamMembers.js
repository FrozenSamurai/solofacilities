import React from "react";

const TeamMembers = ({ imagePath, name, role, description }) => {
  return (
    <div
      data-aos="flip-left"
      className="flex items-center justify-center w-full md:w-fit shadow-xl from-gray-300 h-fit rounded-full border-2 my-3 hover:border-slate-900 p-2 hover:bg-slate-100 "
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img src={imagePath} className="rounded-full h-56 w-56" alt="member" />
        <div className="flex flex-col mx-3 p-2 rounded-lg bg-indigo-900 mt-1 md:mt-0 md:bg-transparent">
          <h1 className="text-offWhite md:text-black text-center md:text-left text-2xl">
            {name}
          </h1>
          <h1 className="text-offWhite md:text-black text-center md:text-left text-2xl">
            {role}
          </h1>
          <p className="text-offWhite md:text-black text-center md:text-left text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
