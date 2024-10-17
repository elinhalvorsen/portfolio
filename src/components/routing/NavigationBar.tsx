import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid justify-content-between">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/portfolio"}>
                  Hjem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"projects"}>
                  Prosjekter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"aboutMe"}>
                  Om meg
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
