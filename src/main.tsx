import React from "react";
import ReactDom from "react-dom/client";
import MainPage from "./components/pages/MainPage";
import "./main.css";
import "bootstrap/dist/js/bootstrap";
ReactDom.createRoot(document.getElementById("root")!).render(<MainPage />);
