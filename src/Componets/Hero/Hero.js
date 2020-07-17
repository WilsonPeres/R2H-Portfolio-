import React from "react";
import './Hero.css';

function Hero() {
    return (
      <div className="HeroContainer">
        <div>
            <div className="SelfieContainer">
              <img className="SelfieIMG" src="/images/WilsonPhoto.jpg"/>
            </div>
            <div className="HeroTextContainer">
                <h1 className="h1Hero">Wilson Antonio Peres</h1>
                <h3 className="h3Hero">Entrepreneur, product builder and Front End web developer. Passionate about consumer facing applications and the experience that defines them.</h3>
              
            </div>
        </div>
      </div>
    );
  }
  
  export default Hero;