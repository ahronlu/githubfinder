import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fab fa-github" /> Github Finder
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <i className="fas fa-star" />
          </Link>
        </li>
        <li>
          <a href="https://github.com/koftov">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
