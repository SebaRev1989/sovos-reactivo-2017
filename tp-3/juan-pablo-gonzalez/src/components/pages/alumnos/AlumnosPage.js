import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './components/listado/AlumnoListado';
import AlumnoForm from './components/form/AlumnoForm';

class AlumnosPage extends React.Component {
  constructor(){
    super();
    this.state = {
      alumnos:[]
    }
  }
  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route exact path={`${this.props.match.path}/`} component={AlumnoListado} />
            <Route path={`${this.props.match.path}/form`} component={AlumnoForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

AlumnosPage.propTypes = {
  children: PropTypes.element
};

export default AlumnosPage;
