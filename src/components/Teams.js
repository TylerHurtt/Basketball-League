import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamNames, getTeam } from '../api';
import { Route } from 'react-router-dom';

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
          render={({ match }) => {
            return <div className='panel'>Team</div>;
          }}
        />
      </div>
    );
  }
}
