import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Informations, Contact, Gallery, Publish } from "./sites/index.js";
import { Navbar } from "./components/index.js";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <Routes>
        <Route path="" element={<App />} />
        <Route path="info" element={<Informations />} />
        <Route path="publish" element={<Publish />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
