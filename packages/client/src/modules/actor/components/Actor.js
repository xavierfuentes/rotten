import React from 'react';
import PropTypes from 'prop-types';

/**
 * Approximately 60% of the adult body is made of water (75% in children).
 * The average water output per day is 2500ml (women) and 3500ml (men).
 * For people who are healthy, not particularly active, and living in a moderate climate.
 * It can vary due to:
 * enviromental conditions, activity, age, health, weight, sex or food intake
 */
export default class Actor extends React.Component {
  static propTypes = {
    subscribeToLoop: PropTypes.func.isRequired,
  };

  last = 0;

  loop = now => {
    // execute the actor's loop only every second
    if (!this.last || now - this.last >= 1000) {
      this.last = now;
      console.log('actor loop! -> ', now);
    }
  };

  componentDidMount() {
    this.props.subscribeToLoop(this.loop);
  }

  render() {
    return <div style={{ width: '10px', height: '10px', backgroundColor: '#444' }}>&nbsp;</div>;
  }
}
