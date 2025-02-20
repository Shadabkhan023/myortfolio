import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ToastContainer from "./components/ToastContainer";
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
      <ToastContainer />
    </>
  );
}

export default App;
