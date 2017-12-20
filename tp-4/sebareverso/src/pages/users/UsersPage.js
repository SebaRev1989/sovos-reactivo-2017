import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Formulario, Listado} from './reduxContainer';

class UsersPage extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.path}/`} component={Listado} />
          <Route path={`${this.props.match.path}/formulario/:id?`} component={Formulario} />
        </Switch>
      </div>
    );
  }
}

export default UsersPage;