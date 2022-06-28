import React from "react";
import { forwardRef } from "react";
import { GoLocation } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Contact = forwardRef((_, ref) => {

  let iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    
    <section ref={ref} id="contact-container" className="pt-28 pb-10">
      <div className="flex flex-row justify-around">
        <div>
          <h1
            data-aos="fade-down"
            className="
        text-black text-5xl text-center
        lg:text-6xl uppercase glow font-titleBold
        "
          >
            CONTACT US
          </h1>
          <br />

          <div
            className={
              window.innerWidth < 490
                ? "grid grid-rows-4 divide-y-4"
                : "grid grid-cols-2 divide-x-4"
            }
          >
            <div className="text-center text-3xl px-4">
              Mumbai
              <h1 className="text-sm">Mumbai, Thane, Navi-mumbai</h1>
              <div className="w-auto shadow-xl flex-col p-4 my-4 rounded-lg">
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
                >
                  <p
                    className="text-black text-center text-xl"
                    onClick={() => {}}
                  >
                    <span>&#128222; : </span>+91-9888888888
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
                >
                  <p
                    className="text-black text-center text-xl"
                    onClick={() => {}}
                  >
                    <span>&#9993; : </span>rajjdhv2001@gmail.com
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
                >
                  <p className="text-lg  items-center text-center flex flex-col">
                    <GoLocation size={25} /> Mohan Regency, adharwadi,kalyan(w)
                  </p>
                </div>
              </div>
            </div>
            <div className=" text-3xl text-center">
              Pune
              <h1 className="text-sm">Mumbai, Thane, Navi-mumbai</h1>
              <div className="w-auto shadow-xl flex-col p-4 my-4 mx-4 rounded-lg">
                <div
                  data-aos="fade-left"
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
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
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
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
                  className="w-full shadow-xl flex-col p-4 my-4 rounded-lg"
                >
                  <p className="text-lg  items-center text-center flex flex-col">
                    <GoLocation size={25} /> Mohan Regency, adharwadi,kalyan(w)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SocialMedia */}
          <div className="flex flex-row items-center justify-center  py-2">
            <span className="p-3  cursor-pointer inline-flex items-center rounded-full bg-[#ec2F4B] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#9450f2] duration-300">
              <AiFillInstagram size={30} style={iconStyles}/>
            </span>
            <span className="p-3  cursor-pointer inline-flex items-center rounded-full bg-[#ec2F4B] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#9450f2] duration-300">
              <AiOutlineTwitter size={30} style={iconStyles}/>
            </span>
            <span className="p-3  cursor-pointer inline-flex items-center rounded-full bg-[#ec2F4B] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#9450f2] duration-300">
              <BsFacebook size={30} style={iconStyles} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
