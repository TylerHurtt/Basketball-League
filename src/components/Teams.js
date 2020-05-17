import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamNames } from '../api';

export default class Teams extends Component {
  state = {
    teams: [],
    loading: true,
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
    return (
      <div className='container two-column'>
        <Sidebar list={teams} loading={loading} title='Teams' {...this.props} />
      </div>
    );
  }
}
