import React from "react";
import "../styles/Navbar.css";
import oompaLoompa from "../assets/logo-umpa-loompa.png";

export const Navbar = () => {
  return (
    <div className="navbar">
        <img src={oompaLoompa} alt="oompa-loompa logo"></img>
        <h4>Oompa Loompa's Crew</h4>
    </div>
  );
};
