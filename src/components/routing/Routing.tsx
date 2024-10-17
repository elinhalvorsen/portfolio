import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NavigationBar from "./NavigationBar";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
const Routing = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container">
        <main>
          <Routes>
            <Route path="/portfolio" element={<MainPage />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="aboutMe" element={<AboutMe />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
export default Routing;
