import React from "react";
import { forwardRef } from "react";

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
          <div className="flex flex-col mt-9">
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
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
