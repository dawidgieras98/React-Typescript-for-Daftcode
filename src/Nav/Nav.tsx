import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { IconContext } from "react-icons";
import "../Nav/nav.scss";

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  let menu;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setShowMenu(false);
      }
      if (window.innerWidth > 768) {
        setShowMenu(true);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  if (showMenu) {
    menu = (
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }
  return (
    <IconContext.Provider value={{ className: "hamburger" }}>
      <nav>
        <FcMenu onClick={() => setShowMenu(!showMenu)} />
        {menu}
      </nav>
    </IconContext.Provider>
  );
};

export default Nav;
