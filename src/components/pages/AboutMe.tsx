import React from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import ContentBox from "../shared/ContentBox";
const AboutMe = () => {
  return (
    <>
      <Subtitle title={"Sosiale Medier"} />
      <Paragraph text={"Tekst kommer..."} />
      <ContentBox
        title={"LinkedIn"}
        text={
          <a
            href="https://www.linkedin.com/in/elin-halvorsen-6b387b205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elin Halvorsen
          </a>
        }
      />
    </>
  );
};
export default AboutMe;
