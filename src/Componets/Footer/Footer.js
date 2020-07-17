import React from "react";
import './Footer.css';
import Github from './Icons/github.png';
import  linkin from './Icons/linkedin.png';

function Footer() {
    return (
      <div className="FooterContainer">
        <div className="FooterBox">    
        <a href="https://github.com/WilsonPeres" target="_blank">
        <img className="FooterIcon" src={Github}/>
        </a>
        <a href="https://www.linkedin.com/in/wilson-peres-4b44561aa/" target="_blank">
        <img className="FooterIcon" src={linkin}/>
        </a>
       
        </div>
        <p> &copy; 2020 WilsonProductions</p>
        <p>Last Updated: 07/17/2020</p>
      </div>
    );
  }
  
  export default Footer;