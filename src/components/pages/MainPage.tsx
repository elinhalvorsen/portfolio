import React, { useState } from "react";
import MainHeading from "../shared/MainHeading";
import ActionButtons from "../shared/ActionBottons";
import Subtitle from "../shared/Subtitle";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
const MainPage = () => {
  const [actionTabPage, setActionTabPage] = useState(0);

  return (
    <>
      <MainHeading title={"PORTEFØLJE"} text="Av Elin Halvorsen" />
      <h2>Elin Halvorsen</h2>
      <p>Her er min portefølje</p>
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
      <Subtitle title="Her finner dere ulike prosjekter" />
      <img
        id="elin-me-image"
        src="/portfolio/elin-me.png"
        alt="Bilde av figur"
      />
    </>
  );
};
export default MainPage;
