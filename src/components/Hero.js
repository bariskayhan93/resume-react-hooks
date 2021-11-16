import React from "react";
import Projects from "./section/Projects";
import AboutMe from "./section/AboutMe";
import Home from "./section/Home";
import Contact from "./section/Contact";

export default function Hero() {
  return (
    <div>
      <>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </>
    </div>
  );
}
