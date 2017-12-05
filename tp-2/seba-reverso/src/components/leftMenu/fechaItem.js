import React from 'react';

class FechaItem extends React.Component {
  render(){
    return(
        <a href=""><li>{this.props.fecha}</li></a>
    );
  }
}

export default FechaItem;