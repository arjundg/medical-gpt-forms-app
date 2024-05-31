import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
//import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import Diseases from "./components/Diseases";
import Medicines from "./components/Medicines";
import Symptoms from "./components/Symptoms";
import About from "./components/AboutPage";
import { Navbar, Nav} from 'react-bootstrap'

const App = () => {
  const location  = useLocation;  //add this
  return (
    <Router>
      <Navbar className="bg-body-dark p-1" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>MedicalGPT</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location.pathname} className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/medicines">Medicine Lookup</Nav.Link>
            <Nav.Link href="/symptoms">Symptom Checker</Nav.Link>
            <Nav.Link href="/diseases">Disease Lookup</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicines" element={<Medicines/>} />
          <Route path="/diseases" element={<Diseases/>} />
          <Route path="/symptoms" element={<Symptoms/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;