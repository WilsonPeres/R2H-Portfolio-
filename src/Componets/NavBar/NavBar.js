import React from "react";
import './NavBar.css';
import PersonIcon from "./icons/businessman.png";
import SkillIcon from "./icons/innovation.png" ;
import ProjectIcon from "./icons/file.png";
import Contacticon from "./icons/contact.png";
import NavigationItem from "./navigationItem";


function NavBar(props) {
    return (
      <div className="NavContainer">
        <nav className="navbar">
            <ul className="navbar-nav">

            <NavigationItem link="/">
                <li className="nav-item">
                    <img className="IconImg" src={PersonIcon} alt="Icon"/>
                    <a href={props.link} className="nav-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-text">Home {props.children}</span>
                    </a>
                </li>
                </NavigationItem>

                < NavigationItem link="/ResumePage" >
                <li className="nav-item">
                    <img className="IconImg"  src={SkillIcon} alt="Icon"/>
                    <a href={props.link}  className="nav-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-text">Resume {props.children}</span>
                    </a>
                </li>
                </NavigationItem>

                <NavigationItem link="/PortfolioPage" >
                <li className="nav-item">
                    <img className="IconImg"  src={ProjectIcon} alt="Icon"/>
                    <a href={props.link}  className="nav-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-text">Projects {props.children}</span>
                    </a>
                </li>
                </NavigationItem>

                <NavigationItem link="/ContactPage" >
                <li className="nav-item">
                    <img className="IconImg"  src={Contacticon} alt="Icon"/>
                <span className="link-text">Contact</span>
                    {/* <a className="nav-link">
                        <span className="link-text">Contact</span>
                    </a> */}
                </li>
                </NavigationItem>
            </ul>

        </nav>
      
      </div>
    );
  }
  
  export default NavBar;