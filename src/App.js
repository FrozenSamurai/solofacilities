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

import React from "react";

// className="bg-cleaning_image h-screen bg-cover bg-center bg-blur-sm bg-fixed"
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainApp />} />
      <Route path="/residential" element={<Residential />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/industrial" element={<Industrial />} />
    </Routes>
  );
}

const MainApp = () => {
  return (
    <>
      <Splash />
      <NavBar />
      <div className="h-screen">
        <Welcome />
      </div>
      <Overview />
      <Services />
      <Clients />
      <Team />
    </>
  );
};
export default App;
