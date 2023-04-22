import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

// import deep_cleaning from "../css_assets/deep_cleaning.png";

const Commercial = ({ prevRoute }) => {
  let navigate = useNavigate();
  const residentService = [
    {
      imagePath: "/assets/office_deep_cleaning.jpeg",
      text: "",
      service: "Office Deep Cleaning Service",
    },
    {
      imagePath: "/assets/Shopping_Mall_Cleaning.png",
      text: "",
      service: "Shopping Mall Cleaning Service",
    },
    {
      imagePath: "/assets/facility_management_service.jpg",
      text: "",
      service: "Facility Management",
    },
    {
      imagePath: "/assets/housekeeping_service.jpeg",
      text: "",
      service: "Housekeeping Service",
    },
    {
      imagePath: "/assets/jet_pressure.jpg",
      text: "",
      service: "Jet Pressure Cleaning Service",
    },
    {
      imagePath: "/assets/glass_cleaning.jpg",
      text: "",
      service: "Facade Glass Cleaning Service",
    },
    {
      imagePath: "/assets/hospital.png",
      text: "",
      service: "Hospital Cleaning Service",
    },
    {
      imagePath: "/assets/appartment.png",
      text: "",
      service: "Apartments Cleaning Service",
    },
    {
      imagePath: "/assets/school.png",
      text: "",
      service: "School Cleaning Service",
    },
    {
      imagePath: "/assets/hotel.png",
      text: "",
      service: "Hotel Cleaning Service",
    },
    {
      imagePath: "/assets/vaccation.png",
      text: "",
      service: "Vaccation Home Cleaning Service",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center py-6 relative">
        <div className="flex flex-row items-start justify-center mx-auto  md:px-24 fixed top-5 z-50 backdrop-blur-lg bg-slate-400 bg-opacity-40 w-full">
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
