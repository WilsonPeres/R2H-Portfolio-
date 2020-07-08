import React from 'react';
import Hero from "./Componets/Hero/Hero";
import NavBar from "./Componets/NavBar/NavBar";
import SkillSection from "./Componets/SkillSection/SkillSection";
import ContactPage from "./Componets/Contact/Contact";
import './App.css';

function App() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <SkillSection/>
      <ContactPage/>
    </div>
  );
}

export default App;
