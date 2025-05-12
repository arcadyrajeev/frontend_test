// routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
