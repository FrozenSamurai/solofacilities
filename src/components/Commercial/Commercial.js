import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

// import deep_cleaning from "../css_assets/deep_cleaning.png";

const Commercial = () => {
  let navigate = useNavigate();
  const residentService = [
    {
      imagePath: "/assets/deep_cleaning.png",
      text: "",
      service: "Home Deep Cleaning Service",
    },
    {
      imagePath: "/assets/kitchen_cleaning.png",
      text: "",
      service: "Kitchen Cleaning Service",
    },
    {
      imagePath: "/assets/bathroom_cleaning.png",
      text: "",
      service: "Bathroom Cleaning Service",
    },
    {
      imagePath: "/assets/sofa_cleaning.png",
      text: "",
      service: "Sofa Cleaning Service",
    },
    {
      imagePath: "/assets/chair_cleaning.png",
      text: "",
      service: "Chair Cleaning Service",
    },
    {
      imagePath: "/assets/carpet_cleaning.png",
      text: "",
      service: "Carpet Cleaning Service",
    },
    {
      imagePath: "/assets/matress_cleaning.png",
      text: "",
      service: "Mattress Cleaning Service",
    },
    {
      imagePath: "/assets/curtain_cleaning.png",
      text: "",
      service: "Curtain Cleaning Service",
    },
    {
      imagePath: "/assets/sanitization.png",
      text: "",
      service: "Sanitization Service",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center py-6 mt-16">
        <div className="flex flex-row items-start justify-between mx-auto  md:px-24">
          <button
            className="lg:text-6xl text-5xl hover:text-red-600 lg:px-8 pl-4 lg:visible"
            onClick={() => navigate("/")}
          >
            &larr;
          </button>
          <h1
            className="glow font-sora lg:text-center"
            style={{
              fontSize: window.innerWidth > 480 ? "3rem" : "2rem",
              paddingLeft: window.innerWidth < 480 ? "3.2rem" : "",
            }}
          >
            COMMERCIAL CLEANING
          </h1>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto gap-8 justify-center px-4 justify-items-center md:px-24 mt-24">
          {residentService.map((services, index) => (
            <ServiceCard
              key={index}
              imagePath={services.imagePath}
              text={services.text}
              service={services.service}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Commercial;
