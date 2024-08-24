import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
