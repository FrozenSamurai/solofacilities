import React from "react";
import logo from "../css_assets/solo_facilities.png";
import "./Welcome.css";
import { forwardRef } from "react";
// import design from "../css_assets/design.png";

const Welcome = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="landing-container" className="">
      <div>
        <div className="container mx-auto pt-28 px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 px-4">
              <div
                style={{
                  textShadow:
                    "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                  lineHeight: "80px",
                }}
                className="flex flex-col items-center"
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: 530 }}
                  id="logoImage"
                  className="mb-4 "
                />
                <h1 className="text-center text-black text-4xl font-sora font-semibold">
                  Welcome to Solo Facilities
                </h1>
                <p className="text-center text-black text-xl font-sora font-semibold">
                  We are a small, family owned business that specializes in
                  providing the best cleaning services in the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cleaners" className="bottom-0 h-10" style={{ zIndex: -1 }}></div>
    </section>
  );
});

export default Welcome;
