import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';
import { Route } from 'react-router-dom';
import Article from './Article';

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
        articles: articles.map((article) => article.title),
      }))
    );
  }

  render() {
    const { articles, loading } = this.state;
    const { match } = this.props;
    const { url } = match;
    const { teamId } = match.params;

    return loading ? (
      <h1 className='center'>Loading...</h1>
    ) : (
      <div className='container two-column'>
        <Sidebar
          list={articles}
          loading={loading}
          title='Articles'
          {...this.props}
        />
        <Route
          path={`${url}/:articleId`}
          render={({ match }) => (
            <Article id={match.params.articleId} teamId={teamId}>
              {(article) =>
                !article ? (
                  <h1 className='center'>Loading...</h1>
                ) : (
                  <div className='panel'>
                    <article className='article' key={article.id}>
                      <h1 className='header'>{article.title}</h1>
                      <h5>{article.date.toLocaleDateString()}</h5>
                      <p>{article.body}</p>
                    </article>
                  </div>
                )
              }
            </Article>
          )}
        />
      </div>
    );
  }
}
