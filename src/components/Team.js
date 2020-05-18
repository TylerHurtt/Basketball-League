import { Component } from 'react';
import PropTypes from 'prop-types';
import { getTeam } from '../api';

export default class Team extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    chidren: PropTypes.func.isRequired,
  };

  state = {
    team: null,
  };

  componentDidMount() {
    this.fetchTeam(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    nextProps !== this.props && this.fetchTeam(this.props.id);
  }

  fetchTeam = (id) => {
    this.setState({
      team: null,
    });

    getTeam().then((team) =>
      this.setState({
        team,
      })
    );
  };

  render() {
    return this.props.children(this.state.team);
  }
}
