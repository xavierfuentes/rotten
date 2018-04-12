import React from 'react';
// import PropTypes from 'prop-types';

class Actor extends React.Component {
  static propTypes = {};

  componentDidMount() {
    this.props.subscribe({ loop: this.props.actorLoop });
  }

  render() {
    return (
      <div style={{ width: '10px', height: '10px', backgroundColor: '#444' }}>
        &nbsp;
      </div>
    );
  }
}

export default Actor;
