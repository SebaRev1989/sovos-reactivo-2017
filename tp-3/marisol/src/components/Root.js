import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <App /> 
      </Router>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object
};
