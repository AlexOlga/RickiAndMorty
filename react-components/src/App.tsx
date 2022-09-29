import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import About from "./components/about";
import ErrorPage from "./components/error-page";
import HomePage from "components/home-page";

function App() {
  return (
    <>
      <header className="App-header">
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
