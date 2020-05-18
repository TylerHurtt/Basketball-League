import React, { Component } from 'react';
import { getArticle } from '../api';

class Article extends Component {
  state = {
    article: null,
    loading: true,
  };

  componentDidMount() {
    const { match, location } = this.props;
    // console.log('match', match);
    // getArticle(match.params.articleId).then((article) =>
    //   this.setState(() => ({ loading: false, article }))
    // );
  }
  render() {
    const { article, loading } = this.state;
    return loading ? (
      <h4 className='center'>Loading...</h4>
    ) : (
      <div className='panel'>JSON.stringify(article)</div>
    );
  }
}
