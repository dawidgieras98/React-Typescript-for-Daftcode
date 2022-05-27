import React, { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import "../Nav/nav.scss";

const Nav = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            Home
            <Link to={"/"}></Link>
          </li>
          <li>About</li>
          <li>Register</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Router>
  );
};

export default Nav;
