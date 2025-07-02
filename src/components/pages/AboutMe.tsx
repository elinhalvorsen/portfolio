import React from "react";
import Subtitle from "../shared/Subtitle";
import Paragraph from "../shared/Paragraph";
import ContentBox from "../shared/ContentBox";
const AboutMe = () => {
  return (
    <>
      <Subtitle title={"Sosiale Medier"} />
      <Paragraph
        text={"Ta gjerne kontakt med meg på linkedin eller mail for spørsmål!"}
      />
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
      <ContentBox
        title={"E-postadresse"}
        text={<a>elin_halvorsen99@outlook.com</a>}
      />
    </>
  );
};
export default AboutMe;
