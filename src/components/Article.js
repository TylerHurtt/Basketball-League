import { Component } from 'react';
import { getArticle } from '../api';
import PropTypes from 'prop-types';

export default class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    teamId: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  };

  state = {
    article: null,
    loading: true,
  };

  componentDidMount() {
    const { teamId, id } = this.props;
    this.fetchArticle(teamId, id);
  }

  componentDidUpdate(nextProps) {
    const { teamId, id } = nextProps;
    nextProps !== this.props && this.fetchArticle(teamId, id);
  }

  fetchArticle = (teamId, id) => {
    this.setState({ article: null, loading: true });

    getArticle(teamId, id).then((article) =>
      this.setState({ loading: false, article })
    );
  };

  render() {
    return this.props.children(this.state.article);
  }
}
