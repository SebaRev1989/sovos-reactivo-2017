import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from './shared/components/tapEventPluginInjector';
import App from './pages/layout';
import configureStore from './redux/configureStore';

// bootstrap events for Material UI components
injectTapEventPlugin();

const store = configureStore();

export default RootApp = () => (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);