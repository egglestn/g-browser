import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import ConfigPage from './pages/ConfigPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to a react project</h1>
        </header>

        <Router>
          <Route exact path="/" component={ConfigPage} />
        </Router>
      </div>
    );
  }
}

export default App;
