import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './components/listado/AlumnoListado';
import AlumnoForm from './components/form/AlumnoForm';
import { NavLink } from 'react-router-dom';

class AlumnosPage extends React.Component {
    handleFormSave = (alumno) => {
      this.props.onNewAlumno(alumno);
    }
    render() {
      return (
        <div>
          <NavLink to="/alumnos/form">Nuevo Alumno</NavLink>
          <div>
            <Switch >
              <Route exact path={`${this.props.match.path}/`} render={(props) => <AlumnoListado alumnos={this.props.alumnos}/>}/>}
              <Route path={`${this.props.match.path}/form`}  component={AlumnoForm} onNewAlumno = {this.handleFormSave} />
            </Switch>
          </div>
        </div>
      );
    }
}

export default AlumnosPage;
