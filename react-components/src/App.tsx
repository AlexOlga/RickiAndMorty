import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import About from "./components/about";
import ErrorPage from "./components/error-page";
import HomePage from "components/home-page";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
