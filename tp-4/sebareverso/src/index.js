/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/layout';
import configureStore from './redux/configureStore';

const store = configureStore();


require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <AppContainer>
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./pages/layout', () => {
    const NewApp = require('./pages/layout').default;
    render(
      <AppContainer>
        <Provider store={ store }>
          <Router>
            <NewApp />
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}