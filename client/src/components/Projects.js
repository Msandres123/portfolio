import React from "react";

export default function Projects(props) {
  return (
    <div className="projects-container">
      <h1 id="projects-header">Projects</h1>
      <h4 id="projects-header">Here is a selection of my work.</h4>
      <p>Tic-Tac-Toe</p>
      <div className="work-container">
        <div className="text-container-1">
          <p>
            {" "}
            A team project completed for the Burlington Coding Academy boot
            camp, was built using Vanilla Javascript.
          </p>
          <ul>
            <li>Player vs Player or Player vs computer options available.</li>
            <li>Player's may submit name, or defaults to 'X' and 'O'.</li>
            <li>
              Games are timed with a clock, which informs user of time elapsed.
            </li>
          </ul>
          <p>Links:</p>
          <a href="https://secret-beach-58176.herokuapp.com/">
            <p>Heroku</p>
          </a>
          <a href="https://github.com/Msandres123/Tic-Tac-Toe">
            <p>GitHub</p>
          </a>
        </div>
        <img id="projects-sc-1" src={props.TicTacSC} alt="" />
      </div>
      <p>Yelpington</p>
      <div className="work-container">
        <img id="projects-sc-2" src={props.YelpingtonSC} alt="" />
        <div className="text-container-2">
          <p>
            A restaurant guide, providing information about a handful of
            establishments in Burlington, VT
          </p>
          <ul>
            <li>Was built in React, and used Express.js for the server.</li>
            <li>
              Map was created with Leaflet.js and using API points to display
              restaurant locations and information.
            </li>
          </ul>
          <p>Links:</p>
          <a href="https://github.com/Msandres123/Yelpington">
            <p>GitHub</p>
          </a>
          <a href="https://ma-yelpington.herokuapp.com/"><p>Heroku</p></a>
        </div>
      </div>
      <p>Geo-Vermonter</p>
      <div className="work-container">
          <div className="text-container-1">
        <p>A team project done for Burlington Coding Academy, was built in React and used Leaflet.js to construct the map. The aim of this project was to create a game similar to GeoGuesser, however, the area is limited to Vermont</p>
          <ul>
            <li>Game places marker in randomly generated location inside Vermont state border, and the view is zoomed in.</li>
            <li>Player has the option to move 0.02 degrees north, south, east, west and to return to original location. Each time the player moves they lose a point.</li>
            <li>The goal is for the player to guess what county the marker has been placed in, if the player guesses wrong they lose 10 points, if the player guesses correctly, the game board informs them of the county, town, and the longitude and latitude of the marker.</li>
            <li>Player also has the option to give, in which case the game board will inform them of the county, town, and the longitude and latitude of the marker. </li>
          </ul>
          <p>Links:</p>
          <a href="https://github.com/Msandres123/GeoVermonter"><p>GitHub</p></a>
          </div>
          <img id="projects-sc-2" src={props.GeoVtSC} alt=""/> 

      </div>
    </div>
  );
}
