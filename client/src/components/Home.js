import React from "react";
import {Link} from "react-router-dom"

export default function Home(props) {
  return (
    <div className="Home-Container">
      <h1>Hello, I'm Mike.</h1>
      <img id="Mike-N-Cam" src={props.MikeNCam} alt="" />
      <h3>Welcome to my site. </h3>
      <p>I am a full stack web developer, and I love building in React. I enjoy coding and getting outside. Checkout the <Link to="/about">about me</Link> page if you'd like to learn more. If you'd like to view my code you can find it in the <Link to="/projects">my projects </Link> page. You can also contact me <Link to="/contact">here</Link>.</p>
    </div>
  );
}
