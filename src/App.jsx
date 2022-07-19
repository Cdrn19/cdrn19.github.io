import React from "react";
import Header from "@components/Header";
import Nav from "@components/Nav";
import About from "@components/About";
import Experience from "@components/Experience";
import Services from "@components/Services";
import Portfolio from "@components/Portfolio";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import "@styles/global.css";


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
