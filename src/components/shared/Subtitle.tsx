import React from "react";
interface ISubtitle {
  title: string;
}
const Subtitle = ({ title }: ISubtitle) => {
  return (
    <section className="row">
      <article>
        <h2 className="text-center mt-3">{title}</h2>
      </article>
    </section>
  );
};
export default Subtitle;
