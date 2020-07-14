import React from 'react';
import Hero from "./Componets/Hero/Hero";
import NavBar from "./Componets/NavBar/NavBar";
import SkillSection from "./Componets/SkillSection/SkillSection";
import ContactPage from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";
import Personas from "./Componets/Persona/Persona";
import ResumeBody from "./Componets/ResumeBody/ResumeBody"

function App() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <SkillSection/>
      <Personas/>
      <ContactPage/>
      <Footer/>
      <ResumeBody/>
    </div>
  );
}

export default App;
