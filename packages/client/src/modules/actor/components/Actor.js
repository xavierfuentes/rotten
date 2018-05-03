import React from 'react';
// import PropTypes from 'prop-types';

import ACTOR_CONSTANTS from '../constants';

class Actor extends React.Component {
  static propTypes = {};

  componentDidMount() {
    this.props.spawn({
      gender: ACTOR_CONSTANTS.GENDER_FEMALE
    });
  }

  componentWillUnmount() {}

  render() {
    return <div style={{ width: '10px', height: '10px', backgroundColor: '#444' }}>&nbsp;</div>;
  }
}

export default Actor;
