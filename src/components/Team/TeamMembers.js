import React from "react";

const TeamMembers = ({ imagePath, name, role, description }) => {
  return (
    <div className="flex items-center  w-fit h-fit rounded-full border-2 my-3 hover:border-slate-900 p-2 hover:bg-slate-100 ">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img src={imagePath} className="rounded-full h-56 w-56" alt="member" />
        <div className="flex flex-col mx-3 bg-purple-300">
          <h1 className="text-black text-center md:text-left text-2xl">
            {name}
          </h1>
          <h1 className="text-black text-center md:text-left text-2xl">
            {role}
          </h1>
          <p className="text-black text-center md:text-left text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
