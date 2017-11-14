/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import AboutPage from './pages/about/AboutPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './app.scss';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-content">
          <Switch >
            <Route exact path="/" component={WelcomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer/>
        
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
