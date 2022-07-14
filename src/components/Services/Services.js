import { forwardRef } from "react";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import "./Services.css";
import residential from "../css_assets/residential.png";
import commercial from "../css_assets/commercial.png";
import industrial from "../css_assets/industrial.png";

const services = [
  {
    imagePath: residential,
    text: (
      <>
        <span className="font-bold text-highlight">Residential Cleaning</span>{" "}
      </>
    ),
    navigator: "/residential",
  },
  {
    imagePath: commercial,
    text: (
      <>
        <span className="font-bold text-highlight">Commercial Cleaning</span>
      </>
    ),
    navigator: "/commercial",
  },
  {
    imagePath: industrial,
    text: (
      <>
        <span className="font-bold text-highlight">Industrial Cleaning</span>
      </>
    ),
    navigator: "/industrial",
  },
  // {
  //   imagePath: "/assets/certificate.svg",
  //   text: (
  //     <>
  //       Earn <span className="font-bold text-highlight">Certificates</span> to
  //       by attending seminars and events
  //     </>
  //   ),
  // },
  // {
  //   imagePath: "/assets/live-audience.svg",
  //   text: (
  //     <>
  //       <span className="font-bold text-highlight">Hands-on workshops</span> on
  //       different domains conducted by domain experts
  //     </>
  //   ),
  // },
];

const Services = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="services-container" className="pb-10 pt-32">
      <h1
        data-aos="fade-down"
        className="
        text-white underline text-center text-5xl
        lg:text-6xl uppercase glow font-titleBold
        "
      >
        services
      </h1>

      <div className="flex flex-wrap max-w-7xl mx-auto gap-8 justify-center px-4 justify-items-center md:px-24 mt-24">
        {services.map((feature, index) => (
          <FeaturesItem
            key={index}
            imagePath={feature.imagePath}
            text={feature.text}
            navigator={feature.navigator}
          />
        ))}
      </div>
    </section>
  );
});

export default Services;
