import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../Nav/nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Nav;
