import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headStyle = {
    paddingTop:30,
    paddingLeft:10,
    border: '2px dashed red',
    height: 50
  };

  const activeStyle = {
    padding:3,
    backgroundColor: 'red' 
  };

  return (
    <div style={headStyle}>
      <div>
          <NavLink exact to="/" activeStyle={activeStyle}>DashBoard</NavLink>
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
  );
};

export default Header;
