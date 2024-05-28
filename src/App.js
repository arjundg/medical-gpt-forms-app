import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import HealthCondition from "./components/HealthCondition";
import Medicines from "./components/Medicines";
import About from "./components/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicines" element={<Medicines/>} />
          <Route path="/health" element={<HealthCondition/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;