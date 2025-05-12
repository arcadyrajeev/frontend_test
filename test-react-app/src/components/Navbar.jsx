import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <hr></hr>
        <div className="name">STUDIO</div>
      </div>
      <div className="right">
        <NavLink className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Home</div>
            <div className="optiontext__box">Home</div>
          </div>
          <hr />
        </NavLink>
        <h2>,</h2>
        <NavLink className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Works</div>
            <div className="optiontext__box">Works</div>
          </div>
          <hr />
        </NavLink>
        <h2>,</h2>
        <NavLink className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Blogs</div>
            <div className="optiontext__box">Blogs</div>
          </div>
          <hr />
        </NavLink>
        <h2>,</h2>
        <NavLink className="nav-options">
          <div className="optiontext">
            <div className="optiontext__box">Contact</div>
            <div className="optiontext__box">Contact</div>
          </div>
          <hr />
        </NavLink>
      </div>
    </div>
  );
}
