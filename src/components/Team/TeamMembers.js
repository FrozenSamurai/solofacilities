import React from "react";

const TeamMembers = ({ imagePath, name, role, description }) => {
  return (
    <div
      data-aos="flip-left"
      className="flex items-center justify-center w-full md:w-2/5 shadow-xl border-black h-fit rounded-full border-2 my-3 hover:border-white p-2 hover:bg-slate-100 backdrop-blur-lg hover:backdrop-blur-0"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <div className="flex flex-col w-full md:flex-row items-center justify-start md:space-x-5">
        <img src={imagePath} className="rounded-full h-56 w-56" alt="member" />
        <div className="flex flex-col mx-3 p-2 rounded-lg bg-indigo-900 mt-1 md:mt-0 md:bg-transparent">
          <h1 className="text-offWhite md:text-black text-center md:text-left text-3xl font-bold uppercase">
            {name}
          </h1>
          <h1 className="text-offWhite md:text-black text-center md:text-left text-xl">
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
