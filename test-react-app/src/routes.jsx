// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Works from "./pages/Work";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/works" element={<Works />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/contacts" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
