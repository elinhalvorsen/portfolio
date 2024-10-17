import React from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import ContentBox from "../shared/ContentBox";
const Projects = () => {
  return (
    <div>
      <Subtitle title="Her finner dere ulike prosjekter" />
      <Paragraph text={"Kommer tekst"} />
      <ContentBox
        title={"Eksamen i Webutvikling"}
        text={
          <a
            href="https://github.com/elinhalvorsen/DS3103_Webutvikling_Eksamen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        }
      />
      <ContentBox
        title={"Eksamen Kartbaserte Websystemer"}
        text={
          <a
            href="https://github.com/elinhalvorsen/KWS2100_Kartbaserte_Websystemer_Eksamen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        }
      />
    </div>
  );
};
export default Projects;
