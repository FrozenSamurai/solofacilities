import React from "react";
import { forwardRef } from "react";
import { GoLocation } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = forwardRef((_, ref) => {
  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <section ref={ref} id="contact-container" className="pt-28 pb-10">
      <div className=" flex flex-row justify-around">
        <div>
          <h1
            data-aos="fade-down"
            className="
        text-white text-5xl text-center
        lg:text-5xl capitalize glow font-titleBold 
        "
          >
            One call cleans it all
          </h1>
          <br />

          <div
            className={
              window.innerWidth < 490
                ? "grid grid-rows-2 divide-y-4"
                : "grid grid-cols-2 divide-x-4"
            }
          >
            <div className=" text-center text-3xl px-4 mt-4">
              <div className=" w-full border-2 rounded-md bg-opacity-70 bg-white">
                Mumbai
                <h1 className="text-sm">Mumbai, Thane, Navi-mumbai</h1>
              </div>
              <div className="w-auto shadow-2xl border-4 bg-opacity-70 bg-white flex-col p-4 my-4 rounded-lg">
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4  rounded-lg bg-white"
                >
                  <p
                    className="text-black text-center text-xl"
                    onClick={() => {}}
                  >
                    <span>&#128222; : </span>+91-9082296202
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg bg-white"
                >
                  <a
                    className="text-black text-center text-xl"
                    href="mailto:info@solofacilities.com"
                  >
                    <span>&#9993; : </span>info@solofacilities.com
                  </a>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg bg-white"
                >
                  <a
                    className="text-lg  items-center text-center flex flex-col"
                    href="https://goo.gl/maps/Vf8vCF9wjUJgUfeE6"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <GoLocation size={25} /> Shop No. 1 Matoshree Sadan, Opp.
                    Gavdevi Mandir, Nandivali Tekdi, Dombivli East, Maharashtra
                    421201
                  </a>
                </div>
              </div>
            </div>
            <div className=" text-3xl text-center mt-4">
              <div className="w-full mr-4 border-2 rounded-md bg-opacity-70 bg-white">
                Pune
                <h1 className="text-sm">Mumbai, Thane, Navi-mumbai</h1>
              </div>
              <div className="bg-opacity-70 bg-white w-auto shadow-xl flex-col p-4 my-4 mx-4 rounded-lg">
                <div
                  data-aos="fade-left"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg bg-white"
                >
                  <p
                    className="text-black text-center text-xl "
                    onClick={() => {}}
                  >
                    <span>&#128222; : </span>+91-9888888888
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg bg-white"
                >
                  <p
                    className="text-black text-center text-xl"
                    onClick={() => {}}
                  >
                    <span>&#9993; : </span>rajjdhv2001@gmail.com
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg bg-white"
                >
                  <p className="text-lg  items-center text-center flex flex-col">
                    <GoLocation size={25} /> Mohan Regency, adharwadi,kalyan(w)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SocialMedia */}
          <div className=" flex flex-row items-center justify-center  py-2">
            <a
              href="https://instagram.com/solofacilities.official?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mt-4 cursor-pointer inline-flex items-center rounded-full bg-[#000000] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#fb3958] duration-300"
              title="Instagram"
            >
              <AiFillInstagram size={30} style={iconStyles} />
            </a>
            <a
              href="https://twitter.com/FacilitiesSolo  "
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mt-4  cursor-pointer inline-flex items-center rounded-full bg-[#000000] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#1DA1F2] duration-300"
              title="Twitter"
            >
              <AiOutlineTwitter size={30} style={iconStyles} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071608246198"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mt-4  cursor-pointer inline-flex items-center rounded-full bg-[#000000] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#4267B2] duration-300"
              title="Facebook"
            >
              <BsFacebook size={30} style={iconStyles} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrV114rSAbuYjgCHiyufGDg/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mt-4  cursor-pointer inline-flex items-center rounded-full bg-[#000000] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#ff0000] duration-300"
              title="Youtube"
            >
              <FaYoutube size={30} style={iconStyles} />
            </a>
            <a
              href="https://www.linkedin.com/in/solo-facilities-3731a321a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 mt-4  cursor-pointer inline-flex items-center rounded-full bg-[#000000] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#0072b1] duration-300"
              title="Linkedin"
            >
              <FaLinkedin size={30} style={iconStyles} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
