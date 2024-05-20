import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;