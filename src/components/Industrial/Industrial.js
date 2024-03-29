import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

// import deep_cleaning from "../css_assets/deep_cleaning.png";

const Industrial = ({ prevRoute }) => {
  let navigate = useNavigate();
  const residentService = [
    {
      imagePath: "/assets/airport.png",
      text: "",
      service: "Aerospace Industry",
    },
    {
      imagePath: "/assets/transport.png",
      text: "",
      service: "Transport Industry",
    },
    {
      imagePath: "/assets/computer.png",
      text: "",
      service: "Computer Industry",
    },
    {
      imagePath: "/assets/telecom.png",
      text: "",
      service: "Telecommunication Industry",
    },
    {
      imagePath: "/assets/agriculture.png",
      text: "",
      service: "Agriculture Industry",
    },
    {
      imagePath: "/assets/appartment.png",
      text: "",
      service: "Construction Industry",
    },
    {
      imagePath: "/assets/school.png",
      text: "",
      service: "Education Industry",
    },
    {
      imagePath: "/assets/hospital.png",
      text: "",
      service: "Pharmaceutical Industry",
    },
    {
      imagePath: "/assets/food.png",
      text: "",
      service: "Food Industry",
    },
    {
      imagePath: "/assets/entertain.png",
      text: "",
      service: "Entertainment Industry",
    },
    {
      imagePath: "/assets/energy.png",
      text: "",
      service: "Energy Industry",
    },
    {
      imagePath: "/assets/manufature.png",
      text: "",
      service: "Manufacturing Industry",
    },
    {
      imagePath: "/assets/music.png",
      text: "",
      service: "Music Industry",
    },
    {
      imagePath: "/assets/mining.jpg",
      text: "",
      service: "Mining Industry",
    },
    {
      imagePath: "/assets/chemical.png",
      text: "",
      service: "Chemical Industry",
    },
    {
      imagePath: "/assets/electronics.png",
      text: "",
      service: "Electronics Industry",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center py-6 ">
        <div className="flex flex-row items-start justify-center fixed top-5 z-50 mx-auto backdrop-blur-lg bg-slate-400 bg-opacity-40 w-full md:px-24">
          <button
            className="lg:text-6xl text-5xl hover:text-red-600 lg:px-8 pl-4 lg:visible text-white"
            onClick={() => {
              if (prevRoute === "/") {
                navigate("/");

                window.scrollTo(0, 0);
              } else {
                navigate(-1);
              }
            }}
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
            INDUSTRIAL CLEANING
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

export default Industrial;
