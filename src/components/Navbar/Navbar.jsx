import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar-ul-container">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Offer</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
