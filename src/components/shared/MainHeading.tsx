import React from "react";

interface IMainHeadning {
  title: string;
  text: string;
}
const MainHeading = ({ title, text }: IMainHeadning) => {
  return (
    <section
      className="row border border-dark mt-2 text-white"
      id="border-heading"
    >
      <article className="text-center mt-3">
        <h1>{title}</h1>
        <p>{text}</p>
      </article>
    </section>
  );
};
export default MainHeading;
