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
              <h2>Eductaion:</h2>
              </div>
            <div className="InfoResumeBox">
              <ul>
                  <li>Phillip O. Berry Academy of Technology High School </li>
                  <li>Property & Casualty License in all 50 States</li>
                  <li>Road 2 Hire Coding Tech Fellowship</li>
              </ul>
            </div>
          </div>


          <div className="Skills">
            <div className="TitleBox">
              <h2>Skills:</h2>
            </div>
            <div className="InfoResumeBox">
              <ul>
                  <li>Bilingual in English and Spanish</li>
                  <li>Programming skills in: HTML, CSS, Javascript,Node,React, and MySql </li>
                  <li>Proficient in Microsoft Excel, Word ,Powerpoint</li>
                  <li>Proficient in Autocad and Revit </li>
              </ul>
            </div>
          </div>


          <div className="WorkExp">
            <div className="TitleBox">
              <h2>Work Experience:</h2>
            </div>
            <div className="InfoResumeBox">
              <h3>Road 2 Hire Fellowship, Technology Fellow, Fort Mill, SC</h3>
              <p className="ResumeDates">February 2020 - Current</p>
              <ul>
                  <li>Worked with teams in order to develop new full stack websites </li>
                  <li>Developing technical skills that helped design front-end and back-end applications</li>
              </ul>

              <h3>Allstate Insurance, Bilingual License Sales Agent, Charlotte, NC</h3>
              <p className="ResumeDates">October 2017 - March 2020</p>
              <ul>
                  <li>Advised and properly insure customer’s assets</li>
                  <li>Handled inbound sales calls to facilitate the growth of Allstate’s book of business </li>
                  <li>Worked as a team to increase customer retention and meet sales performance goals</li>
              </ul>

              <h3>Dtown Wireless, Sales Associate/Manager, Charlotte NC </h3>
              <p className="ResumeDates">November 2016 - October 2017</p>
              <p className="ResumeDates">November 2014 - April 2016 </p>
              <ul>
                  <li>Managed the store according to the owner's standards</li>
                  <li>Cashier; tendered money, preformed daily end of day cash out</li>
                  <li>Trained new staff and making sure they are able to perform their job to their best abilities</li>
                  <li>Continually demonstrated outstanding selling abilities and product knowledge by maintaining an excellent productivity record.</li>
              </ul>

              <h3>Red Ventures, Sales Agent, Fort Mill SC	</h3>
              <p className="ResumeDates"> April 2016 - July 2016 </p>
              <ul>
                  <li>Our main task was to speak to customers and build value around our products in order to persuade them to purchase a product</li>
                  <li>To be highly knowledgeable on our products and specials</li>
                  <li>Collaborated with my team of 10-15 sales agents in weekly meetings in order to improve sales</li>
              </ul>
          </div>
        </div>
        </div>
      </div>
    ); 
  }
  
  export default ResumeBody;