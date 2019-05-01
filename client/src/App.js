import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from "./pages/Game";
import Add from "./pages/Add";


class App extends Component {

  render() {
    return (
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Game} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/add" component={Add} />
        </main>
      </Router>
    );
  }

}

export default App;
