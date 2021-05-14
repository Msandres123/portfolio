//CSS style sheet used to style the page
import "./styles/App.css";
// functional components (Nav-Bar, Home Page, Projects, About, Footer)
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// Route and Switch imported to allow transitions between components (appears to be multiple pages, but really only a single react page)
import { Route, Switch } from "react-router-dom";
//Images and icon imported from image folder
import MikeNCam from "./images/MikeNCam.jpeg";
import GitHubIcon from "./images/gitHubIcon.svg"
import LinkedinIcon from "./images/LinkedIn2.svg"
import FbIcon from "./images/facebIcon.svg"
import TicTacSC from "./images/TTTSC.png"
import YelpingtonSC from "./images/yelpingtonSC.png"
import GeoVtSC from './images/GeoVt2.png'
import Resume from './images/Resume2021.pdf'

function App() {
  // JSX HTML
  return (
    <div className="App">
      {/* Nav-Bar used to navigate through website */}
      <div className="Nav-Container">
        <NavBar GitHubIcon={GitHubIcon} LinkedinIcon={LinkedinIcon} FbIcon={FbIcon} Resume={Resume}/>
      </div>
      {/* Switch used to allow transitions between components */}
      <Switch>
        {/* Route that directs user to the home page */}
        <Route exact path="/">
          <Home  MikeNCam={MikeNCam} />
        </Route>
        {/* Route that directs user to the about page */}
        <Route path="/about" component={About} />
        {/* Route that directs user to the projects page */}
        <Route path="/projects">
          <Projects TicTacSC={TicTacSC} YelpingtonSC={YelpingtonSC} GeoVtSC={GeoVtSC}/>
          </Route> 
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
