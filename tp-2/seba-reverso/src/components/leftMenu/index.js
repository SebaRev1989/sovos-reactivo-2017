import React from 'react';
import Menu from './menu';
import Fecha from './fecha';
import './leftMenu.scss';

class LeftMenu extends React.Component {
  render(){
    return(
        <div>
          <Menu {...this.props} />
          <Fecha {...this.props} />
        </div>
    );
  }
}

export default LeftMenu;