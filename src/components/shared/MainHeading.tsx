import React from "react";

interface IMainHeadning {
  title: string;
}
const MainHeading = ({ title }: IMainHeadning) => {
  return (
    <section className="row">
      <article>
        <h1 className="text-center mt-3">{title}</h1>
        <hr />
      </article>
    </section>
  );
};
export default MainHeading;
