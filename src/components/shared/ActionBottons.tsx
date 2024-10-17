import React from "react";
interface IActionButtons {
  actionTab: number;
  setActionTab: (tabIndex: number) => void;
}
const ActionButtons = () => {
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn">Om meg</button>
      <button className="btn btn">Prosjekter</button>
      <button className="btn btn">Kontakt</button>
    </div>
  );
};
export default ActionButtons;
