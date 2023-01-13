import "./App.css";
import React from "react";
import Couple from "./Components/Couple";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <section id="hero">
        <Hero />
      </section>
      <div class="separator"></div>
      <section id="couple">
        <Couple />
      </section>
      <div class="separator-2" />
      <section id="gallery">
        <Gallery />
      </section>
      <div class="separator-3" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

// https://docs.google.com/spreadsheets/d/1gOvMN8dbsy4n6R3al9XAF_WY2xa5Q-kI1O27jJvLGCM/edit#gid=0
