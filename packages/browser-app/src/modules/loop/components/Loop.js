import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loop extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  id = null;

  loop = () => {
    const { subscribers } = this.props;

    subscribers.forEach(callback => {
      callback.call();
    });

    this.id = window.requestAnimationFrame(this.loop);
  }

  componentDidMount() {
    if (!this.id) {
      this.loop();
    }
  }

  componentWillUnmount() {
    if (!this.id) {
      window.cancelAnimationFrame(this.id);
      this.loopID = null;
    }
  }

  render() {
    const defaultStyles = { height: '100%', width: '100%' };
    const styles = { ...defaultStyles, ...this.props.style };

    return <div style={styles}>{this.props.children}</div>;
  }
}
