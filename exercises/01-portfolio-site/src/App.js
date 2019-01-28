import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"; //<-- These are all components from the router that we use in render().

//Pages
//Here are our pages.  They get imported, and then
//rendered as part of the component structure of
//App's render function.
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/about/">About Me</Link>
              </li>
              <li>
                <Link to="/skills/">Skills</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about/" component={AboutMe} />
            <Route path="/skills/" component={Skills} />
            <Route path="/" exact component={Projects} />
            <Route component={ContactMe} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
