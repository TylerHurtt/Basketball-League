import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';

export default class Articles extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount() {
    const { match } = this.props;
    getTeamsArticles(match.params.teamId).then((articles) =>
      this.setState(() => ({
        articles,
      }))
    );
  }

  render() {
    const { articles, loading } = this.state;
    const { match } = this.props;
    console.log(match);
    return loading ? (
      <h1 className='center'>Loading...</h1>
    ) : (
      <div className='container two-column'>
        <Sidebar
          list={articles.map((article) => article.title)}
          loading={loading}
          title='Articles'
        />
        <div className='panel'></div>
      </div>
    );
  }
}
