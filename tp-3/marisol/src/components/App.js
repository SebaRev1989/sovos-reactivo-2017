/* eslint-disable import/no-named-as-default */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import AboutPage from './pages/about/AboutPage';
import AlumnosPage from './pages/alumnos/AlumnosPage';
import MateriasPage from './pages/materias/MateriasPage';
import ProfesoresPage from './pages/profesores/ProfesoresPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './app.scss';

injectTapEventPlugin();


class App extends React.Component {

  constructor (){
    super();

    let alumnosList = [
      {
        nombre: 'Marisol Pagola',
        DNI: '13456789',
        fecNac: 'Octubre 22, 2017',
        dir: 'Don Beverlly Hills 455',
        estado: 'Regular',
      },
      {
        nombre: 'Carlos Lopex',
        DNI: '123456788',
        fecNac: 'Octubre 22, 2017',
        dir: 'San Juan 500',
        estado: 'Ultimísimo',
      }             

    ];  
      
    this.state = {
      listadoAlumnos : alumnosList,
      listadoProfesores: [],
      listadoMaterias: []
    };
  }

  onChange = (alumno) =>{
    console.log(alumno);
    this.setState({
        listadoAlumnos : this.state.listadoAlumnos.concat(alumno)
    });
  };


  render() {
    return (
      <MuiThemeProvider>
        <div className="app">      
          <Header/>
            <div className="app-content">
              <Switch >
  	            <Route exact path="/" component={WelcomePage} />
  	            <Route path="/about" component={AboutPage} />
  	            <Route path="/alumnos" render={(props) => <AlumnosPage { ...props } onEnviarAlumno={this.onChange} alumnos={this.state.listadoAlumnos} />} /> 
  	            <Route path="/materias" component={MateriasPage} />            
  	            <Route path="/profesores" component={ProfesoresPage} />
  	            <Route component={NotFoundPage} />
              </Switch>
            </div>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
