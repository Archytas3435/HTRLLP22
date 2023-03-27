import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="navigation--header">
        <header>
          <Link to = "/" className="header">HTRLLAP - Chapter 22(Blindness)</Link>
        </header>
      </div>
      <div className="nav--elements">
        <ul className="nav--list">
          <li className="nav--list--item">
            <Link to = "/visualarts">Visual Arts</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "/music">Music</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "/literature">Literature</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "/movies">Movies</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "/childrenliterature">Children's Literature</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "religioustexts">Religious Texts</Link>
          </li>
          <li className="nav--list--item">
            <Link to = "/podcasts">Podcasts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
