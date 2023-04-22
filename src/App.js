import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import Overview from "./components/Overview/Overview";
import Splash from "./components/Splash/Splash";
import Services from "./components/Services/Services";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Residential from "./components/Residential/Residential";
import Commercial from "./components/Commercial/Commercial";
import Industrial from "./components/Industrial/Industrial";
import Clients from "./components/Clients/Clients";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import React from "react";
import OurNumbers from "./components/OurNumbers/OurNumbers";
import { useEffect } from "react";
import OverviewPg from "./components/OverviewPg.js/OverviewPg";
import ServicesPg from "./components/ServicesPg.js/ServicesPg";
import ClientsPg from "./components/ClientsPg/ClientsPg";
import TeamPg from "./components/TeamPg/TeamPg";
import ContactPg from "./components/ContactPg/ContactPg";
import Mascot from "./components/Mascot/Mascot";
import { useState } from "react";

// className="bg-cleaning_image h-screen bg-cover bg-center bg-blur-sm bg-fixed"
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const [prevRoute, setPrevRoute] = useState(null);
  return (
    <div
      className="bg-cleaning_image bg-cover bg-center bg-no-repeat bg-fixed bg-slate-500 bg-opacity-10"
      // style={{ backgroundColor: "rgba(0, 0, 255, 0.4)" }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <a
          // onclick="buttonHandler()"
          href="https://wa.me/917777050817?text=Hello%2C%20I%20found%20you%20on%20SOLO%20FACILITIES%20WEBSITE.........  "
          target={"_blank"}
          rel="noopener noreferrer"
          title="WhatsApp"
          className={
            window.innerWidth < 480
              ? "fixed z-50 bottom-7 right-4 bg-green-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
              : "fixed z-50 bottom-10 right-8 bg-green-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
          }
        >
          <img className="w-fit h-3/4" src="/whatsapp.png" alt="Whatsapp"></img>
        </a>
        <Splash />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainApp prevRoute={prevRoute} setPrevRoute={setPrevRoute} />
            }
          />
          <Route
            path="/residential"
            element={<Residential prevRoute={prevRoute} />}
          />
          <Route
            path="/commercial"
            element={<Commercial prevRoute={prevRoute} />}
          />
          <Route
            path="/industrial"
            element={<Industrial prevRoute={prevRoute} />}
          />
          <Route
            path="/about"
            element={
              <>
                <div className="h-screen bg-white">
                  <NavBar />
                  <OverviewPg />
                </div>
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <div className="h-full min-h-screen  relative bg-white ">
                  <div
                    data-aos="fade-right"
                    className="flex-col items-center justify-center absolute lg:flex hidden -bottom-10 left-0"
                    style={{
                      // height: window.innerWidth < 480 ? 320 : 100,
                      width: 300,
                      height: window.innerWidth < 480 ? 100 : 300,
                    }}
                  >
                    <Mascot location={null} textpos={0} />
                    {/* <Slideshow /> */}
                  </div>
                  <NavBar />
                  <ServicesPg
                    prevRoute={prevRoute}
                    setPrevRoute={setPrevRoute}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/clients"
            element={
              <>
                <div className="md:h-screen relative bg-white">
                  <div
                    data-aos="fade-right"
                    className="flex-col items-center justify-center absolute lg:flex hidden -bottom-10 left-0"
                    style={{
                      // height: window.innerWidth < 480 ? 320 : 100,
                      width: 300,
                      height: window.innerWidth < 480 ? 100 : 300,
                    }}
                  >
                    <Mascot location={null} textpos={5} />
                    {/* <Slideshow /> */}
                  </div>
                  <NavBar />
                  <ClientsPg />
                </div>
              </>
            }
          />
          {/* <Route
            path="/team"
            element={
              <>
                <div className="md:h-screen relative bg-white">
                  <div
                    data-aos="fade-right"
                    className="flex-col items-center justify-center absolute lg:flex hidden top-[40%] bottom-[60%] left-[40%] right-[40%]"
                    style={{
                      // height: window.innerWidth < 480 ? 320 : 100,
                      width: 300,
                      height: window.innerWidth < 480 ? 100 : 300,
                    }}
                  >
                    <Mascot location={null} textpos={0} hidden={true} />
                    //<Slideshow /> 
                  </div>
                  <NavBar />
                  <TeamPg />
                </div>
              </>
            }
          /> */}
          <Route
            path="/contact"
            element={
              <>
                <div className="md:h-screen bg-white">
                  <NavBar />
                  <ContactPg />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

const MainApp = ({ prevRoute, setPrevRoute }) => {
  // const { prevRoute } = useLocation();
  useEffect(() => {
    console.log(prevRoute);
  }, [prevRoute, setPrevRoute]);

  // window.scrollTo(0, 0);
  return (
    <>
      <NavBar />
      <div className="h-screen bg-white" id="welcome">
        <Welcome />
      </div>
      <Overview />
      <Services prevRoute={prevRoute} setPrevRoute={setPrevRoute} />
      <Clients />
      <OurNumbers />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </>
  );
};
export default App;
