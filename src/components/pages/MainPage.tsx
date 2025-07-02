import React, { useState } from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import Image from "../routing/Image";

const MainPage = () => {
  return (
    <>
      <Subtitle title={"Hvem er jeg?"} />
      <div id="carder" className="card mb-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/portfolio/elin-me.png"
              id="elin-me-image"
              className="img-fluid rounded-start"
              alt="Bilde av figur"
            />
          </div>
          <div className="col-md-8">
            <div className=" card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">hei</p>
              <p className="card-text">hei</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Om meg kort</h2>

      <Paragraph
        text={
          "Jeg er en 25 år gammel jente, med bachelor i informasjonsteknologi med fordypning i interaktiv design."
        }
      />
      <Image />
    </>
  );
};
export default MainPage;
