import React from "react";
interface IActionButtons {
  actionTab: number;
  setActionTab: (tabIndex: number) => void;
}
const ActionButtons = ({ actionTab, setActionTab }: IActionButtons) => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-5 col-sm-12">
      <button
        onClick={() => {
          setActionTab(0);
        }}
        className={`btn btn-${actionTab === 0 ? "white" : "dark"}`}
      >
        Om meg
      </button>
      <button
        onClick={() => {
          setActionTab(1);
        }}
        className={`btn btn-${actionTab === 1 ? "white" : "dark"}`}
      >
        Prosjekter
      </button>
      <button
        onClick={() => {
          setActionTab(2);
        }}
        className={`btn btn-${actionTab === 2 ? "white" : "dark"}`}
      >
        Kontakt
      </button>
    </div>
  );
};
export default ActionButtons;
