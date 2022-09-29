import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import About from "./components/about";
import ErrorPage from "./components/error-page";
import HomePage from "components/home-page";
import SearchBar from "components/search-bar";

function App() {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
