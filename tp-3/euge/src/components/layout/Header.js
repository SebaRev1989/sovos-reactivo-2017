import React from 'react';
import { NavLink } from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const Header = () => {
  const headStyle = {
    paddingTop:30,
    paddingLeft:10,
   // border: '2px dashed red',
    height: 50
  };

  const activeStyle = {
    padding:3,
    backgroundColor: 'grey'
  };

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="Sovos Reactivo" />

    <div style={headStyle}>
      <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Dashboard</NavLink>
          {' | '}
          <NavLink to="/alumnos" activeStyle={activeStyle}>Alumnos</NavLink>
          {' | '}
          <NavLink to="/materias" activeStyle={activeStyle}>Materias</NavLink>
          {' | '}
          <NavLink to="/profesores" activeStyle={activeStyle}>Profesores</NavLink>
          {' | '}
          <NavLink to="/cursado" activeStyle={activeStyle}>Cursado</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
    </div>
    </MuiThemeProvider>
  );
};

export default Header;
