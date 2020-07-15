import React from 'react';
import Hero from "./Componets/Hero/Hero";
import NavBar from "./Componets/NavBar/NavBar";
import SkillSection from "./Componets/SkillSection/SkillSection";
import ContactPage from "./Componets/Contact/Contact";
import Footer from "./Componets/Footer/Footer";
import Personas from "./Componets/Persona/Persona";

function HomePage() {
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <SkillSection/>
      <Personas/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default HomePage;
