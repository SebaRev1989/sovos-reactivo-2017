import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlumnoListado from './components/listado/AlumnoListado';
import AlumnoForm from './components/form/AlumnoForm';

class AlumnosPage extends React.Component {
  constructor(){
    super();
    this.state = {
      alumnos:[
        {"apellido": "Juarez", "nombre": "Marcos", "dni": "123456789", "fechaNac": "20-10-1995", "estado": "Regular"},
        {"apellido": "Diaz", "nombre": "Ana", "dni": "123123123", "fechaNac": "5-7-1993", "estado": "Regular"},
        {"apellido": "Perez", "nombre": "Lucas", "dni": "987654321", "fechaNac": "2-10-1991", "estado": "Libre"},
        {"apellido": "Rodriguez", "nombre": "Maria", "dni": "147258369", "fechaNac": "5-9-1989", "estado": "Regular"}
      ]
    };
  }

  handleFormSave = (alumno) => {
    console.log("alumnos page");
    this.props.onNewAlumno(alumno);
  }

  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route exact path={`${this.props.match.path}/`} render={() => <AlumnoListado alumnos={this.state.alumnos}/>} />
            <Route path={`${this.props.match.path}/form`} component={AlumnoForm} onNewAlumno={this.handleFormSave}/>
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
