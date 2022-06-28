import React from "react";
import ItemsContainer from "./ItemsContainer";


const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between items-center md:items-center sm:px-4 bg-[#ffffff19] px-3 py-4">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#ec2F4B] mr-2">Hey</span>Connect with us
        </h1>
        <div>
          <input
            type="Text"
            placeholder="Enter your phn.no"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-2 lg:mb-0 mb-4 py-2.5 rounded-md px-2 focus-outline-none"
          />
          <button className="bg-[#ec2F4B] hover:bg-emerald-50 hover:text-slate-900 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            heya
          </button>
        </div>
      </div>
      <ItemsContainer />
      
    </footer>
  );
};

export default Footer;
