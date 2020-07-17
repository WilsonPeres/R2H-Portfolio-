import React from "react";
import '../Persona/Persona.css';

function AboutMe() {
    return (
      <div className="MainPersonaContainer">
          <h1 className="h1Persona">About Me</h1>

          <div className="PersonaContainer">
            <div className="Personajoinbox">
              <div className='RichieContainer'>
              <img className="PersonaIMG" src="/images/WilsonPhoto.jpg"/>
              <h3 className="h3Persona">Wilson Peres</h3>
              <h4 className="H4Persona">Road 2 Hire</h4>
              <h4 className="H4Persona">Student</h4>
              </div>
              <div className="PersonaReview" >
                 <p className="PersonaPara2"> Hello everyone and welcome to my portfolio! I am 25 years old and I am currently a student in the Road 2 Hire Tech Fellowship who's striving to become a front end developer. Majority of my professional career I have spend it working in sales. I've enjoyed my time helping customers gain knowledge on a variety of products I would provide them, but i've realized that my interests and passion is within web developing. My main goal is to start a new career in software engineering by learning new software languages and develop new skills that will enhance my personal knowledge while contributing to the advancement of a company. </p>
               </div>
               </div>
            
          </div>
      </div>
    );
  }
  
  export default AboutMe;