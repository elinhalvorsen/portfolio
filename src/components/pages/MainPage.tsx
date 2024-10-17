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
      <h1>hei</h1>
      <p>Her kommer tekst om meg</p>
    </>
  );
};
export default MainPage;
