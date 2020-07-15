import React from 'react';
import Hero from "./Componets/Hero/Hero";
import NavBar from "./Componets/NavBar/NavBar";
import Footer from "./Componets/Footer/Footer";
import Contact from "./Componets/Contact/Contact";

function ContactPage() {
  return (
    <div className="">
      <NavBar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default ContactPage;