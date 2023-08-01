import React from "react";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";
import Result from "../Pages/Result";
import { Route, Routes } from "react-router-dom";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default AllRoute;
