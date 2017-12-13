import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';



import WelcomePage from './pages/welcome/WelcomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import AboutPage from './pages/about/AboutPage';
import AlumnosPage from './pages/alumnos/AlumnosPage';
import AlumnoListado from './pages/alumnos/components/listado/AlumnoListado';
import AlumnoForm from './pages/alumnos/components/form/AlumnoForm';

import Header from './layout/Header';
import Footer from './layout/Footer';
import './app.scss';


class App extends React.Component {
  constructor(){
    super();
    let alumnosList = [
        { nombre: 'Groucho Marx', dni: '3.141.592', direccion: 'Duck Soup 1933',         fechanac: 'Octubre 2, 1890',    estado: 'Regular' },
        { nombre: 'Chico Marx',   dni: '1.618.033', direccion: 'Animal Crackers1930987', fechanac: 'Marzo 22, 1887',     estado: 'Regular' },
        { nombre: 'Harpo Marx',   dni: '2.718.281', direccion: 'Horse Feathers 1932',    fechanac: 'Noviembre 23, 1888', estado: 'Regular' },
    ];

    this.state = {
      alumnos : alumnosList
    };
  }

  handleNewAlumno = (alumno) => {
    console.log(alumno);
    this.setState({
        alumnos: [...this.state.alumnos, alumno]
    });
  }

  render() {
    return (
        <div className="app">
          <Header/>
          <div className="app-content">
            <Switch >
              <Route exact path="/" component={WelcomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/alumnos" render={(props) => <AlumnosPage {...props} alumnos = {this.state.alumnos} onNewAlumno = {this.handleNewAlumno}/>} />
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
