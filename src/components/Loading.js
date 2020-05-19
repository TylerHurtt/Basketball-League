import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const stop = this.props.text + '...';
    this.interval = setInterval(() => {
      this.state.text !== stop
        ? this.setState(({ text }) => ({ text: text + '.' }))
        : this.setState({ text: this.props.text });
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='container'>
        <p className='text-center'>{this.state.text}</p>
      </div>
    );
  }
}
