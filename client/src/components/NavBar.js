import { React, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export default function NavBar(props) {
  const [navOpen, setNavOpen] = useState(false);

  function handleHamburgerClick() {
      setNavOpen(!navOpen)
    
  }

  return (
    <div id="Nav-Styling">
        <div id="hamburger-container">
      <Hamburger toggled={navOpen} toggle={setNavOpen} size={40} />
      {!navOpen && <h2 id="menu">Menu</h2>} 
      </div>
  
      {navOpen && (
        <div id="nav-links">
          <Link to="/" onClick={handleHamburgerClick}>Home</Link>
          <Link to="/about" onClick={handleHamburgerClick}>About Me</Link>
          <Link to="/projects" onClick={handleHamburgerClick}>My Projects</Link>
          <Link to="/contact" onClick={handleHamburgerClick}>Contact</Link>
          <div id="icon-container">
            <a href="https://github.com/Msandres123">
              <img className="Icon" src={props.GitHubIcon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mike-andres-795132114/">
              <img className="Icon" src={props.LinkedinIcon} alt="" />
            </a>
            <a href="https://www.facebook.com/mike.andres.54">
              <img className="Icon" src={props.FbIcon} alt="" />
            </a>
          </div>
          <a href={props.Resume} download>
            Resume
          </a>
          </div>
      )}
  
    </div>
  );
}

// https://www.linkedin.com/in/mike-andres-795132114/
