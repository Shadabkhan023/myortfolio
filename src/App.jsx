import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience/>
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
