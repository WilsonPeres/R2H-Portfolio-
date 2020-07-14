import React from 'react';
import Hero from "./Componets/Hero/Hero";
import NavBar from "./Componets/NavBar/NavBar";
import Footer from "./Componets/Footer/Footer";
import ResumeBody from "./Componets/ResumeBody/ResumeBody"
import './App.css';

function App() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;