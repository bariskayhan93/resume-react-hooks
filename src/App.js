import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
//import pages
import Home from "./components/section/Home";
import Projects from "./components/section/Projects";
import AboutMe from "./components/section/AboutMe";
import Error from "./components/section/Error";
import Contact from "./components/section/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

