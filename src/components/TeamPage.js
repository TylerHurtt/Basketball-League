import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getTeamsArticles, getTeamNames } from '../api';
import Team from './Team';
import TeamLogo from './TeamLogo';

export default class TeamPage extends Component {
  state = {
    loading: true,
    articles: [],
    teamNames: [],
  };

  componentDidMount() {
    const { match } = this.props;
    Promise.all([getTeamsArticles(match.params.teamId), getTeamNames()]).then(
      ([articles, teamNames]) =>
        this.setState(() => ({
          loading: false,
          articles,
          teamNames,
        }))
    );
  }

  render() {
    const { match } = this.props;
    const { articles, teamNames, loading } = this.state;
    const { teamId } = match.params;

    if (!loading && !teamNames.includes(teamId)) return <Redirect to='/' />;

    return (
      <Team id={teamId}>
        {(team) =>
          !team ? (
            <h1>Loading...</h1>
          ) : (
            <div className='panel'>
              <TeamLogo id={team.id} />
              <h1 className='medium-header'>{team.name}</h1>
              <h4 style={{ margin: 5 }}>
                <Link
                  className='roster'
                  cursor='pointer'
                  to={{
                    pathname: '/players',
                    search: `?teamId=${teamId}`,
                  }}
                >
                  View Roster
                </Link>
              </h4>
              <h4>Championships</h4>
              <ul className='championships'>
                {team.championships.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
              <ul className='info-list row' style={{ width: '100%' }}>
                <li>
                  Established<div>{team.established}</div>
                </li>
                <li>
                  Manager<div>{team.manager}</div>
                </li>
                <li>
                  Coach<div>{team.coach}</div>
                </li>
                <li>
                  Record
                  <div>
                    {team.wins}-{team.losses}
                  </div>
                </li>
              </ul>
              <h2 className='header'>Articles</h2>
              <ul className='articles'>
                {articles.map((article, id) => (
                  <li key={article.id} cursor='pointer'>
                    <Link to={`${match.url}/articles/${article.id}`}>
                      <h4 className='article-title'>{article.title}</h4>
                      <div className='article-date'>
                        {article.date.toLocaleDateString()}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </Team>
    );
  }
}
