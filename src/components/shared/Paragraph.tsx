import React from "react";
interface IParagraph {
  text: string;
}
const Paragraph = ({ text }: IParagraph) => {
  return (
    <>
      <p className="text-center">{text}</p>
    </>
  );
};
export default Paragraph;
