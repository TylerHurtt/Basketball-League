import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

function App() {
  return (
    <Router>
      <Route to={'/'} component={Home} />
      <Route to={'/players'} component={Players} />
      <Route to={'/teams'} component={Teams} />
    </Router>
  );
}

export default App;
