import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import MainHeading from "../shared/MainHeading";
import ActionButtons from "../shared/ActionBottons";
import Subtitle from "../shared/Subtitle";
const Routing = () => {
  const [actionTabPage, setActionTabPage] = useState(0);
  return (
    <div className="container">
      <MainHeading title={"PORTEFØLJE"} text="Av Elin Halvorsen" />
      <ActionButtons
        actionTab={actionTabPage}
        setActionTab={setActionTabPage}
      />
      {actionTabPage === 0 ? (
        <MainPage />
      ) : actionTabPage === 1 ? (
        <Projects />
      ) : actionTabPage === 2 ? (
        <AboutMe />
      ) : null}
      <img
        id="elin-me-image"
        src="/portfolio/elin-me.png"
        alt="Bilde av figur"
      />
    </div>
  );
};
export default Routing;
