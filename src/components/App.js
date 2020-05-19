import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Loading from './Loading';
const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(() => import('./Teams'));
const TeamPage = React.lazy(() => import('./TeamPage'));
const Articles = React.lazy(() => import('./Articles'));

function App() {
  return (
    <Router>
      <Nav />

      <React.Suspense fallback={Loading}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/players'} component={Players} />
          <Route path={'/teams'} component={Teams} />
          <Route exact path={'/:teamId'} component={TeamPage} />
          <Route path={'/:teamId/articles'} component={Articles} />

          <Route
            render={() => (
              <h1 className='text-center'>{'Uh-Oh... Four Oh Four'}</h1>
            )}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
