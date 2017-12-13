/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProfesorListado from './listado/ProfesorListado';
import ProfesorForm from './form/ProfesorForm';

class ProfesoresPage extends React.Component {
  render() {
    return (
      <div>
        <div className="app-content">
          <Switch >
            <Route path="/" component={ProfesorListado} />
            <Route path="/form" component={ProfesorForm} />
          </Switch>
        </div>        
      </div>
    );
  }
}

ProfesoresPage.propTypes = {
  children: PropTypes.element
};

export default ProfesoresPage;
