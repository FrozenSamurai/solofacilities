import React from "react";
import { forwardRef } from "react";
import { GoLocation } from "react-icons/go";

const Contact = forwardRef((_, ref) => {
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

          {/* <div className="flex flex-col mt-9">
            <p className="text-black text-center font-bold text-xl">
              Mumbai, Thane, Navi-mumbai
            </p>
            <p className="text-black text-center text-xl" onClick={() => {}}>
              <span>&#128222; : </span>+91-9888888888
            </p>
            <p className="text-black text-center text-xl">
              <span>&#9993; : </span>rajjdhv2001@gmail.com
            </p>
            <p>ADDRESS : </p>
          </div> */}
        </div>
      </div>
    </section>
  );
});

export default Contact;
