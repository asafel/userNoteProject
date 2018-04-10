import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Containers
import App from 'Containers/App';

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
