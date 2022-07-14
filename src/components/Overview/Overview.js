import React, { forwardRef } from "react";
import Mascot from "../Mascot/Mascot";
import "./Overview.css";
import Slideshow from "../Slideshow/Slideshow";
// import Mascot from "../Mascot/Mascot";

const Overview = forwardRef(({ location }, ref) => {
  return (
    <section ref={ref} id="overview-container" className="flex  items-start">
      <div className="px-4 pt-0 w-full sm:px-6 md:px-12 lg:pt-0">
        <div className="flex lg:justify-center flex-col lg:flex-row items-center w-full">
          <h1
            className={`glow mb-3 block lg:hidden text-white underline mx-auto
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
            data-aos="fade-right"
            className="flex flex-col items-start justify-start h-full mt-36"
            style={{
              // height: window.innerWidth < 480 ? 320 : 100,
              width: 600,
              height: 600,
            }}
          >
            <Mascot location={location} />
            {/* <Slideshow /> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              className="
            flex flex-col  text-center lg:text-center 
            max-w-2xl sm:max-w-2xl lg:max-w-lg 2xl:max-w-screen-xl items-center 
            lg:mb-16 ml-0 lg:ml-4"
            >
              <h1
                className={` hidden mb-8 lg:block text-white underline mx-auto text-center lg:text-center
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
              <p className="mb-3 font-sora mt-16  lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-slate-800">
                Our business of providing cleaning services to all sectors. We
                work on formal agreements and contracts with the companies and
                residential administration. We also provide our services to the
                local government where they need cleaning services or more
                workforces for long and short terms depending on the necessity.
                <br />
                <br />
                <A>
                  We necessitate our working policy with quality services,
                  professional staff, and a strong team built with proper
                  training sessions. Before sending a team for a specific
                  service, we take some time for their training and appropriate
                  grounding and tutoring over professional behaviours and codes
                  of conduct to keep in view.
                </A>
              </p>

              {/* <p className="mb-3 lg:mt-0 text-sm md:text-xl leading-relaxed text-left text-gray-300">
              GameUp will empower already established games to come on
              blockchain directly through our API and rewards system.
            </p> */}
            </div>
            <a
              href="https://www.irjet.net/archives/V9/i5/IRJET-V9I501.pdf"
              target={"_blank"}
              rel="noopener noreferrer"
              data-aos="zoom-in"
              className="text-blue-500 hover:text-blue-800 border-4 rounded-md py-2 px-4 border-blue-500 hover:border-blue-700 hover:bg-gray-100 bg-opacity-70 mt-4 md:mt-0 bg-white"
            >
              View/Download Company Profile here
            </a>
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
