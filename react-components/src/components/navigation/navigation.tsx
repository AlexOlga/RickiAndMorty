import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="nav" id="navbar">
      <NavLink end to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/forms" className="link">
        Create characters
      </NavLink>
    </nav>
  );
}

export default Navigation;
