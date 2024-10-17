import React from "react";
interface IActionButtons {
  actionTab: number;
  setActionTab: (tabIndex: number) => void;
}
const ActionButtons = ({ actionTab, setActionTab }: IActionButtons) => {
  return (
    <div className="d-flex justify-content-center gap-2">
      <button
        onClick={() => {
          setActionTab(0);
        }}
        className={`btn btn-${actionTab === 0 ? "danger" : "light"}`}
      >
        Om meg
      </button>
      <button
        onClick={() => {
          setActionTab(1);
        }}
        className={`btn btn-${actionTab === 1 ? "danger" : "light"}`}
      >
        Prosjekter
      </button>
      <button
        onClick={() => {
          setActionTab(2);
        }}
        className={`btn btn-${actionTab === 2 ? "danger" : "light"}`}
      >
        Kontakt
      </button>
    </div>
  );
};
export default ActionButtons;
