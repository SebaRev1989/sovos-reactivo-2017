import React from 'react';

class MenuItem extends React.Component {
  render(){
    return(
        <a href="#">Ver Noticias de <b>{this.props.nombre}</b></a>
    );
  }
}

export default MenuItem;