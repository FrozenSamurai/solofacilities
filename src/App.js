import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import Overview from "./components/Overview/Overview";
import Splash from "./components/Splash/Splash";
import Services from "./components/Services/Services";
import { Route, Routes } from "react-router-dom";
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

// className="bg-cleaning_image h-screen bg-cover bg-center bg-blur-sm bg-fixed"
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
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
          href="https://wa.me/919082296202?text=Hello%2C%20I%20found%20you%20on%20SOLO%20FACILITIES%20WEBSITE.........  "
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
          <Route exact path="/" element={<MainApp />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
        </Routes>
      </div>
    </div>
  );
}

const MainApp = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen bg-white">
        <Welcome />
      </div>
      <Overview />
      <Services />
      <Clients />
      <OurNumbers />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
