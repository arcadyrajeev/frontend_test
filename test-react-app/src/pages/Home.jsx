import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
    </div>
  );
}
