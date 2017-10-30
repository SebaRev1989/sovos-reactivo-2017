import React from 'react';
import FechaItem from './fechaItem';

class Fecha extends React.Component {
  render(){
    return(
        <div className="sub_menu">
          <div>Ultimos puterios</div>
          {this.props.fechasList.map(item => <FechaItem fecha = {item.fecha} />)}
        </div>
    );
  }
}

export default Fecha;