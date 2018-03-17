import React from 'react';
import PropTypes from 'prop-types';

export default class Actor extends React.Component {
  static propTypes = {
    subscribeToLoop: PropTypes.func.isRequired,
  };

  loop() {
    this.checkVitals();
  };

  checkVitals() {
    this.checkHydration();
  };

  /**
   * Approximately 60% of the adult body is made of water (75% in children).
   * The average water output per day is 2500ml (women) and 3500ml (men).
   * For people who are healthy, not particularly active, and living in a moderate climate.
   * It can vary due to:
   * enviromental conditions, activity, age, health, weight, sex or food intake
   */
  checkHydration() {
    const { vitals: { thirst } } = this.props;
    // console.log(`current thirst: ${thirst}`);
  };

  componentDidMount() {
    this.props.subscribeToLoop(this.loop.bind(this));
  }

  render() {
    return <div style={{ width: '10px', height: '10px', backgroundColor: '#444' }}>&nbsp;</div>;
  }
}
