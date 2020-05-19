import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';
import { Route } from 'react-router-dom';

export default class Articles extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount() {
    const { match } = this.props;
    getTeamsArticles(match.params.teamId).then((articles) =>
      this.setState(() => ({
        loading: false,
        articles,
      }))
    );
  }

  render() {
    const { articles, loading } = this.state;
    const { match } = this.props;
    return loading ? (
      <h1 className='center'>Loading...</h1>
    ) : (
      <div className='container two-column'>
        <Sidebar
          list={articles.map((article) => article.title)}
          loading={loading}
          title='Articles'
          {...this.props}
        />
        <Route path={`${match.url}/:articleId`} />
      </div>
    );
  }
}
