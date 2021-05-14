import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
        <div id="Nav-Styling">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">My Projects</Link>
            <Link to="/contact">Contact</Link>
            <div id="icon-container">
            <a href="https://github.com/Msandres123"><img className="Icon" src={props.GitHubIcon} alt=""/></a>
            <a href="https://www.linkedin.com/in/mikael-andres-795132114/"><img className="Icon" src={props.LinkedinIcon} alt=""/></a>
            <a href="https://www.facebook.com/mike.andres.54"><img className="Icon" src={props.FbIcon} alt=""/></a>
            </div>
            <a href={props.Resume} download>Resume</a>
        </div>
    )
}
