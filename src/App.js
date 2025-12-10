import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from "./components/About";

export default function Portfolio() {
  return (
    <div className="container">
      <Navbar /> 
      <Hero />
      <About />
    </div>
  );
}
