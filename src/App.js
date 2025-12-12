import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects"
import Services from "./components/Services"

export default function Portfolio() {
  return (
    <div className="container">
      <Navbar /> 
      <Hero />
      <About />
      <Projects />
      <Services />
    </div>
  );
}
