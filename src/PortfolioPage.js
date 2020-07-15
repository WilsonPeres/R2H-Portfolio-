import React from 'react';
import PortfolioBody from './Componets/Portfolio/PortfolioBody'
import NavBar from "./Componets/NavBar/NavBar";
import Footer from "./Componets/Footer/Footer";

function PortfolioPage() {
  return (
    <div className="">
      <NavBar/>
      <PortfolioBody/>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;