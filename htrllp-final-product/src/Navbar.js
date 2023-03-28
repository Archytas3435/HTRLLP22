import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navigation">
      <div className="navigation--header">
        <a>
          <Link to="/" className="header">
            HTRLLAP - Chapter 22(Blindness)
          </Link>
        </a>
      </div>
      <div className="nav--elements">
        <ul className="nav--list">
          <li className="nav--list--item">
            <a>
              <Link to="/visualarts">Visual Arts</Link>
            </a>
          </li>
          <li className="nav--list--item">
            <a>
              <Link to="/music">Music</Link>
            </a>
          </li>
          <li className="nav--list--item">
            <a>
              <Link to="/literature">Literature</Link>
            </a>
          </li>
          <li className="nav--list--item">
            <a>
              <Link to="/movies">Movies</Link>
            </a>
          </li>
          <li className="nav--list--item">
            <a>
              <Link to="/childrenliterature">Children's Literature</Link>
            </a>
          </li>
          <li className="nav--list--item">
            <a>
              <Link to="religioustexts">Religious Texts</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
