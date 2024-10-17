import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" id="navbar-color">
        <div className="container-fluid justify-content-between">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/portfolio"}>
                  Hjem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/portfolio/projects"}>
                  Prosjekter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/portfolio/aboutMe"}>
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
