/* import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a href="#">Privacidad</a>
        {' | '}
        <a href="#">Seguridad</a>
        {' | '}
        <a href="#">Ayuda</a>
        {' | '}
        <h3> Powered by Sovos </h3>
      </div>
    </div>
  );
};

export default Footer;
 */

import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const homeIcon = <FontIcon className="material-icons">home</FontIcon>;
const securityIcon = <FontIcon className="material-icons">security</FontIcon>;
const helpIcon = <FontIcon className="material-icons">help</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <MuiThemeProvider>
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={homeIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Seguridad"
            icon={securityIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Ayuda"
            icon={helpIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Footer;
