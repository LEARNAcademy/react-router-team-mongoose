import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"; //<-- These are all components from the router that we use in render().
import TicTacToe from './TicTacToe'

class Projects extends Component {
  render() {
    return(

      <div>
        <h1>Projects</h1>
        <ul>
          <Link to="/projects/tictactoe/">Tic Tac Toe</Link>
        </ul>

      </div>

    )
  }
}

export default Projects
