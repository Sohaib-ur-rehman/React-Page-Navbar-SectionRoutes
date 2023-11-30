import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.PNG";
export default () => (
  <nav className="navbar ">
    <NavLink className="navbar" to="/aboutsohaib">
      ABOUT ME
    </NavLink>

    <NavLink className="navbar" to="/portfoliosohaib">
      PORTFOLIO
    </NavLink>

    <NavLink className="navbar" to="/homeSohaib">
      <img src={logo} alt="bg4" />
    </NavLink>

    <NavLink className="navbar" to="/blogsohaib">
      MY BLOG
    </NavLink>

    <NavLink className="navbar" to="/contactsohaib">
      CONTACT ME
    </NavLink>
  </nav>
);
