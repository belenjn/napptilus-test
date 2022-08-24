import React from "react";
import "../styles/Navbar.css";
import oompaLoompa from "../assets/logo-umpa-loompa.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Link to={"/"}><img src={oompaLoompa} alt="oompa-loompa logo"/></Link>
        <h4>Oompa Loompa's Crew</h4>
    </div>
  );
};
