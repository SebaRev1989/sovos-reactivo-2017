import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {
  render(){
    return (
      <div className="menu">
        <span className="search">
          <input type="text" name="search"/>
          <input type="submit" className="button" value="Buscar"/>
        </span>
        <span className="home"><a href="#">Noticias</a></span>
        <span className="alt"><a href="#">Infragantti</a></span>
        <span className="alt"><a href="#">Jarriadas</a></span>
        <span className="alt"><a href="#">Cenas Fin de A&ntilde;o</a></span>
        <span className="alt"><a href="#">Dia del Trabajador</a></span>
      </div>
    );
  }
}

export default Navbar;