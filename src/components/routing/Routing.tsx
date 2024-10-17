import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NavigationBar from "./NavigationBar";
const Routing = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container">
        <main>
          <Routes>
            <Route path="/portfolio" element={<MainPage />}></Route>
            <Route path="Kontakt"></Route>
            <Route path="Prosjekter"></Route>
            <Route path="Om meg"></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
export default Routing;
