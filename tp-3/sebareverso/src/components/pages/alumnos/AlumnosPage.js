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
        {
          "apellido": "Juarez",
          "nombre": "Marcos",
          "dni":"12345678",
          "direccion": "Salta 123",
          "fechaNac": "1990-8-20",
          "estado": "Regular"
        },
        {
          "apellido": "Diaz",
          "nombre": "Juan",
          "dni": "87654321",
          "direccion": "Cordoba 456",
          "fechaNac": "1992-6-10",
          "estado": "Regular"
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          <Switch >
            <Route path="/" render={(props) => <AlumnoListado alumnos = {this.state.alumnos} />} />
            <Route path="/form" component={AlumnoForm} />
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
