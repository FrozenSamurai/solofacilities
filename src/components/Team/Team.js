import React, { forwardRef } from "react";
import TeamMembers from "./TeamMembers";

const Team = forwardRef((_, ref) => {
  let team_members = [
    {
      name: "Raj Jadhav",
      role: "Engnieer",
      imagePath: "/assets/team/raj.jpg",
      description: "engineer engineer engineer",
    },
    {
      name: "Raj Jadhav",
      role: "Engnieer",
      imagePath: "/assets/team/raj.jpg",
      description: "engineer engineer engineer",
    },
    {
      name: "Raj Jadhav",
      role: "Engnieer",
      imagePath: "/assets/team/raj.jpg",
      description: "engineer engineer engineer",
    },
  ];

  return (
    <section ref={ref} id="team-container" className="pt-28 pb-10">
      <div className="flex flex-row justify-around">
        <div>
          <h1
            data-aos="fade-down"
            className="
            text-white text-5xl text-center
            lg:text-6xl uppercase glow font-titleBold
            "
          >
            Team
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap mx-6 justify-around items-center">
        {team_members.map((member, index) => (
          <TeamMembers
            imagePath={member.imagePath}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
});

export default Team;
