import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../css_assets/solo_facilities.png";
import { GoLocation } from "react-icons/go";
import { FaMailBulk } from "react-icons/fa";

// import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  let [consumerno, setConsumerno] = useState("");
  return (
    <footer className="bg-black text-white">
      <div className="md:flex md:justify-between items-center md:items-center sm:px-4 bg-[#ffffff19] px-3 py-4">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#ec2F4B] mr-2">Hey</span>Connect with us
        </h1>
        <div>
          <input
            type="number"
            placeholder="Enter your mobile no."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-2 lg:mb-0 mb-4 py-2.5 rounded-md px-2 focus-outline-none"
            onChange={(e) => {
              setConsumerno(e.target.value);
            }}
            onWheel={(e) => e.target.blur()}
          />
          <a
            className="bg-[#ec2F4B] capitalize hover:bg-emerald-50 hover:text-slate-900 duration-300 px-5 py-3.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
            target={"_blank"}
            rel="noopener noreferrer"
            href={`mailto:info@solofacilities.com?subject=Enquiry From Website&body=Hi, please Call me on ${consumerno}`}
          >
            contact me
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center justify-between md:px-10 px-5 md:mx-32">
        <div className="flex justify-center items-center">
          <Link to="landing-container" smooth={true}>
            <img
              src={logo}
              alt="logo"
              style={{ width: window.innerWidth < 490 ? 250 : 350 }}
            />
          </Link>
        </div>
        <div className="flex flex-row gap-11 sm:px-8 px-5 ">
          <Link
            to="overview-container"
            smooth={true}
            className="cursor-pointer"
          >
            <span className="mb-1 font-semibold uppercase hover:text-blue-400 text-sm lg:text-xl">
              about
            </span>
          </Link>
          <Link
            to="services-container"
            smooth={true}
            className="cursor-pointer"
          >
            <span className="mb-1 font-semibold uppercase hover:text-blue-400 text-sm lg:text-xl">
              services
            </span>
          </Link>
          <Link to="clients-container" smooth={true} className="cursor-pointer">
            <span className="mb-1 font-semibold uppercase hover:text-blue-400 text-sm lg:text-xl">
              clients
            </span>
          </Link>
          <Link to="contact-container" smooth={true} className="cursor-pointer">
            <span className="mb-1 font-semibold uppercase hover:text-blue-400 text-sm lg:text-xl">
              contact
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <h1 className="text-[#ec2F4B] font-bold text-xl md:text-2xl">
            CONTACT US
          </h1>
          <a
            className="flex flex-col capitalize items-center justify-center text-center hover:text-amber-400"
            href="https://goo.gl/maps/Vf8vCF9wjUJgUfeE6"
            target={"_blank"}
            rel="noopener noreferrer"
            title="Geolocation"
          >
            <GoLocation size={25} />
            Shop no. 1 matoshree sadan, opp. gavdevi mandir, Nandivali tekdi,
            Dombivli East, Maharashtra 421201
          </a>
          <hr class="border-gray-100 md:my-2 md:px-32 px-16"></hr>
          <h1 className="text-sm">Customer Care 24x7 Helpline</h1>
          <a
            className="flex flex-row items-center justify-center text-center hover:text-amber-400"
            href="tel:+919082296202"
          >
            <span className="text-gray-600 ">&#128222; :</span>
            +91-7777 050 819
          </a>
        </div>
        <div className="p-3 w-full">
          <a
            className="flex flex-row items-center justify-center text-center text-xs animate-pulse hover:text-red-500"
            href="mailto:rajjdhv2001@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
            title="Website Developer Email"
          >
            <FaMailBulk /> Contact the Developer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
