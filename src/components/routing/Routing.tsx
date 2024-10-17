import React, { useState } from "react";
import MainPage from "../pages/MainPage";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import MainHeading from "../shared/MainHeading";
import ActionButtons from "../shared/ActionBottons";
import Image from "./Image";
const Routing = () => {
  const [actionTabPage, setActionTabPage] = useState(0);
  return (
    <div className="container">
      <MainHeading title={"PORTEFØLJE"} text="Av: Elin Halvorsen" />
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
      <Image />
    </div>
  );
};
export default Routing;
