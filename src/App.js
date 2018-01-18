import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import ConfigPage from './pages/ConfigPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={ConfigPage} />
        </Router>
      </div>
    );
  }
}

export default App;
