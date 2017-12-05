import React from 'react';
import { NavLink } from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
const Header = () => {
  const activeStyle = {
    padding:3,
    backgroundColor: 'grey',
    border: '2px dashed red',
  };
  const menuStyle = {
    padding:3,
    backgroundColor: 'grey',
    border: '2px dashed red',
  };
  const style = {
    margin: 8,
  };
  const appbarstyle = {
    paddingTop:1,
    paddingLeft:1,
    margin: 1,
  };

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <div className="headStyle">
          <AppBar style={appbarstyle}  title="Sovos Reactivo" />
          <div style={menuStyle}>
          <NavLink exact to="/" >Dashboard</NavLink>
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
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
