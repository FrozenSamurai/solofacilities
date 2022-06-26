import { useEffect } from "react";
import "./Splash.css";
import logo from "../css_assets/solo_facilities.png";

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector("#quote-container").style.display = "none";
      document.body.style.overflowY = "hidden";
      document.querySelector("html").style.overflowY = "auto";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="quote-container"
      style={{
        fontFamily: "'Yuji Syuku', serif",
        zIndex: 999,
        background: `linear-gradient(
            180deg,
            #120015 5%,
            rgb(138, 66, 255) 25.6%,
            #ff9def 101.93%
        )`,
      }}
      className="top-0 left-0 fixed w-full h-full z-50 flex items-center text-sm sm:text-base md:text-lg pl-11 md:justify-center flex-row"
    >
      {/* <img
        src={"/dmce-logo.png"}
        alt="logo"
        className="h-auto mb-12"
        style={{ width: "80vmin" }}
      /> */}
      <img
        src={logo}
        alt="logo"
        className="h-auto "
        style={{ width: "80vmin" }}
      />
    </div>
  );
};

export default Splash;
