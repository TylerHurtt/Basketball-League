import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getPlayers } from '../api';
import { parse } from 'query-string';
import { Route, Link } from 'react-router-dom';
import slug from 'slug';

export default class Players extends Component {
  state = {
    players: [],
    loading: true,
  };

  componentDidMount() {
    const { location } = this.props;
    location.search
      ? this.fetchPlayers(parse(location.search).teamId)
      : this.fetchPlayers();
  }

  fetchPlayers = (teamId) => {
    getPlayers(teamId).then((players) => {
      this.setState({
        loading: false,
        players,
      });
    });
  };

  render() {
    const { players, loading } = this.state;
    const { match, location } = this.props;
    console.log(players);
    return (
      <div className='container two-column'>
        <Sidebar
          list={players.map((player) => player.name)}
          loading={loading}
          title='Players'
          {...this.props}
        />
        {!loading && location.pathname === '/players' && (
          <div className='sidebar-instruction'>Select a player</div>
        )}
      </div>
    );
  }
}
