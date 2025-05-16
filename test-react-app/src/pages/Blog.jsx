import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <div>
      <div className="head">
        <Navbar />
      </div>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
