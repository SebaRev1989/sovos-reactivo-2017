import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import FormularioComponent from './Formulario';
import ListadoComponent from './Listado';

import * as postsActions from '../../redux/posts/postsActions';

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    postSeleccionado: state.posts.postSeleccionado,
    trabajando: state.posts.trabajando
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch)
  };
}

export const Listado =  withRouter(connect(mapStateToProps, mapDispatchToProps)(ListadoComponent));
export const Formulario =  withRouter(connect(mapStateToProps, mapDispatchToProps)(FormularioComponent));


