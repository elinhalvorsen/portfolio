import React, { useState } from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";

const MainPage = () => {
  return (
    <>
      <Subtitle title={"Hvem er jeg?"} />
      <Paragraph
        text={
          "Jeg er en 25 år gammel jente, med bachelor i informasjonsteknologi med fordypning i interaktiv design."
        }
      />
    </>
  );
};
export default MainPage;
