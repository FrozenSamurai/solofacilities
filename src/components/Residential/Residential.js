import React from "react";

import ServiceCard from "../ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

// import deep_cleaning from "../css_assets/deep_cleaning.png";

const Residential = ({ prevRoute }) => {
  let navigate = useNavigate();
  const residentService = [
    {
      imagePath: "/assets/deep_cleaning.png",
      text: `Kitchen Deep Cleaning
-Bathroom Deep Cleaning
-Livingroom & Bedroom Deep 
  Cleaning
-Floor Cleaning
-Hard to reach spots 
     Cleaning

Available in Two Packages
-Furnished Homes
-Unfurnished Homes`,
      service: "Home Deep Cleaning Service",
    },
    {
      imagePath: "/assets/kitchen_cleaning.png",
      text: "Deep cleaning of kitchen slabs, walls, tiles, floor, sink -Thorough cleaning of Windows, Fridge and Microwave exteriors.",
      service: "Kitchen Cleaning Service",
    },
    {
      imagePath: "/assets/bathroom_cleaning.png",
      text: "Dirt and black stains remove for from topilet pot, tiles, floor, basin, etc. -Book the service every month for a clean spotless and hygienic restrooms",
      service: "Bathroom Cleaning Service",
    },
    {
      imagePath: "/assets/sofa_cleaning.png",
      text: "Dry vacuuming to remove crumbs and dirt particles. -Wet shampooing and vacuuming to remove tough stains and spillages.",
      service: "Sofa Cleaning Service",
    },
    {
      imagePath: "/assets/chair_cleaning.png",
      text: "Dry vacuuming to remove crumbs and dirt particles. -Wet shampooing and vacuuming to remove tough stains and spillages.",
      service: "Chair Cleaning Service",
    },
    {
      imagePath: "/assets/carpet_cleaning.png",
      text: "Dry vacuuming to remove crumbs and dirt particles. -Wet shampooing and vacuuming to remove tough stains and spillages.",
      service: "Carpet Cleaning Service",
    },
    {
      imagePath: "/assets/matress_cleaning.png",
      text: "Deep cleaning of one Single/Double bed mattress on both sides. -Dry vacuuming, shampooing, wet vacuuming for stain removal.",
      service: "Mattress Cleaning Service",
    },
    {
      imagePath: "/assets/curtain_cleaning.png",
      text: "Dry vacuuming to remove crumbs and dirt particles. -Wet shampooing and vacuuming to remove tough stains and spillages.",
      service: "Curtain Cleaning Service",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center py-6 ">
        <div className="flex flex-row items-start justify-center mx-auto fixed top-5 z-50 backdrop-blur-lg bg-slate-400 bg-opacity-40 w-full md:px-24">
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
            RESIDENTIAL CLEANING
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

export default Residential;
