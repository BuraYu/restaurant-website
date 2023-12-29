import React from "react";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
