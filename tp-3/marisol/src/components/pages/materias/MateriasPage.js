/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import MateriaForm from './form/MateriaForm';
import MateriaListado from './listado/MateriaListado';

class MateriasPage extends React.Component {
  render() {
    return (
      <div>
        <div className="app-content">
          <Switch >
            <Route path="/" component={MateriaListado} />
            <Route path="/form" component={MateriaForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

MateriasPage.propTypes = {
  children: PropTypes.element
};

export default MateriasPage;
