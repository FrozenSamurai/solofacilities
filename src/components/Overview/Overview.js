import React, { forwardRef } from "react";
// import Mascot from "../Mascot/Mascot";
import "./Overview.css";
import Slideshow from "../Slideshow/Slideshow";

const Overview = forwardRef(({ location }, ref) => {
  return (
    <section ref={ref} id="overview-container" className="flex items-center">
      <div className="px-4 pt-0 w-full sm:px-6 md:px-12 lg:pt-24">
        <div className="flex lg:justify-around flex-col lg:flex-row items-center w-full">
          <h1
            className={`glow mb-3 block lg:hidden mt-5 text-black mx-auto
                lg:mx-0 text-4xl lg:text-5xl 
              `}
            style={{
              textShadow:
                "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
              lineHeight: "80px",
            }}
          >
            OVERVIEW
          </h1>
          <div
            className="relative"
            style={{
              height: window.innerWidth < 480 ? 320 : 100,
              maxWidth: 400,
            }}
          >
            {/* <Mascot location={location} /> */}
            <Slideshow />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="
            flex flex-col items-center text-center lg:text-center 
            max-w-2xl sm:max-w-2xl lg:max-w-lg 2xl:max-w-screen-xl items-start 
            lg:mb-16 ml-0 lg:ml-4"
          >
            <h1
              className={` mt-24 hidden mb-8 lg:block text-black mx-auto text-center lg:text-center
                lg:mx-0 text-4xl lg:text-5xl 
              `}
              style={{
                textShadow:
                  "0px 0px 5.53871px rgba(49, 181, 255, 0.26), 0px 0px 21.4421px rgba(49, 156, 255, 0.5)",
                lineHeight: "80px",
              }}
            >
              OVERVIEW
            </h1>
            <p className="mb-3 font-sora mt-32  lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-slate-800">
              Our business of providing cleaning services to all sectors. We
              work on formal agreements and contracts with the companies and
              residential administration. We also provide our services to the
              local government where they need cleaning services or more
              workforces for long and short terms depending on the necessity.
              <br />
              <br />
              We necessitate our working policy with quality services,
              professional staff, and a strong team built with proper training
              sessions. Before sending a team for a specific service, we take
              some time for their training and appropriate grounding and
              tutoring over professional behaviours and codes of conduct to keep
              in view.
            </p>
            {/* <p className="mb-3 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              GameUp will empower already established games to come on
              blockchain directly through our API and rewards system.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
});

const A = ({ children, b }) => (
  <span className={`text-highlight ${b && "font-bold"}`}>{children}</span>
);

export default Overview;
