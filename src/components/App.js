import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/players'} component={Players} />
        <Route path={'/teams'} component={Teams} />
        <Route
          render={() => (
            <h1 className='text-center'>{'Uh-Oh... Four Oh Four'}</h1>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
