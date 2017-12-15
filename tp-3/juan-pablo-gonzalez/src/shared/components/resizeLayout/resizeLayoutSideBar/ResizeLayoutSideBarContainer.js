import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ResizeLayoutSideBar from './ResizeLayoutSideBar';
import * as uxActions from '../../../../redux/ux/UxActions';
import * as overlayLayerActions from '../../../../redux/overlayLayer/OverlayLayerActions';

const mapStateToProps = state => (
  {
    browser: state.browser,
    responsiveDrawer: state.uxReducer
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(Object.assign({}, uxActions, overlayLayerActions), dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ResizeLayoutSideBar);
