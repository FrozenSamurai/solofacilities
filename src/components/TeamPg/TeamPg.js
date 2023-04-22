import React, { forwardRef } from "react";
import TeamMembers from "./TeamMembers";

const TeamPg = forwardRef((_, ref) => {
  let team_members = [
    {
      name: "Mandar Patil",
      role: "Founder & CEO",
      imagePath: "/assets/team/mandar.png",
      description: "Mumbai Division Head",
    },
    {
      name: "Santosh Mane",
      role: "Co-Founder & CHRO",
      imagePath: "/assets/team/Santosh Cfo.png",
      description: "Pune Division Head",
    },
    {
      name: "Santosh Gurav",
      role: "Business Analyst & Guide",
      imagePath: "/assets/team/Santosh.png",
      description: "",
    },
    {
      name: "Raj Jadhav",
      role: "Technical Support",
      imagePath: "/assets/team/raj1.png",
      description: "",
    },
  ];

  return (
    <section ref={ref} id="team-container" className="pt-28 pb-10">
      <div className="flex flex-row justify-around">
        <div>
          <h1
            data-aos="fade-down"
            className="
            text-black text-5xl text-center
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

export default TeamPg;
