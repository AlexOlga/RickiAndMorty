import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <NavLink end to="/" className="link">
        {" "}
        Home
      </NavLink>
      <NavLink to="/about" className="link"> About</NavLink>
    </nav>
  );
}

export default Navigation;
