import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ imagePath, text, service }) => {
  return (
    <div
      //   data-aos="flip-left"
      className="Container"
      style={{
        width: 300,
      }}
    >
      <div className="card mx-auto">
        <div
          className="Back rounded-lg shadow-2xl px-3 py-4 text-gray-50 text-center"
          style={{ backgroundColor: "rgb(236 ,81 ,85)" }}
        >
          <img
            src={imagePath}
            className="w-5/6 h-2/3 ml-auto mr-auto"
            // style={{ maxWidth: 250 }}
            alt="service icon"
          />
          <p className="text-gray-200 pt-4 text-3xl">{service}</p>
        </div>
        <div
          className="Front flex items-center justify-center text-center rounded-lg shadow-2xl px-5 py-6 text-gray-50"
          style={{ backgroundColor: "rgb(29, 56, 107)" }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
