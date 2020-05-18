import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamNames } from '../api';
import { Route, Link } from 'react-router-dom';
import TeamLogo from './TeamLogo';
import Team from './Team';

export default class Teams extends Component {
  state = {
    teams: [],
    loading: true,
    selectedTeam: {},
  };

  componentDidMount() {
    getTeamNames().then((teams) =>
      this.setState({
        loading: false,
        teams,
      })
    );
  }

  render() {
    const { teams, loading } = this.state;
    const { location, match } = this.props;

    return (
      <div className='container two-column'>
        <Sidebar list={teams} loading={loading} title='Teams' {...this.props} />
        {!loading && location.pathname === '/teams' && (
          <div className='sidebar-instruction'>Select a team</div>
        )}

        <Route
          path={`${match.url}/:teamId`}
          render={({ match }) => (
            <div className='panel'>
              <Team id={match.params.teamId}>
                {(team) =>
                  !team ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div style={{ width: '100%' }}>
                      <TeamLogo id={match.params.teamId} className='center' />
                      <h1 className='medium-header'>{team.name}</h1>
                      <ul className='info-list row'>
                        <li className='header'>
                          Established
                          <div>{team.established}</div>
                        </li>
                        <li className='header'>
                          Manager
                          <div>{team.manager}</div>
                        </li>
                        <li className='header'>
                          Coach
                          <div>{team.coach}</div>
                        </li>
                      </ul>
                      <Link className='center btn-main' to={`/${team.id}`}>
                        {team.name} Team Page
                      </Link>
                    </div>
                  )
                }
              </Team>
            </div>
          )}
        />
      </div>
    );
  }
}
