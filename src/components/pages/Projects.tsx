import React from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import ContentBox from "../shared/ContentBox";
const Projects = () => {
  return (
    <div>
      <Subtitle title="Prosjekter" />
      <Paragraph
        text={"Dette er noen av prosjektene jeg har hatt gjennom studiet"}
      />
      <ContentBox
        title={"Webutvikling"}
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
        title={"Bachelorprosjekt"}
        text={
          <a
            href="https://www.figma.com/design/b69HSy6ZQFr8CTNuZ6BQsu/Gruppe25-2025-Statenspensjonskasse?node-id=206-1733&t=yLuIii5s0foFKx0Q-1"
            target="_blank"
          >
            Figma Prototype
          </a>
        }
      />
      <ContentBox
        title={"Kartbaserte Websystemer"}
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
        title={"Designprosjekt"}
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
