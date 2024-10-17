import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between">
          <div className="collapse navbar-collapse">
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
