import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"; //<-- These are all components from the router that we use in render().

import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import TicTacToe from './pages/TicTacToe'
import Home from './pages/Home'


class App extends Component {
  render() {
    return (
      <div >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About Me</Link>
              </li>
              <li>
                <Link to="/skills/">Skills</Link>
              </li>
              <li>
                <Link to="/projects/">Projects</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about/" component={AboutMe} />
            <Route path="/skills/" component={Skills} />
            <Route path="/projects/" exact component={Projects} />
            <Route path="/contact/" component={Contact} />
            <Route path="/projects/tictactoe/" component={TicTacToe} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
