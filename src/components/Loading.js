import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  state = {
    display: this.props.display,
  };

  componentDidMount() {
    const stop = this.props.text + '...';
    this.interval = setInterval(
      this.state.text !== stop
        ? this.setState(({ text }) => ({ text: text + '.' }), this.props.speed)
        : this.setState({ text: this.props.text })
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='container'>
        <p classname='text-center'>{this.state.text}</p>
      </div>
    );
  }
}
