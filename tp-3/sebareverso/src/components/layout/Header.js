import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import SelectedField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (evt, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <div>
          <AppBar
            title="Sovos Reactivo - Tuculegio"
            iconClassNameRight="muidocs-icon-navigation-expand-more">
          <SelectedField
            floatingLabelText="Opciones"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText={"Home"} containerElement={<NavLink exact to="/" />}/>
            <MenuItem value={2} primaryText={"Alumnos"} containerElement={<NavLink to="/alumnos" />}/>
            <MenuItem value={3} primaryText={"About"} containerElement={<NavLink to="/about" />}/>
          </SelectedField>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default Header;
