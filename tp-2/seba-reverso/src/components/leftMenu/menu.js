import React from 'react';
import MenuItem from './menuItem';

class Menu extends React.Component {
  render(){
    return(
        <div className="sub_menu">
          <div>Menu</div>
          {this.props.alumnosList.map(item => <MenuItem nombre = {item.nombre} />)}
        </div>
    );
  }
}

export default Menu;