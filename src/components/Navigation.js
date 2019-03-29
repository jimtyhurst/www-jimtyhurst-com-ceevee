import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap"> </a>
    <ul id="nav" className="nav">
      <li>
        <Link className="smoothscroll" to="#home">
          Home
        </Link>
      </li>
      <li>
        <Link className="smoothscroll" to="#about">
          About
        </Link>
      </li>
      <li>
        <Link className="smoothscroll" to="#resume">
          Resume
        </Link>
      </li>
      <li>
        <Link className="smoothscroll" to="#publications">
          Presentations
        </Link>
      </li>
      <li>
        <Link className="smoothscroll" to="#footer">
          Footer
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
