import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

function App() {
  return (
    <Router>
      <Nav />

      <Route exact path={'/'} component={Home} />
      <Route path={'/players'} component={Players} />
      <Route path={'/teams'} component={Teams} />
    </Router>
  );
}

export default App;
