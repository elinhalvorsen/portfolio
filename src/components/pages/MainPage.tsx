import React from "react";
import MainHeading from "../shared/MainHeading";
import ActionButtons from "../shared/ActionBottons";
import Subtitle from "../shared/Subtitle";
const MainPage = () => {
  return (
    <>
      <MainHeading title={"PORTEFØLJE"} />
      <h2>Elin Halvorsen</h2>
      <p>Her er min portefølje</p>
      <ActionButtons />
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
