import React from "react";

interface IContentBox {
  title: string;
  text?: React.ReactNode; // Tillater å bruke JSX i stedet for bare tekst
}

const ContentBox = ({ title, text }: IContentBox) => {
  return (
    <article className="d-flex align-content-center row bg-white shadow rounded mt-2 w-75 p-3 mx-auto">
      <h3>{title}</h3>
      {text && <div>{text}</div>} {/* Bruker div for å omslutte teksten */}
    </article>
  );
};

export default ContentBox;
