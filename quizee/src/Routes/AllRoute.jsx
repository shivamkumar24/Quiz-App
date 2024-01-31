import React from "react";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";

import { Route, Routes } from "react-router-dom";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default AllRoute;
