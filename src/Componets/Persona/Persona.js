import React from "react";
import './Persona.css';
import Reggie from "./PersonaImg/Reggie.jpeg"
import Richie from './PersonaImg/Richie.jpeg'

function Personas() {
    return (
      <div className="MainPersonaContainer">
          <h1 className="h1Persona">Reviews</h1>

          <div className="PersonaContainer">
            <div className="Personajoinbox">
              <div className='ReggieContainer'>
              <img className="PersonaIMG" src={Reggie}/>
              <h3 className="h3Persona">Reggie Johnson</h3>
              <h4 className="H4Persona">Road 2 Hire</h4>
              <h4 className="H4Persona">Teacher Assistant</h4>
              </div>
              <div className="PersonaReview" >
                 <p className="PersonaPara">" Wilson Peres is a hardworking, dedicated, ambitious, and is an amazing team player. Wilson has shown time and time again, that under pressure he will come perform. Wilson’s UI/UX has been a huge strong suit in his arsenal. His growth and curiosity for learning continues to push him forward as a Software Engineer "</p>
               </div>
               </div>
              

              <div className="Personajoinbox">
              <div className='RichieContainer'>
                 <img className="PersonaIMG" src={Richie}/>
                    <h3 className="h3Persona">Richie Spong</h3>
                    <h4 className="H4Persona">Red Ventures</h4>
                    <h4 className="H4Persona">Senior Front End Developer</h4>
              </div>
              <div className="PersonaReview" >
                <p className="PersonaPara2">" I've had the privilege of mentoring Wilson during his time as a Road to Hire student. My main role was to assist Wilson in technical skills as he progressed through the program. Over the months of this rigorous course, Wilson has continually impressed me. He has shown himself as someone who can quickly become adept at new technology, consume volumes of new information, and grow just as rapidly. His intrigue in coding and programming technologies is complemented by his professionalism and will certainly be a benefit in his career. He has been a pleasure to work with and I look forward to seeing what he does next.  "</p>
              </div>
              </div>
           
            
          </div>
      </div>
    );
  }
  
  export default Personas;