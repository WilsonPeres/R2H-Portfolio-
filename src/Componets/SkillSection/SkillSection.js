import React from "react";
import './SkillSection.css';
import frontEndIcon from './SkillIcons/color-wheel.png'
import backEndIcon from './SkillIcons/BackendIcon.png'
import professionalIcon from './SkillIcons/professional.png'

function SkillSection() {
    return (
      <div className="MainSkillContainer">
          <h1 className="h1Skills">Skills</h1>

          <div className="SkillContainer">

            <div className="joinbox">
              <div className='FrontEndContainer'>
              <h3 className="h3Skills">Front End Skills</h3>
              <img className="skillIcons" src={frontEndIcon}/>
              </div>
              <div className="SkillBox" >
               <ul className="UlSkillBox">
                   <li>React</li>
                   <li>CSS</li>
                   <li>Html</li>
                   <li>Sass</li>
                   <li>Javascript</li>
               </ul>
               </div>
               </div>
              

              <div className="joinbox">
              <div className='BackEndContainer'>
              <h3 className="h3Skills">Back End Skills</h3>
              <img className="skillIcons" src={backEndIcon}/>
              </div>
              <div className="SkillBox" >
                  <ul className="UlSkillBox">
                      <li>Node JS</li>
                      <li>Mongo Db</li>
                      <li>MySQL</li>
                  </ul>
              </div>
              </div>
           
              <div className="joinbox">
              <div className='ProfessionalContainer'>
                <h3 className="h3Skills">Professional Skills</h3> 
                <img className="skillIcons" src={professionalIcon}/>
              </div>
              <div className="SkillBox">
                  <ul className="UlSkillBox">
                  <li>Problem Solving</li>
                  <li>Interview Prep</li>
                  <li>Public Speaking</li>
                  </ul>
              </div>  
              </div> 
            
          </div>
      </div>
    );
  }
  export default SkillSection;