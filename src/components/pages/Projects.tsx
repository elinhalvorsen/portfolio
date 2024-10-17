import React from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import ContentBox from "../shared/ContentBox";
const Projects = () => {
  return (
    <div>
      <Subtitle title="Prosjekter" />
      <Paragraph text={"Tekst kommer..."} />
      <ContentBox
        title={"Eksamen Webutvikling"}
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

      <ContentBox
        title={"Eksamen Designprosjekt"}
        text={
          <a
            href="https://www.figma.com/design/bPH9Iw8WCGkhd2K7J13m7w/Design-Prosjekt?node-id=8-2&t=pWB7z2PyTm3arvxF-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma Prototype
          </a>
        }
      />
    </div>
  );
};
export default Projects;
