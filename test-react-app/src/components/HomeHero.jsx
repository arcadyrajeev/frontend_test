import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/Home.css";

export default function HomeHero() {
  return (
    <div className="hero1">
      <div className="behind-boxes">
        <div className="box" id="behind1">
          first
        </div>
        <div className="box" id="behind2">
          second
        </div>
      </div>
      <div className="front-boxes">
        <div className="box" id="front1">
          first
        </div>
        <div className="box" id="front2">
          second
        </div>
        <div className="box" id="front3">
          third
        </div>
        <div className="box" id="front4">
          fourth
        </div>
      </div>
    </div>
  );
}
