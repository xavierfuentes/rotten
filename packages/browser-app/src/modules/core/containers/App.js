import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <span>App with redux</span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
