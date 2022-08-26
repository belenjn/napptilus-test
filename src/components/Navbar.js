import React from "react";
import "../styles/Navbar.css";
import oompaLoompa from "../assets/logo-umpa-loompa.png";
import { Link } from "react-router-dom";
import { strings } from "../utils/strings";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Link to={"/"}><img src={oompaLoompa} alt="oompa-loompa logo"/></Link>
        <h4>{strings.navbar_title_h4}</h4>
    </div>
  );
};
