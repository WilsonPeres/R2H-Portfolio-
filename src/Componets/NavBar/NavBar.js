import React from "react";
import './NavBar.css';
import PersonIcon from "./icons/businessman.png";
import SkillIcon from "./icons/innovation.png" ;
import ProjectIcon from "./icons/file.png";
import Contacticon from "./icons/contact.png";

function NavBar() {
    return (
      <div className="NavContainer">
        <nav className="navbar">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <img className="IconImg" src={PersonIcon}/>
                    <a className="nav-link">
                        <span className="link-text">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <img className="IconImg"  src={SkillIcon}/>
                    <a className="nav-link">
                        <span className="link-text">Skills</span>
                    </a>
                </li>
                <li className="nav-item">
                    <img className="IconImg"  src={ProjectIcon} />
                    <a className="nav-link">
                        <span className="link-text">Projects</span>
                    </a>
                </li>
                <li className="nav-item">
                    <img className="IconImg"  src={Contacticon}/>
                    <a className="nav-link">
                        <span className="link-text">Contact</span>
                    </a>
                </li>
            </ul>

        </nav>
      
      </div>
    );
  }
  
  export default NavBar;