import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './listado/AlumnoListado';
import AlumnoForm from './form/AlumnoForm';


class AlumnosPage extends React.Component {

  enviarAlumno = (alumno) =>{
    this.props.onEnviarAlumno(alumno);
  }

  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route exact path={`${this.props.match.path}/`} render={(props) => <AlumnoListado {...props} alumnos = {this.props.alumnos} />} />
            <Route path={`${this.props.match.path}/form`} render={(props) => <AlumnoForm {...props} onSaveClick = {this.enviarAlumno} />} />            
          </Switch>
        </div>
      </div>
    );
  }
}


export default AlumnosPage;
