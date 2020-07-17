import React from "react";
import './ResumeBody.css';

function ResumeBody() {
    return (
      <div className="ResumeBodyContainer">


        <div className="ResumeMainContainer">
        <div className="ResumeHeading">
               <h1> Wilson Peres Resume</h1>
               <h3> Wilsonperez704@Gmail.com</h3>
          </div>
          <div className="Objective">
              <div className="TitleBox">
                <h2>Objective:</h2>
              </div>
              <div className="InfoResumeBox">
                <p>
                    To start a new career in software engineering and develop new skills that will enhance my personal knowledge  while contributing to the advancement of a company.  
                </p>
                </div>
          </div>
          <div className="Eductaion">
          <div className="TitleBox">
              <h2>Education:</h2>
              </div>
            <div className="InfoResumeBox">
              
                  <p>1) Phillip O. Berry Academy of Technology High School </p>
                  <p>2) Property & Casualty License in all 50 States</p>
                  <p>3) Road 2 Hire Coding Tech Fellowship</p>
            
            </div>
          </div>


          <div className="Skills">
            <div className="TitleBox">
              <h2>Skills:</h2>
            </div>
            <div className="InfoResumeBox">
                  <p>1) Bilingual in English and Spanish</p>
                  <p>2) Programming skills in: HTML, CSS, Javascript ,Node, React, and MySql </p>
                  <p>3) Proficient in Microsoft Excel, Word ,Powerpoint</p>
                  <p>4) Proficient in Autocad and Revit </p>
            </div>
          </div>


          <div className="WorkExp">
            <div className="TitleBox">
              <h2>Work Experience:</h2>
            </div>
            <div className="InfoResumeBox">
              <h3>Road 2 Hire Fellowship, Technology Fellow, Fort Mill, SC</h3>
              <p className="ResumeDates">February 2020 - Current</p>
              
                  <p>Worked with teams in order to develop new full stack websites </p>
                  <p>Developing technical skills that helped design front-end and back-end applications</p>
            

              <h3>Allstate Insurance, Bilingual License Sales Agent, Charlotte, NC</h3>
              <p className="ResumeDates">October 2017 - March 2020</p>
             
                  <p>Advised and properly insure customer’s assets</p>
                  <p>Handled inbound sales calls to facilitate the growth of Allstate’s book of business </p>
                  <p>Worked as a team to increase customer retention and meet sales performance goals</p>
            

              <h3>Dtown Wireless, Sales Associate/Manager, Charlotte NC </h3>
              <p className="ResumeDates">November 2016 - October 2017</p>
              <p className="ResumeDates">November 2014 - April 2016 </p>
            
                  <p>Managed the store according to the owner's standards</p>
                  <p>Cashier; tendered money, preformed daily end of day cash out</p>
                  <p>Trained new staff and making sure they are able to perform their job to their best abilities</p>
                  <p>Continually demonstrated outstanding selling abilities and product knowledge by maintaining an excellent productivity record.</p>

              <h3>Red Ventures, Sales Agent, Fort Mill SC	</h3>
              <p className="ResumeDates"> April 2016 - July 2016 </p>
        
                  <p>Our main task was to speak to customers and build value around our products in order to persuade them to purchase a product</p>
                  <p>To be highly knowledgeable on our products and specials</p>
                  <p>Collaborated with my team of 10-15 sales agents in weekly meetings in order to improve sales</p>
            
          </div>
        </div>
        </div>
      </div>
    ); 
  }
  
  export default ResumeBody;