import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import FormularioComponent from './Formulario';
import ListadoComponent from './Listado';

import * as usersActions from '../../redux/users/usersActions';

function mapStateToProps(state) {
  return {
    users: state.users.users,
    userSeleccionado: state.users.userSeleccionado,
    trabajando: state.users.trabajando
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export const Listado =  withRouter(connect(mapStateToProps, mapDispatchToProps)(ListadoComponent));
export const Formulario =  withRouter(connect(mapStateToProps, mapDispatchToProps)(FormularioComponent));