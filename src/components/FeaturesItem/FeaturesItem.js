import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturesItem.css";

function FeaturesItem({ imagePath, text, navigator }) {
  const navigate = useNavigate();
  return (
    <div
      data-aos="flip-left"
      className="items-center features-item rounded-lg shadow-2xl flex flex-col justify-center text-center px-3 py-6 bg-slate-200 hover:bg-white"
      style={{
        width: 300,
        outline: "1px solid #273b71",
        boxShadow: "0px 10px 15px 0px rgb(0 0 0 / 40%)",
      }}
      onClick={() => {
        navigate(navigator);
        window.scrollTo(0, 0);
      }}
    >
      <img src={imagePath} style={{ maxWidth: 150 }} alt="feature icon" />
      <p className="text-gray-400 text-sm pt-4">{text}</p>
    </div>
  );
}

export default FeaturesItem;
